'use client'
import React, { useState } from 'react';

export const Ejercicio01 = () => {
  const [palabra, setPalabra] = useState('');
  const [resultado, setResultado] = useState('');

  const matriz = [
    [1, 0],  
    [0, 2],  
    [3, 1],  
    [4, 1],  
    [4, 4],  
  ];

  const Analizar = () => {
    const c = palabra.split('');
    let i = 0;
    let estado = 0;
    let caracter = 0;

    while (i < c.length) {
      const isLetter = /[a-zA-Z]/;
      const isDigit = /[0-9]/;

      if (isLetter.test(c[i])) {
        caracter = 0;
      } else if (isDigit.test(c[i])) {
        caracter = 1;
      } else {
        caracter = 2;
      }

      estado = matriz[estado][caracter];

      if (estado === 200) {
        break;
      }
      i++;
    }

    if (estado === 1 && i === c.length) {
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
  DFA QUE ACEPTA DECLARACIONES DE VARIABLES EN PROGRAMACION
  No son aceptadas cadenas que inicien con digitos o simbolos
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

export default Ejercicio01;
//