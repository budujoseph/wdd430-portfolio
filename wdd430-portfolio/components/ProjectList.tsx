import ProjectCard from './ProjectCard';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;   
}

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <section className="grid gap-4 md:grid-cols-2">
            {projects.map(project => (
                <ProjectCard key={project.title} {...project} /> // {...project} spreads the properties of the project object as props to the ProjectCard component
            ))}
        </section>
    )
}