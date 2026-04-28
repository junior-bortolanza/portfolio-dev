import { useTranslation } from "react-i18next";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.6)] z-40 flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out

                         ${menuOpen ? "h-screen opacity-100 pointer-events-auto"
                                    : "h-0 opacity-0 pointer-events-none"
                         }
                    `}
        >

            <button onClick={() => setMenuOpen(false)}
                    className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                    aria-label="Close Menu"
            >
                &times;
            </button>

            <a href="#home"
               onClick={() => setMenuOpen(false)}
               className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                           ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                {t("nav.home")}
            </a>

            <a href="#about"
               onClick={() => setMenuOpen(false)}
               className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                           ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                {t("nav.about")}
            </a>

            <a href="#projects"
               onClick={() => setMenuOpen(false)}
               className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                           ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                {t("nav.projects")}
            </a>

            <a href="#contacts"
               onClick={() => setMenuOpen(false)}
               className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                           ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                {t("nav.contact")}
            </a>

            <div className="flex items-center gap-4 mt-6 text-sm font-mono">
                <button
                    onClick={() => { i18n.changeLanguage("en"); localStorage.setItem("lang", "en"); }}
                    className={`transition ${i18n.language === "en" ? "text-blue-400" : "text-gray-400"}`}
                >
                    EN
                </button>
                <span className="text-gray-500">|</span>
                <button
                    onClick={() => { i18n.changeLanguage("pt"); localStorage.setItem("lang", "pt"); }}
                    className={`transition ${i18n.language === "pt" ? "text-blue-400" : "text-gray-400"}`}
                >
                    PT
                </button>
            </div>
        </div>
    );
};
