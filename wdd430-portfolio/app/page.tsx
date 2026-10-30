import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Sports Foundation Website",
    description: "A responsive website for a sports foundation to showcase their initiatives and engage with the community.",
    technologies: ["HTML", "JavaScript", "CSS"],
    link: "https://github.com/budujoseph/Pep-Sports-Project",
  },

  {
    title: "Arts Management - Backend",
    description: "A backend system for managing and updating the arts organization website content.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/budujoseph/cse341-CRUD",
  }
]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  )
}

