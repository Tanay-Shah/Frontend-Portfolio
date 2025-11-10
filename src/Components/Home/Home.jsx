import { NavLink } from "react-router";

export default function Home() {
  const projects = [
    {
      title: "Tic Tac Game",
      desc: "Play and challenge your friends!",
      link: "/game",
    },
    {
      title: "YouTube Comments Section",
      desc: "Comment section with nested reply feature",
      link: "/comments",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black py-12 px-6">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
        🚀 Machine Coding Questions
      </h1>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl shadow-xl p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-3">
              {proj.title}
            </h2>
            <p className="text-white/90 mb-6">{proj.desc}</p>
            <NavLink to={proj.link}>
              <button className="px-5 py-2 rounded-xl font-semibold bg-white text-blue-600 transition hover:bg-blue-600 hover:text-white">
                Open
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
