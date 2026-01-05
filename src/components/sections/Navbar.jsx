import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return (    
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white"> 
                        {" "}
                        junior<span className="text-blue-500">.dev</span>
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                    onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hove:text-white transition-colors"> {" "}
                        {t("nav.home")} 
                        </a>

                        <a href="#about" className="text-gray-300 hove:text-white transition-colors"> {" "}
                        {t("nav.about")} 
                        </a>

                        <a href="#projects" className="text-gray-300 hove:text-white transition-colors">{" "}
                        {t("nav.projects")}
                        </a>
                         <a href="#contacts" className="text-gray-300 hove:text-white transition-colors"
                        >
                            {" "}
                         {t("nav.contact")} 
                        </a>
                        
                            {/* LANGUAGE SWITCH */}
                    <div className="flex items-center gap-2 text-sm font-mono ml-4">
                    <button
                        onClick={() => {
                        i18n.changeLanguage("en");
                        localStorage.setItem("lang", "en");
                        }}
                        className={`transition ${
                        i18n.language === "en"
                            ? "text-blue-400"
                            : "text-gray-400 hover:text-white"
                        }`}
                    >
                        EN
                    </button>

                    <span className="text-gray-500">|</span>

                    <button
                        onClick={() => {
                        i18n.changeLanguage("pt");
                        localStorage.setItem("lang", "pt");
                        }}
                        className={`transition ${
                        i18n.language === "pt"
                            ? "text-blue-400"
                            : "text-gray-400 hover:text-white"
                        }`}
                    >
                        PT
                    </button>
                    </div> 

                    </div>
                </div> 
            </div>
        </nav>
)
}