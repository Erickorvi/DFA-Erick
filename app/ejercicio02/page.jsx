'use client';
import React, { useState } from 'react'

const Ejercicio02 = () => {

  const [palabra,setPalabra] = useState('')
  const [resultado, setResultado] = useState('')

    const matriz = [
        [1,200],
        [2,200],
        [3,200],
        [3,200]
    ];

//Se crea la funcion que analiza el automata
const analizar = () => {
    //La palabra que pone el usuario en arreglo
    let c = palabra.split('')
    //Variable que controla el ciclo para iteracion
    let i = 0;
    //Variable estado que funcionara como estado inicial
    let estado = 0;
    //Creamos patrones para analizar la palabra caracter por caracter
    let caracter = 0;

    const isLetter = new RegExp('[abAB]')
    //Creamos el ciclo para iterar el array de la palabra que el usuario ingreso
    while (i<palabra.length){
      if (isLetter.test(c[i])){
        caracter=0;
      }

      else {
        caracter=1;
      }
      
      
      estado=matriz[estado][caracter];
      if (estado === 200) {
        setResultado('Palabra Invalida');
        return;
      }
      i++;
    }

    if (estado === 2){
      setResultado('Palabra Aceptada');
    } 
    else {
      setResultado('Palabra Invalida');
    }
};
  return (
    <div className='flex flex-col space-y-4 w-full p-10'>
    <div className=''>
      <p className='text-center'>
        Analizador DFA que es capaz de reconocer cadenas de dos digitos con las letras a o b
      </p>
        <input type='text' placeholder='Coloca la entrada' className='p-2 rounded-md w-full bg-slate-300'
        value={palabra}
        onChange={e => setPalabra(e.target.value)}
        />
    </div>
    <div> <button 
            onClick={analizar}
            className='p-2 bg-slate-200 rounded-md text-black w-full'
            >Analizar la entrada</button>
    </div>

    <div>{resultado}</div>
    </div>
  )
}

export default Ejercicio02