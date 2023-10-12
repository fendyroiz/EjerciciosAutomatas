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
    <div style={{ textAlign: 'center' }}>
       <h1 className='bg-violet-200  rounded-2xl hover:bg-purple-300  hover:text-white text-violet-800 '>DFA QUE SOLO ACEPTA CADENAS QUE TERMINEN CON CON B</h1>
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

export default Ejercicio03;
///