'use client'
import React, { useState } from 'react';

export const Ejercicio03 = () => {
  const [palabra, setPalabra] = useState('');
  const [resultado, setResultado] = useState('');

  const matriz = [
    [1, 0],
    [2, 0],
    [2, 2],
  ];

  const Analizar = () => {
    const c = palabra.split('');
    let estado = 0;

    for (let i = 0; i < c.length; i++) {
      const caracter = c[i];

      if (caracter === 'a') {
        estado = matriz[estado][0];
      } else if (caracter === 'b') {
        estado = matriz[estado][1];
      } else {
        estado = 200;  
        break;
      }

      if (estado === 200) {
        break;
      }
    }

    if (estado === 0) {
      setResultado('Es válido');
    } else {
      setResultado('Es inválido');
    }
  };

  const Limpiar = () => {
    setPalabra('');
    setResultado('');
  };

  return (
    <div className="bg-[#e0e7ff] p-4 md:p-10 rounded-2xl shadow-[#4f46e5] shadow-2xl m-4 md:m-11">
  <h1 className="text-2xl md:text-4xl text-[#312e81] font-serif text-center">
  DFA QUE SOLO ACEPTA CADENAS QUE TERMINEN CON CON B
  Su abecedario es ab
  </h1>
  <input
    type="text"
    placeholder="Entrada"
    value={palabra}
    onChange={(e) => setPalabra(e.target.value)}
    className="border p-1 rounded-md w-full mt-4 md:mt-10"
  />
  <div className="mt-4 md:mt-8">{resultado}</div>

  <div className="mt-4 md:mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
    <button className="bg-[#312e81] text-white px-2 py-1 rounded-md mt-2 md:mt-0 md:ml-2 font-serif w-full md:w-[11%]">
      Analizar Entrada
    </button>
    <button className="bg-[#312e81] text-white px-2 py-1 rounded-md mt-2 md:mt-0 md:ml-2 font-serif w-full md:w-[11%]">
      Limpiar
    </button>
  </div>
</div>

  );
};

export default Ejercicio03;
///