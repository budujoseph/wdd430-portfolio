import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';
import { updateProjects } from '@/app/lib/actions';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function EditProjectPage({ params }: Props) {
    const { id } = await params;
    const projectId = Number(id);

    if (!Number.isInteger(projectId) || projectId <= 0) {
        notFound();
    }

    const result = await sql`
        SELECT id, title, description, technologies
        FROM projects
        WHERE id = ${projectId}
    `;

    const project = result.rows[0];
    if (!project) {
        notFound();
    }

    const updateProjectWithId = updateProjects.bind(null, projectId);

    return (
            <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-10">
                
                <form action={updateProjectWithId} className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-blue-100 space-y-5">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-blue-900">Edit Project Information</h2>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor='title' className='block text-sm font-semibold text-blue-900'>Title</label>
                        <input id='title' name='title' type='text'
                            defaultValue={project.title}
                            required
                            className="w-full rounded-lg border border-blue-200 bg-blue-50/50 px-4 py-3 text-blue-950 placeholder-blue-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div>
                        <label htmlFor='description' className='block text-sm font-semibold text-blue-900'>Description</label>
                        <textarea id='description' name='description' 
                            defaultValue={project.description} rows={5} 
                            required
                            className="w-full resize-y rounded-lg border border-blue-200 bg-blue-50/50 px-4 py-3 text-blue-950 placeholder-blue-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                        />
                    </div>

                    <div>
                        <label htmlFor='technologies' className='block text-sm font-semibold text-blue-900'>Technologies
                            <span className="ml-1 text-xs font-normal text-blue-500">(comma separated)</span>
                        </label>
                        <input id='technologies' name='technologies' type='text'
                            defaultValue={
                                Array.isArray(project.technologies)
                                    ? project.technologies.join(', ')
                                    :project.technologies
                            }
                            required
                            className="w-full rounded-lg border border-blue-200 bg-blue-50/50 px-4 py-3 text-blue-950 placeholder-blue-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    
                    <div >
                        <label htmlFor='yearCompleted' className='block text-sm font-semibold text-blue-900'>Year Completed</label>
                        <input id='yearCompleted' name='yearCompleted' type='number'
                        min='2000'
                        max='2099'
                        required
                         className="w-full rounded-lg border border-blue-200 bg-blue-50/50 px-4 py-3 text-blue-950 placeholder-blue-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <button type='submit' 
                        className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-blue-800 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Update Project
                    </button>
                </form>
            </div>
    )
}
