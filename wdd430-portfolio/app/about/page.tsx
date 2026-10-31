import LearningJourneyList from "@/components/LearningJourneyList"

const learningJourneys = [
    {
        year: "2023",
        title: "Started BYU-Pathway",
        description: "Began my journey toward earning an online degree and developing technical skills.",
    },
    {
        year: "2024",
        title: "Learned Programming Fundamentals",
        description: "Started learning programming fundamentals, including HTML, CSS, and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript", "Python"],
    },
    {
        year: "2026",
        title: "Exploring Full-Stack Development",
        description: "Diving deeper into full-stack development, learning about databases, server-side programming, and front-end frameworks.",
        technologies: ["Node.js", "Express", "React", "MongoDB"],
    }


]


export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-2">
                This about page shares more information about my background and work.
            </p>
            <LearningJourneyList learningJourneys={learningJourneys} />
        </main>
    )
}