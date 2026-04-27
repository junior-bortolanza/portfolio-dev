import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center scroll-mt-24
                 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]
                 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px]
                     bg-blue-500/20 rounded-full blur-[140px]"
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px]
                     bg-cyan-400/10 rounded-full blur-[120px]"
        />
      </div>

      <RevealOnScroll>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-4 max-w-6xl w-full">
          
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6
                           bg-gradient-to-r from-blue-500 to-cyan-400
                           bg-clip-text text-transparent leading-tight">
              {t("hero.title")}
              
            </h1>
            

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              {t("hero.description")}
              
            </p>

            <div className="flex justify-center md:justify-start gap-4 mb-6">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium
                           transition hover:-translate-y-0.5
                           hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                {t("hero.viewProjects")}
              </a>

              <a
                href="#contacts"
                className="border border-white/20 text-white/80 py-3 px-6 rounded font-medium
                           transition hover:-translate-y-0.5
                           hover:bg-blue-500/20
                           hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              >
                {t("hero.contact")}
              </a>

              <a
                href="./Gelson_Bortolanza_Junior_Backend_Java.pdf"
                download
                className="border border-white/20 text-white/80 py-3 px-6 rounded font-medium
                            transition hover:-translate-y-0.5
                            hover:bg-blue-500/20
                            hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
        
                Download CV
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6">

              <a
                  href="https://github.com/junior-bortolanza"
                  target="_blank"
                  className="text-white/60 hover:text-blue-400 transition"
              >
                <FaGithub size={20} />
              </a>
              
              <a
                href="https://www.linkedin.com/in/juniorbortolanza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl
                           transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/jrbortolanza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 text-2xl
                           transition transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

         
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-24 rounded-full
                           bg-[radial-gradient(circle,rgba(59,130,246,0.35),transparent_70%)]"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-20" />

              <img
                src="/image.jpg"
                alt="Junior Tech"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover
                           border border-blue-500
                           shadow-[0_0_40px_rgba(59,130,246,0.35)]"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
