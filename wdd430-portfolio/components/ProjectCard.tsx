interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    link,
}: ProjectCardProps) {
    return (
        <article className="p-4 border-2 border-blue-600 bg-gray-500 rounded">
            <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
            <p className="text-black-700 mb-3 text-black">{description}</p>
            <p className="text-sm text-black">
                <strong>Technologies: </strong>{technologies.join(', ')}
            </p>
            {link && (
                <p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
                </p>
            )}
        </article>
    );
}