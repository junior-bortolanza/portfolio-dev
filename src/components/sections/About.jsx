import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  const frontendSkils = ["HTML", "Css", "JavScript", "React"];

  const backendSkills = [
    "Python",
    "Java",
    "AWS",
    "Docker",
    "MongoDB",
    "Spring Boot",
    "FastAPI",
    "API Restfull"
  ];

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
              <p className="text-gray-300 mb-8 max-w-lg"> {t("about.text")}
               
                   
              </p>
            
              {/* FRONTEND */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Front-end</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkils.map((tech) => (
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

              {/* BACKEND */}
              <div>
                <h3 className="text-xl font-bold mb-3">Backend</h3>
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
            </div>

            {/* EDUCATION + WORK */}
            <div className="grid grid-cols-1 gap-8">

              <div className="p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">{t("about.titleEducation")}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>{t("about.subtitle_1")}</strong>
                  </li>

                  <li>
                    <b>{t("about.subtitle_2")}</b>
                  </li>

                  <li> 
                    <b>{t("about.subtitle_3")}</b> 
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">{t("about.workExperience")}</h3>

                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      {t("about.experience_1")}
                    </h4>
                    
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {t("about.experience_2")}
                    </h4>
                    
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
