import React, { useRef } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

type Props = {
  registerLogFn: (value: number) => void;
};

const FormNew = ({ registerLogFn }: Props) => {
  const inputNumberRef = useRef<HTMLInputElement>(null);

  const handleCalculate = () => {
    const fibonacciList = [];
    const int = Number(inputNumberRef?.current?.value);

    let num = 0;
    let proxNum = 1;
    let aux;

    while (num <= int) {
      fibonacciList.push(num);
      aux = proxNum;
      proxNum = proxNum + num;
      num = aux;
    }

    const fibonacciListReversed = fibonacciList.reverse();
    let count = 0;
    let result = 0;
    for (let i = 0; i < fibonacciListReversed.length; i++) {
      if (fibonacciListReversed[i] + count <= int) {
        count += fibonacciList[i];
        result += 1;
        if (fibonacciListReversed[i] === 0) {
          result -= 1;
        }
      }
    }

    registerLogFn(result);
  };

  return (
    <div className="flex gap-2 flex-col items-center ">
      <div className="flex items-center  w-[550px]">
        <div className="has-tooltip">
          <span className="w-52 tooltip rounded shadow-lg p-2 bg-buttonBgColor text-white -ml-[220px]">
            O número Zeta é baseado na sequência de fibonacci. Digite um valor
            inteiro e o programa resultará em quantos números da sequência de
            fibonacci foram necessarios para obter o valor passado.
          </span>
          <AiOutlineInfoCircle />
        </div>
        <span className="text-3xl m-auto">Numero Inteiro</span>
      </div>

      <div className="flex items-center text-3xl gap-2">
        <input
          className="p-3 text-gray-900"
          type="number"
          ref={inputNumberRef}
        />
        <button
          className="h-[60px] self-end bg-buttonBgColor border border-buttonBdColor rounded text-xl py-3 px-5 cursor-pointer"
          onClick={() => handleCalculate()}
        >
          Calcular
        </button>
      </div>
    </div>
  );
};

export { FormNew };
