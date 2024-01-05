import React, { useEffect, useState } from "react";
import { indiceColumnas, indiceFilas } from "../utils/dashboard";
import Win from "../components/Win";
import Lose from "../components/Lose";

const Dashboard = () => {
  const [user, setUser] = useState("");
  const [game, setGame] = useState([]);
  const [start, setStart] = useState(false);
  const [barcosDestruidos, setBarcosDestruidos] = useState(0);
  const [fallos, setFallos] = useState(0);

  useEffect(() => {
    setGame(Array.from({ length: 10 }, () => Array(10).fill(0)));

    const userName = localStorage.getItem("user");
    setUser(userName);
  }, []);

  function posicionOcupada(matriz, fila, columna) {
    return matriz[fila] && matriz[fila][columna] === 1;
  }

  function colocarBarcoHorizontal(matriz) {
    let newGame = matriz;

    let filaInicial, columnaInicial;

    do {
      filaInicial = Math.floor(Math.random() * newGame.length);
      columnaInicial = Math.floor(Math.random() * (newGame[0].length - 3));
    } while (
      posicionOcupada(newGame, filaInicial, columnaInicial) ||
      posicionOcupada(newGame, filaInicial - 1, columnaInicial) ||
      posicionOcupada(newGame, filaInicial + 1, columnaInicial) ||
      posicionOcupada(newGame, filaInicial - 1, columnaInicial + 1) ||
      posicionOcupada(newGame, filaInicial + 1, columnaInicial + 1) ||
      posicionOcupada(newGame, filaInicial, columnaInicial + 1) ||
      posicionOcupada(newGame, filaInicial - 1, columnaInicial + 2) ||
      posicionOcupada(newGame, filaInicial + 1, columnaInicial + 2) ||
      posicionOcupada(newGame, filaInicial, columnaInicial + 2) ||
      posicionOcupada(newGame, filaInicial - 1, columnaInicial + 3) ||
      posicionOcupada(newGame, filaInicial + 1, columnaInicial + 3) ||
      posicionOcupada(newGame, filaInicial, columnaInicial + 3)
    );

    for (let i = 0; i < 4; i++) {
      newGame[filaInicial][columnaInicial + i] = 1;
    }

    setGame(newGame);
  }

  function colocarBarcoVertical(matriz) {
    let newGame = matriz;
    let filaInicial, columnaInicial;

    do {
      filaInicial = Math.floor(Math.random() * (newGame.length - 3));
      columnaInicial = Math.floor(Math.random() * newGame[0].length);
    } while (
      posicionOcupada(newGame, filaInicial, columnaInicial) ||
      posicionOcupada(newGame, filaInicial, columnaInicial - 1) ||
      posicionOcupada(newGame, filaInicial, columnaInicial + 1) ||
      posicionOcupada(newGame, filaInicial + 1, columnaInicial - 1) ||
      posicionOcupada(newGame, filaInicial + 1, columnaInicial + 1) ||
      posicionOcupada(newGame, filaInicial + 1, columnaInicial) ||
      posicionOcupada(newGame, filaInicial + 2, columnaInicial - 1) ||
      posicionOcupada(newGame, filaInicial + 2, columnaInicial + 1) ||
      posicionOcupada(newGame, filaInicial + 2, columnaInicial) ||
      posicionOcupada(newGame, filaInicial + 3, columnaInicial - 1) ||
      posicionOcupada(newGame, filaInicial + 3, columnaInicial + 1) ||
      posicionOcupada(newGame, filaInicial + 3, columnaInicial)
    );

    for (let i = 0; i < 4; i++) {
      newGame[filaInicial + i][columnaInicial] = 1;
    }

    setGame(newGame);
  }

  const iniciar = () => {
    for (let i = 0; i < 2; i++) {
      colocarBarcoHorizontal(game);
    }

    for (let i = 0; i < 3; i++) {
      colocarBarcoVertical(game);
    }

    setStart(true);
  };

  const atacar = (matriz, fila, columna) => {
    if (game[fila][columna] === 0) {
      setFallos(fallos + 1);
    }

    if (game[fila][columna] === 2) {
      return;
    }

    const newMatriz = matriz.map((filaArray, indexFila) => {
      if (indexFila === fila) {
        return filaArray.map((elemento, indexColumna) => {
          if (indexColumna === columna) {
            if (elemento === 1) {
              return 2;
            } else if (elemento === 2) {
              return elemento;
            } else {
              return 3;
            }
          } else {
            return elemento;
          }
        });
      } else {
        return filaArray;
      }
    });

    setGame(newMatriz);

    let barcosDestruidosTemp = barcosDestruidos;
    if (newMatriz[fila][columna] === 2) {
      const barcoCompletoDestruidoVertical =
        (fila + 3 < newMatriz.length &&
          newMatriz[fila][columna] === 2 &&
          newMatriz[fila + 1][columna] === 2 &&
          newMatriz[fila + 2][columna] === 2 &&
          newMatriz[fila + 3][columna] === 2) ||
        (fila - 3 >= 0 &&
          newMatriz[fila][columna] === 2 &&
          newMatriz[fila - 1][columna] === 2 &&
          newMatriz[fila - 2][columna] === 2 &&
          newMatriz[fila - 3][columna] === 2);

      const barcoCompletoDestruidoHorizontal =
        (columna + 3 < newMatriz[0].length &&
          newMatriz[fila][columna] === 2 &&
          newMatriz[fila][columna + 1] === 2 &&
          newMatriz[fila][columna + 2] === 2 &&
          newMatriz[fila][columna + 3] === 2) ||
        (columna - 3 >= 0 &&
          newMatriz[fila][columna] === 2 &&
          newMatriz[fila][columna - 1] === 2 &&
          newMatriz[fila][columna - 2] === 2 &&
          newMatriz[fila][columna - 3] === 2);

      if (barcoCompletoDestruidoVertical || barcoCompletoDestruidoHorizontal) {
        barcosDestruidosTemp += 1;
      }
    }

    setBarcosDestruidos(barcosDestruidosTemp);
  };

  const reset = () => {
    setGame(Array.from({ length: 10 }, () => Array(10).fill(0)));
    setStart(false);
    setFallos(0);
    setBarcosDestruidos(0);
  };

  return (
    <div className="h-screen p-10 mb-14">
      {barcosDestruidos == 5 && <Win reset={reset} />}
      {fallos == 80 && <Lose reset={reset} />}

      <div className="w-full flex justify-between bg-gradient-to-r from-blue-800 to-cyan-400 rounded-xl shadow p-5 mb-5">
        <p className="text-white font-bold text-xl">Jugador: {user}</p>
        <p className="text-white font-bold text-xl">
          Barcos Destruidos: {barcosDestruidos}
        </p>
        <p className="text-white font-bold text-xl">
          Tiros Fallidos: {fallos}/80
        </p>
      </div>

      <div>
        <div className="ml-10 flex  bg-gradient-to-r from-yellow-500 to-orange-400 mb-2 rounded-lg">
          {indiceColumnas.map((e) => (
            <div className="w-full flex justify-center py-1 font-bold text-white text-xl border-l">
              {e}
            </div>
          ))}
        </div>

        <div className="flex">
          <div className="grid rounded-lg overflow-hidden mr-2 bg-gradient-to-b from-yellow-500 to-orange-400">
            {indiceFilas.map((e) => (
              <div className="flex items-center justify-center uppercase text-2xl px-2 border-b text-white font-bold">
                {e}
              </div>
            ))}
          </div>

          <div className="bg-white/95 w-full h-full rounded-xl overflow-hidden grid">
            {game.map((e, fila) => (
              <div className="grid grid-cols-10">
                {e.map((e, columna) => (
                  <div
                    className="cursor-pointer hover:bg-white border w-full h-full p-5 flex justify-center items-center font-bold text-4xl"
                    onClick={() => atacar(game, fila, columna)}
                  >
                    {(e == 0 || e == 1) && <div className="text-white">-</div>}
                    {e == 2 && <div className="text-blue-500">O</div>}
                    {e == 3 && <div className="text-red-500">X</div>}
                  </div>
                ))}
              </div>
            ))}

            {!start && (
              <div className="fixed w-full h-screen bg-black/45 top-0 left-0 flex justify-center items-center">
                <button
                  className="bg-white p-2 w-[50%] rounded-xl font-bold uppercase shadow border-2 border-black"
                  onClick={iniciar}
                >
                  Iniciar el juego
                </button>
              </div>
            )}

            <span className="festejo-animation"> </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
