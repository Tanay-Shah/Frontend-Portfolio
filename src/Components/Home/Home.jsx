import { NavLink } from "react-router";
import { FaGamepad, FaComments, FaVoteYea } from "react-icons/fa";

export default function Home() {
  const projects = [
    {
      title: "Tic Tac Game",
      desc: "Play and challenge your friends!",
      link: "/game",
      icon: <FaGamepad className="text-3xl text-blue-300" />,
      inprogress: false,
    },
    {
      title: "YouTube Comments Section",
      desc: "Comment section with nested reply feature",
      link: "/comments",
      icon: <FaComments className="text-3xl text-green-300" />,
      inprogress: false,
    },
    {
      title: "Otp-Login",
      desc: "Otp Login component with auto focus",
      link: "/OtpLogin",
      icon: <FaVoteYea className="text-3xl text-green-300" />,
      inprogress: false,
    },
    {
      title: "Progress Bar",
      desc: "Progress Bar component",
      link: "/progressBar",
      icon: <FaVoteYea className="text-3xl text-green-300" />,
      inprogress: false,
    },
    {
      title: "Movie Ticket Window",
      desc: "Here you can select seats and book movie Tickets",
      link: "/ticketApp",
      icon: <FaVoteYea className="text-3xl text-green-300" />,
      inprogress: false,
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 py-16 px-6 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 drop-shadow mb-10 text-center">
        Machine Coding Questions
      </h1>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        <style>{`
    .pill-dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: linear-gradient(180deg, #60a5fa, #34d399);
      position: relative;
      box-shadow: 0 6px 12px rgba(96,165,250,0.15), inset 0 -2px 6px rgba(0,0,0,0.2);
    }

    /* ripple glow */
    .pill-dot::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 0 0 rgba(96,165,250,0.45);
      animation: ripple 2s infinite ease-out;
    }

    @keyframes ripple {
      0% { box-shadow: 0 0 0 0 rgba(96,165,250,0.45); }
      50% { box-shadow: 0 0 0 8px rgba(96,165,250,0.12); }
      100% { box-shadow: 0 0 0 12px rgba(96,165,250,0); }
    }
  `}</style>
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="
              bg-slate-900/40 border border-white/5 backdrop-blur 
              rounded-2xl p-6 shadow-xl flex flex-col items-center text-center
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/30
            "
          >
            {/* In Progress pill */}
            {proj.inprogress && (
              <div className="absolute top-6 right-4">
                <span className="inline-flex items-center gap-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/10 text-slate-100 backdrop-blur">
                  <span className="pill-dot inline-block"></span>
                  <span>In Progress</span>
                </span>
              </div>
            )}
            {/* Icon */}
            <div className="mb-4">{proj.icon}</div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-slate-100 tracking-wide mb-2">
              {proj.title}
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-6 max-w-xs">{proj.desc}</p>

            {/* Button */}
            <NavLink to={proj.link}>
              <button
                disabled={proj.inprogress}
                className={`
                px-5 py-2 rounded-lg font-semibold
                bg-gradient-to-r from-blue-400 to-green-300 
                text-black shadow-md transition
                ${
                  proj.inprogress
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }
              `}
              >
                Open
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}
