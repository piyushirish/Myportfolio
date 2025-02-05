import React from 'react'
import { Link } from 'react-router-dom';

// const projects = [
//     {
//       title: "Twitter Clone",
//       description: "A full-stack Twitter clone with authentication, GraphQL API, and Prisma.",
//       techStack: ["React", "TypeScript", "GraphQL", "Prisma", "JWT"],
//       image: "/images/twitter-clone.png",
//       demoLink: "https://your-live-demo-link.com",
//       githubLink: "https://github.com/your-github/twitter-clone",
//     },
//     {
//       title: "Quora Duplicate Question Detector",
//       description: "A machine learning project to detect duplicate questions on Quora.",
//       techStack: ["Python", "SVM", "NLP", "Fuzzy Matching"],
//       image: "/images/quora-nlp.png",
//       demoLink: "https://your-live-demo-link.com",
//       githubLink: "https://github.com/your-github/quora-duplicate-detector",
//     },
//   ];


// export default function Project() {
//   return (
//     <div className="min-h-screen bg-gray-100 py-12">
//       <div className="max-w-6xl mx-auto px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">My Projects</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
//               <img src={project.image} alt={project.title} className="rounded-lg w-full h-40 object-cover" />
//               <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
//               <p className="text-gray-600 mt-2">{project.description}</p>
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {project.techStack.map((tech, i) => (
//                   <span key={i} className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <a href={project.demoLink} target="_blank" className="text-blue-500 hover:underline">
//                   Live Demo
//                 </a>
//                 <a href={project.githubLink} target="_blank" className="text-gray-700 hover:underline">
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



export default function Project() {
  return (
    <div className="min-h-screen bg-gray-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Project Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-400 mb-4">X (Twitter) Clone</h1>
          <p className="text-xl text-slate-400">Built a X(Twitter)-like app with features for posting tweets, following users, liking tweets, and viewing profiles.</p>
        </header>

        {/* Project Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Project Image */}
          <div className="relative group rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <img 
              src="/images/Screenshot 2025-02-05 at 1.13.42 AM.png" 
              alt="Project Screenshot" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-emerald-900/50 opacity-0 transition-opacity duration-300" />
          </div>

          {/* Project Details */}
          <div className="bg-slate-800 p-8 rounded-xl">
           <h3 className="text-2xl font-semibold text-emerald-400 mb-6">Project Specifications</h3>
           <div className="mb-8">
             <h4 className="text-lg font-medium mb-4">Tech Stack</h4>
             <div className="flex flex-wrap gap-3">
               {['Next.js', 'TypeScript', 'GraphQL', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'TailwindCSS'].map((tech) => (
                 <span 
                   key={tech}
                   className="px-4 py-2 bg-slate-700 rounded-full text-sm hover:bg-emerald-400 hover:text-slate-900 transition-colors"
                 >
                   {tech}
                 </span>
               ))}
             </div>
           </div>

           <div className="flex flex-wrap gap-4">
             <a 
               href="#live-demo-url"
               className="px-6 py-3 bg-emerald-400 text-slate-900 rounded-lg font-medium hover:bg-emerald-300 transition-colors"
             >
               Live Demo
             </a>
             <a 
               href="https://github.com/piyushirish/twitter-clone"
               className="px-6 py-3 border border-emerald-400 text-emerald-400 rounded-lg font-medium hover:bg-emerald-400/10 transition-colors"
             >
               GitHub Repository
             </a>
           </div>
         </div>
        </div>

        {/* Project Content Sections */}
        <section className="space-y-16">
          {/* About Section */}
          <div className="bg-slate-800 p-8 rounded-xl">
           <h2 className="text-2xl font-semibold text-emerald-400 mb-6">Project Overview</h2>
             <p className="leading-relaxed">
               Developed a full-stack Twitter clone handling 10k+ daily requests, featuring real-time interactions 
                 and social networking capabilities. The platform enables users to create dynamic content, build 
                 communities, and engage through follows/likes while maintaining enterprise-grade security and 
                 performance.
                </p>
          </div>

          {/* Features Section */}
            {/* Features Section */}
          <div className="bg-slate-800 p-8 rounded-xl">
           <h2 className="text-2xl font-semibold text-emerald-400 mb-6">Core Features</h2>
           <div className="grid md:grid-cols-2 gap-6">
             <div className="p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
              <h3 className="text-lg font-medium mb-3">Tweet Management</h3>
               <p className="text-slate-400">
                 Real-time tweet creation/editing with media uploads, hashtag parsing, and mentions system
                 using GraphQL mutations and React Query
               </p>
             </div>
             <div className="p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
               <h3 className="text-lg font-medium mb-3">Social Graph</h3>
               <p className="text-slate-400">
                Follow/unfollow system with feed personalization using PostgreSQL relationships and
                 optimized queries with Prisma ORM
               </p>
             </div>
             <div className="p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
               <h3 className="text-lg font-medium mb-3">Engagement System</h3>
               <p className="text-slate-400">
                 Like/retweet functionality with real-time counters powered by Redis caching and
                 GraphQL subscriptions
               </p>
             </div>
             <div className="p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
               <h3 className="text-lg font-medium mb-3">User Profiles</h3>
               <p className="text-slate-400">
                 Interactive profiles with activity statistics, follower graphs, and tweet history
                 using TypeScript models
               </p>
             </div>
           </div>
          </div>

          {/* Challenges Section */}
          <div className="bg-slate-800 p-8 rounded-xl">
             <h2 className="text-2xl font-semibold text-emerald-400 mb-6">Technical Challenges</h2>
             <div className="space-y-6">
               <div className="p-6 bg-slate-700/50 rounded-lg">
                 <h3 className="text-lg font-medium text-emerald-300 mb-2">Real-time Feed Updates</h3>
                 <p className="text-slate-400">
                   Maintaining performant real-time updates for large follower bases caused database load spikes
                 </p>
                 <p className="mt-3 text-emerald-400">
                   Solution: Implemented Redis caching layer with GraphQL Subscriptions for batched updates
                 </p>
               </div>
               <div className="p-6 bg-slate-700/50 rounded-lg">
                 <h3 className="text-lg font-medium text-emerald-300 mb-2">Auth Complexity</h3>
                 <p className="text-slate-400">
                   Securing multiple auth providers (Google + JWT) while maintaining session consistency
                 </p>
                 <p className="mt-3 text-emerald-400">
                   Solution: Created unified auth middleware with Next.js API routes and encrypted cookie sessions
                 </p>
               </div>
               <div className="p-6 bg-slate-700/50 rounded-lg">
                 <h3 className="text-lg font-medium text-emerald-300 mb-2">Scalable Deployment</h3>
                 <p className="text-slate-400">
                   Achieving zero-downtime deployments with CDN caching for dynamic content
                 </p>
                 <p className="mt-3 text-emerald-400">
                   Solution: Implemented AWS Elastic Beanstalk with CloudFront caching policies and CI/CD pipeline
                 </p>
               </div>
             </div>
           </div>
        </section>

        {/* Back to Portfolio Link */}
        <div className="mt-16 text-center">
          <Link 
            to='' 
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

//export default ProjectPage;