import React, { useEffect } from "react";

const Lose = ({ reset }) => {
  const emojis = ["😢", "😞", "😠"];

  useEffect(() => {
    const confettiContainer = document.getElementById("confetti-container");

    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement("div");
      confetti.className = "emoji";
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      confetti.innerHTML = randomEmoji;
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDelay = `${Math.random() * 10}s`;
      confettiContainer.appendChild(confetti);
    }
  }, [emojis]);

  return (
    <div
      className="confetti-container w-full h-screen fixed top-0 left-0 bg-black/30"
      id="confetti-container"
    >
      <div className="flex justify-center h-full items-center z-20 absolute w-full">
        <div className="bg-white p-10 font-bold rounded-xl">
          <p>😢 Fallaste muchas veces juego terminado 😠</p>

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

export default Lose;
