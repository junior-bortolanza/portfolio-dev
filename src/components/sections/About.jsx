import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  const frontendSkills = ["Angular", "TypeScript", "HTML", "CSS", "React"];

  const backendSkills = [
    "Java 17",
    "Spring Boot",
    "Spring MVC",
    "Spring Security",
    "Spring Data JPA",
    "Hibernate",
    "OpenFeign",
    "APIs REST",
  ];

  const architectureSkills = [
    "Microsserviços",
    "Clean Architecture",
    "Arquitetura em camadas",
    "Clean Code",
    "SOLID",
    "Design Patterns",
    "RabbitMQ",
    "Kafka",
    "PostgreSQL",
    "MongoDB",
  ];

  const devOpsSkills = [
    "Docker",
    "Docker Compose",
    "Git",
    "GitHub Actions",
    "SonarQube",
    "Maven",
    "JUnit 5",
    "Mockito",
    "Swagger/OpenAPI",
    "AWS EC2",
    "AWS S3",
    "AWS IAM",
    "Jira",
    "Postman",
    "IntelliJ IDEA",
  ];

  const educationItems = t("about.educationItems", { returnObjects: true });
  const experiences = t("about.experiences", { returnObjects: true });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-28
                 bg-gradient-to-br from-[#050b16] via-[#06152a] to-[#020617]"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 w-full">
          <h2 className="text-3xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            &lt; {t("about.title")} /&gt;
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gray-300 mb-8 max-w-lg whitespace-pre-line">{t("about.text")}</p>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">{t("about.frontendTitle")}</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                 hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">{t("about.backendTitle")}</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                 hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">{t("about.architectureTitle")}</h3>
                <div className="flex flex-wrap gap-2">
                  {architectureSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                 hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">{t("about.toolsTitle")}</h3>
                <div className="flex flex-wrap gap-2">
                  {devOpsSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                 hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">{t("about.titleEducation")}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {educationItems.map((item) => (
                    <li key={item}>
                      <strong>{item}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">{t("about.workExperience")}</h3>

                <div className="space-y-5 text-gray-300">
                  {experiences.map((experience) => (
                    <div key={`${experience.role}-${experience.meta}`} className="border-l-2 border-blue-500/30 pl-4">
                      <h4 className="font-semibold">{experience.role}</h4>
                      <p className="text-sm text-blue-400 mt-0.5">{experience.meta}</p>
                      <p className="text-sm mt-1">{experience.desc}</p>
                      {experience.highlights && (
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-gray-400">
                          {experience.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};