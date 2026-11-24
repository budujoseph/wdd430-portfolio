
import { connection } from 'next/server';
import Link from 'next/link';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import { ProjectSearch } from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';
import { deleteProject } from '@/app/lib/actions';

interface ProjectSearchProps {
    searchParams: Promise<{
        query?: string;
        page?: string;
    }>;
}

export default async function Projects({ searchParams }: ProjectSearchProps) {
    await connection();

    const { query = '', page = '1' } = await searchParams;
    const currentPage = Number(page) || 1;

    const projects = await fetchFilteredProjects(query, currentPage);
    const totalPages = await fetchProjectsPages(query);

    return (
        <main>
            <h2 className="text-xl font-bold mb-4">Projects</h2>

            <ProjectSearch />
            <Pagination totalPages={totalPages} />

            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4">
                        <h3 className="text-lg font-bold">{project.title}</h3>

                        <p className="text-gray-600">{project.description}</p>

                        <p className="text-md font-semibold">{project.type}</p>

                        <p className="text-sm text-gray-500">
                            Skills: {project.technologies.join(', ')}
                        </p>

                        {/* Edit and Delete buttons */}
                        <div className="flex gap-3 mt-4">
                            <Link
                                href={`/projects/${project.id}/edit`}
                                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                            >
                                Edit
                            </Link>

                            <form action={deleteProject}>
                                <input
                                    type="hidden"
                                    name="id"
                                    value={project.id}
                                />

                                <button
                                    type="submit"
                                    className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
