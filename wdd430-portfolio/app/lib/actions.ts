'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
    title: z.string().min(3, 'Title must be at least three characters'),
    description: z.string().min(20, 'Description must be at least 20 characters'),
    technologies: z.string().min(2, 'Add at least one technology'),
    yearCompleted: z.coerce
        .number()
        .int('Year must be a whole number.')
        .gte(2000, 'Year must be 2000 or later.')
        .lte(currentYear, `Year must be greater than ${currentYear}.`)
});

export type State = {
    errors?: {
        title?: string[];
        description?: string[];
        technologies?: string[];
        yearCompleted?: string[];
    };
    message?: string | null;
};

export async function createProject(prevState: State, formData: FormData) : Promise<State> {
    const validateFields = ProjectFormSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        technologies: formData.get('technologies'),
        yearCompleted: formData.get('yearCompleted')
    })

    
    if (!validateFields.success) {
        return {
            errors: z.flattenError(validateFields.error).fieldErrors,
            message: 'Missing or invalid fields. Failed to create project.',
        }
    }

    const { title, description, technologies, yearCompleted } = validateFields.data;

    const techArray = technologies.split(',').map((technology) => technology.trim()).filter(Boolean);
    const techJson = JSON.stringify(techArray);

    try {
        await sql`
            INSERT INTO projects (title, description, technologies, year_completed)
            VALUES (
                    ${title}, 
                    ${description}, 
                    ARRAY(
                        SELECT jsonb_array_elements_text(${techJson}::jsonb)
                    ),
                    ${yearCompleted}
                )
        `
    } catch {
        return {
            message: 'Database error: Failed to create project',
        };
    }

    revalidatePath('/projects')
    redirect('/projects')
}

export async function updateProjects(id: number, formData: FormData) {
    const raw = {
        title: formData.get('title'),
        description: formData.get('description'),
        technologies: formData.get('technologies'),
        yearCompleted: formData.get('yearCompleted')
    };

    const parsed = ProjectFormSchema.safeParse(raw)
    if (!parsed.success) {
        throw new Error('Invalid project input')
    };

    const { title, description, technologies, yearCompleted } = parsed.data;

    const techArray = technologies.split(',').map((technology) => technology.trim()).filter(Boolean);
    const techJson = JSON.stringify(techArray);

    await sql`
        UPDATE projects 
        SET
            title = ${title},
            description = ${description},
            technologies = ARRAY(
                SELECT jsonb_array_elements_text(${techJson}::jsonb)
            ),
            ${yearCompleted}
        WHERE id = ${id}
    `;

    revalidatePath('/projects')
    revalidatePath('/projects/${id}')

    redirect('/projects')
}

export async function deleteProject(formData: FormData) {
    const id = Number(formData.get('id'));

    if (!Number.isInteger(id) || id <= 0) {
        throw new Error('Invalid project ID');
    }
    try {
        await sql`DELETE FROM projects WHERE id = ${id} `;
        revalidatePath('/projects')
    } catch (error) {
        console.error('Error deleting project', error);
        throw new Error('Failed to delete project. Please try again.');
    }

    revalidatePath('/projects')
    redirect('/projects')
}