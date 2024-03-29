import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const Instrucciones = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="cursor-pointer fixed -right-10 bg-green-500 top-36 text-white font-bold -rotate-90 p-2 rounded-t-lg"
        onClick={openModal}
      >
        Instrucciones
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Instrucciones de juego
                  </Dialog.Title>
                  <div className="mt-5">
                    <p className="text-sm text-gray-500">
                      - Para hacer un disparo solo debes dar clic en la casilla
                      que deseas
                      <br />
                      <br />- Si al disparar sobre una casilla se muestra "O"
                      significa que le diste a un barco
                      <br />
                      <br />- Si al disparar sobre una casilla se muestra "X"
                      significa que fallaste
                      <br />
                      <br />- Si deseas reiniciar el juego solo haz clic en
                      "Reiniciar"
                    </p>
                  </div>

                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Entendido
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Instrucciones;
