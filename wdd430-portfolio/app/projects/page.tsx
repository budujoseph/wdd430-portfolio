import { getProjects } from '@/lib/projects-db'; 

export default async function Projects() {
    const projects = await getProjects();

    return (
        <main>
            <h2 className='text-xl font-bold mb-4'>Projects</h2>
            <div className='flex align-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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