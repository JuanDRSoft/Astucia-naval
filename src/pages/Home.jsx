import React, { useState } from "react";
import { alert } from "../components/Alerta";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const newGame = () => {
    if ([user].includes("")) {
      alert("Ingrese un nombre de usuario", "error");
      return;
    }
    localStorage.setItem("user", user);
    navigate("/game");
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="bg-gray-400/80 shadow-xl border-2 border-black p-5 rounded-xl max-w-[400px] w-full">
        <h1 className="text-center text-4xl font-extrabold italic">
          ASTUCIA NAVAL
        </h1>
        <div className="mt-5 px-10 text-center">
          <label className="font-bold text-xl">Nombre de usuario</label>
          <input
            className="w-full border mt-2 p-2 rounded-xl"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button
            onClick={newGame}
            className="w-full mt-5 p-2 bg-black rounded-xl text-white font-bold shadow text-xl"
          >
            Crear Partida
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
