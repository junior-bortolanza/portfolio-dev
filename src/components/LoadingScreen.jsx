import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Junior Bortolanza />";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-6">
      
      {/* Texto digitando */}
      <div className="text-blue-500 text-4xl font-mono flex items-center">
        {text}
        <span className="ml-1 animate-blink">|</span>
      </div>

      {/* Barra de loading */}
      <div className="w-64 h-1 bg-blue-950 overflow-hidden rounded">
        <div className="h-full w-1/3 bg-blue-500 animate-loading-bar"></div>
      </div>

    </div>
  );
};
