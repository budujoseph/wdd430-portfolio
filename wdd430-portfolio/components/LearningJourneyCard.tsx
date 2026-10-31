interface LearningJourneyProps {
    year: string;
    title: string;
    description: string;
    technologies?: string[];
}

export default function LearningJourneyCard({
    year,
    title,
    description,
    technologies,
}: LearningJourneyProps) {
    return (
        <article className="border-2 border-blue-600 bg-gray-500 p-4 rounded mb-4">
            <h3 className="mb-2 font-bold text-xl"><strong>{year}</strong> - {title}</h3>
            <p>{description}</p>
            <p className="mt-2">{technologies && technologies.join(', ')}</p>
        </article>
    )
}