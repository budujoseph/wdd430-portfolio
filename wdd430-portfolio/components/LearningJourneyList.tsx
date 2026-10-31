import LearningJourneyCard from './LearningJourneyCard';

interface LearningJourney {
    year: string;
    title: string;
    description: string;
    technologies?: string[];
}

interface LearningJourneyListProps {
    learningJourneys: LearningJourney[];
}

export default function LearningJourneyList({ learningJourneys }: LearningJourneyListProps) {
    return (
        <section className="grid gap-4 md:grid-cols-2">
            {learningJourneys.map(journey => (
                <LearningJourneyCard key={journey.year + journey.title} {...journey} />
            ))}
        </section>
    )
}