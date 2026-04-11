import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: "Rentora",
    description: "MERN rental property platform with JWT auth, wishlist, robust booking flow, and an extensive admin dashboard.",
    tech: ["React", "Tailwind CSS", "Node.js","Cloudinary" ,"Express", "MongoDB", "Redux" ],
    demoLink: "https://mern-stack-frontend-mu.vercel.app/",
    githubLink: "https://github.com/AbdulHadhi-m/mern-stack-project",
    image: "rentorapic.png"
  },
  {
    title: "GoPath",
    description: "Complete bus booking platform featuring seat selection, secure payment integration, and roles for operator/admin/user.",
    tech: ["React", "Express", "MongoDB", "Redux", "Tailwind CSS", "Node.js"],
    demoLink: "#",
    githubLink: "https://github.com/AbdulHadhi-m/go",
    image: "gopathpic.png"
  },
  {
  title: "Personal Portfolio",
  description:
    "Modern responsive developer portfolio built to showcase my MERN stack projects, skills, services, and contact information with premium UI animations and smooth user experience.",
  tech: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "JavaScript"
  ],
  demoLink: "https://portfolio-dev-two-weld.vercel.app/",
  githubLink: "https://github.com/AbdulHadhi-m/Portfolio-dev",
  image: "port2.png"
},{
  title: "Quizivo",
  description:
    "AI-powered MERN quiz platform featuring timed challenges, dynamic question generation with Gemini API, real-time leaderboard rankings, secure JWT authentication, and category-based quiz experiences.",
  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "Redux Toolkit",
    "Tailwind CSS",
    "Gemini API"
  ],
  demoLink: "https://quizivo-client.vercel.app/",
  githubLink: "https://github.com/AbdulHadhi-m/Quizivo",
  image: "quiz1.png"
}
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 flex items-center gap-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="flex flex-col gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden group flex flex-col xl:flex-row"
            >
              {/* Project Image */}
              <div className="xl:w-2/5 aspect-video xl:aspect-auto overflow-hidden relative border-b xl:border-b-0 xl:border-r border-white/10">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10 duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 xl:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-outfit mb-3 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium px-3 py-1 rounded-full bg-surface border border-white/5 text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all font-medium border border-primary/20 hover:border-primary"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card hover:bg-white/10 transition-all font-medium text-white"
                  >
                    <Code size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
