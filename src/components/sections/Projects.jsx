import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  const dscommerceTechs = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "OAuth2",
    "JWT",
    "Hibernate",
    "Swagger/OpenAPI",
  ];

  const taskSchedulerTechs = [
    "Java 17",
    "Spring Boot",
    "Angular",
    "RabbitMQ",
    "Feign Client",
    "PostgreSQL",
    "MongoDB",
    "Docker Compose",
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-28
                 bg-gradient-to-br from-[#050b16] via-[#06152a] to-[#020617]"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center
                         bg-gradient-to-r from-blue-500 to-cyan-400
                         bg-clip-text text-transparent">
            &lt; {t("projects.title")}/&gt;
          </h2>
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10
                            bg-white/5 rounded-2xl p-8
                            hover:-translate-y-1 transition-all">
              <div>
                <span className="text-sm text-blue-400">{t("projects.featured_project")}</span>

                <h3 className="text-2xl font-bold mt-2 mb-4">
                  {t("projects.dscommerce_name")}
                </h3>

                <p className="text-gray-300 mb-6">
                  {t("projects.title_featured_project")}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {dscommerceTechs.map((tech) => (
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
                    href="https://github.com/junior-bortolanza/DScommerce"
                    className="bg-blue-500 px-4 py-2 rounded-md text-white
                               hover:bg-blue-600 transition"
                  >
                    {t("projects.view_code")}
                  </a>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <img
                  src="/swagger_dscommerce.png"
                  alt="Swagger DSCommerce"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-6
                            hover:-translate-y-1 transition-all">
              <img
                src="/api_clients.png"
                alt="API de Clientes"
                className="rounded-xl mb-4"
              />

              <h3 className="text-lg font-bold mb-2">{t("projects.api_clientes_name")}</h3>

              <p className="text-gray-300 text-sm mb-4">
                {t("projects.api_clientes_desc")}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Spring Boot", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/junior-bortolanza/clientes"
                className="text-blue-400 text-sm"
              >
                {t("projects.view_github")}
              </a>
            </div>

            <div className="bg-white/5 rounded-2xl p-6
                            hover:-translate-y-1 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-sm font-bold text-blue-400">
                  TS
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2">{t("projects.task_scheduler_name")}</h3>

              <p className="text-gray-300 text-sm mb-4">
                {t("projects.task_scheduler_desc")}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {taskSchedulerTechs.map((tech) => (
                  <span key={tech} className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/junior-bortolanza/bff-task-scheduler"
                className="text-blue-400 text-sm"
              >
                {t("projects.view_github")}
              </a>
            </div>

            <div className="bg-white/5 rounded-2xl p-6
                            hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-sm font-bold text-blue-400">
                  DS
                </div>
                <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                  {t("projects.in_progress")}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2">{t("projects.dscatalog_name")}</h3>

              <p className="text-gray-300 text-sm mb-4">
                {t("projects.dscatalog_desc")}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Spring Boot", "JUnit 5", "Mockito", "Spring Data JPA"].map((tech) => (
                  <span key={tech} className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <span className="text-gray-500 text-sm">{t("projects.coming_soon")}</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
