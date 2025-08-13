import { projects, Project } from "@/app/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectDetailsPageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  // Await params because Next.js app router may provide it asynchronously
  const { projectId } = await params;

  const project: Project | undefined = projects.find(
    (p) => p.id.toString() === projectId
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="text-teal-600 hover:underline mb-8 inline-block"
        >
          &larr; Back to Projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {project.name}
        </h1>

        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={500}
          className="rounded-lg shadow-lg mb-8 w-full"
        />

        <div className="space-y-6 text-lg text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
            <p>{project.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Challenges Faced
            </h2>
            <p>{project.challenges}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Future Improvements
            </h2>
            <p>{project.improvements}</p>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              <FaExternalLinkAlt />
              Live Project
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
            >
              <FaGithub />
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
