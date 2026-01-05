import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-28
                 bg-gradient-to-br from-[#050b16] via-[#06152a] to-[#020617]"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">

          {/* TÍTULO */}
          <h2 className="text-3xl font-bold mb-16 text-center
                         bg-gradient-to-r from-blue-500 to-cyan-400
                         bg-clip-text text-transparent">
            &lt; Projetos /&gt;
          </h2>
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10
                            bg-white/5 rounded-2xl p-8
                            hover:-translate-y-1 transition-all">

              {/* TEXTO */}
              <div>
                <span className="text-sm text-blue-400">⭐ Projeto Destaque</span>

                <h3 className="text-2xl font-bold mt-2 mb-4">
                  Cloud Platform
                </h3>

                <p className="text-gray-300 mb-6">
                  Scalable cloud infrastructure management with real-time
                  monitoring and automated scaling.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Node.js", "AWS", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400
                                 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-blue-500 px-4 py-2 rounded-md text-white
                               hover:bg-blue-600 transition"
                  >
                    Ver Código
                  </a>
                  <a
                    href="#"
                    className="border border-white/20 px-4 py-2 rounded-md
                               hover:bg-white/10 transition"
                  >
                    Demo Live
                  </a>
                </div>
              </div>

              {/* IMAGEM */}
              <div className="flex justify-center items-center">
                <img
                  src="./public/cloud.png"
                  alt="Cloud Platform"
                  className="rounded-xl shadow-2xl"
                />
              </div>

            </div>
          </div>

          {/* ========================= */}
          {/* GRID DE PROJETOS */}
          {/* ========================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-white/5 rounded-2xl p-6
                            hover:-translate-y-1 transition-all">
              <img
                src="./public/taskmanager.png"
                alt="Task Manager Pro"
                className="rounded-xl mb-4"
              />

              <h3 className="text-lg font-bold mb-2">Task Manager Pro</h3>

              <p className="text-gray-300 text-sm mb-4">
                Aplicativo de gerenciamento de tarefas focado em produtividade.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs">
                  Vue
                </span>
                <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs">
                  MongoDB
                </span>
              </div>

              <a className="text-blue-400 text-sm">Ver no GitHub →</a>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/5 rounded-2xl p-6
                            hover:-translate-y-1 transition-all">
              <img
                src="./public/weather.png"
                alt="Weather Forecast App"
                className="rounded-xl mb-4"
              />

              <h3 className="text-lg font-bold mb-2">Weather Forecast App</h3>

              <p className="text-gray-300 text-sm mb-4">
                Previsão do tempo com dados em tempo real e interface intuitiva.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs">
                  React Native
                </span>
                <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs">
                  API
                </span>
              </div>

              <a className="text-blue-400 text-sm">Ver no GitHub →</a>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/5 rounded-2xl p-6
                            hover:-translate-y-1 transition-all">
              <img
                src="./public/analytics.png"
                alt="Social Analytics Dashboard"
                className="rounded-xl mb-4"
              />

              <h3 className="text-lg font-bold mb-2">
                Social Analytics Dashboard
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                Dashboard para análise de redes sociais com métricas em tempo real.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs">
                  Java
                </span>
                <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs">
                  Python
                </span>
                <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs">
                  Docker
                </span>
              </div>

              <a className="text-blue-400 text-sm">Ver no GitHub →</a>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
