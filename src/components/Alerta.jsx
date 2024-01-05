import React from "react";

export const alert = (msg, type) => {
  const openAlert = (color) => {
    document
      .getElementById("msg-contain")
      .classList.toggle("-translate-y-[200%]");
    document.getElementById("msg").innerText = msg;
    document.getElementById("msg").classList.toggle(color);

    setTimeout(() => {
      document
        .getElementById("msg-contain")
        .classList.toggle("-translate-y-[200%]");
    }, 3000);

    setTimeout(() => {
      document.getElementById("msg").innerText = "";
      document.getElementById("msg").classList.toggle(color);
    }, 3500);
  };

  switch (type) {
    case "error":
      openAlert("bg-red-500");
      break;
    case "succes":
      openAlert("bg-green-500");
      break;
    case "warning":
      openAlert("bg-yellow-500");
    default:
      openAlert("bg-blue-500");
      break;
  }
};

const Alerta = () => {
  return (
    <div
      id="msg-contain"
      className="fixed z-20 top-10 flex justify-center w-screen -translate-y-[200%] duration-300"
    >
      <div
        id="msg"
        className="shadow-xl p-5 w-[300px] text-center font-bold text-white rounded-xl"
      >
        Error al ingresar los datos de usuario
      </div>
    </div>
  );
};

export default Alerta;
