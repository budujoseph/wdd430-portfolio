import { connection } from 'next/server'
import { getProjects, fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db'; 
import { ProjectSearch } from '@/components/ProjectSearch';
import Pagination  from '@/components/Pagination'

interface ProjectSearchProps {
    searchParams: Promise<{
        query?: string;
        page?: string;
    }>
}
export default async function Projects({searchParams}: ProjectSearchProps) {
    await connection();

    const { query = '', page = '1' } = await searchParams;
    const currentPage = Number(page) || 1;
    const projects = await fetchFilteredProjects(query, currentPage);

    const totalPages = await fetchProjectsPages(query);

    return (
        <main>
            <h2 className='text-xl font-bold mb-4'>Projects</h2>
            <ProjectSearch />
            <Pagination totalPages={totalPages} />
            <div className='flex align-items mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {projects.map((project) => (
                    <div key={project.id} className='border rounded-lg p-4'>
                        <h3 className='text-lg font-bold'>{project.title}</h3>
                        <p className='text-gray-600'>{project.description}</p>
                        <p className='text-md font-semibold'>{project.type}</p>
                        <p className='text-sm text-gray-500'>Skills: {project.technologies.join(', ')}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}