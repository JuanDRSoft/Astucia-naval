import React, { useEffect, useState } from "react";

const Win = ({ reset }) => {
  const [confettiCount, setConfettiCount] = useState(50);

  const userName = localStorage.getItem("user");

  useEffect(() => {
    const confettiContainer = document.getElementById("confetti-container");

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 6}s`;
      confettiContainer.appendChild(confetti);
    }
  }, [confettiCount]);

  return (
    <div
      className="confetti-container w-full h-screen fixed top-0 left-0 bg-black/30"
      id="confetti-container"
    >
      <div className="flex justify-center h-full items-center z-20 absolute w-full">
        <div className="bg-white p-10 font-bold rounded-xl">
          <p>
            🎉🎉 Felicidades {userName} Destruiste todos los barcos has ganado
            !! 🎉🎉
          </p>

          <div className="flex justify-center mt-10">
            <button
              onClick={reset}
              className="bg-blue-500 p-2 w-[50%] text-white rounded-xl"
            >
              Reiniciar Juego
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Win;
