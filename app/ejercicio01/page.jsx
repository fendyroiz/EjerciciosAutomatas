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
    <div style={{ textAlign: 'center' }}>
      <h1 className='bg-violet-200  rounded-2xl hover:bg-purple-300  hover:text-white text-violet-800 ' >DFA QUE ACEPTA DECLARACIONES DE VARIABLES EN PROGRAMACION</h1>
      <input
        type="text"
        placeholder="Entrada"
        value={palabra}
        onChange={(e) => setPalabra(e.target.value)}
        style={{ margin: '10px' }}
      />
      <br />
      <div>{resultado}</div>
      <button className='bg-violet-200 p-1 w-[11%] rounded-2xl hover:bg-purple-300  hover:text-white text-violet-800' onClick={Analizar}>Analizar Entrada</button>
      <button className='bg-violet-200 p-1 w-[11%] rounded-2xl hover:bg-purple-300  hover:text-white text-violet-800' onClick={Limpiar}>Limpiar</button>
    </div>
  );
};

export default Ejercicio01;
//