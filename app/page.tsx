'use client';
import { useReducer } from 'react';
import { Log } from '@/class/log';
import { FormNew, LogBox } from '@/components';
import { logsReducer } from '@/reducer';

export default function Home() {
  const [state, dispatch] = useReducer(logsReducer, { logs: Array<Log>() });

  const compare = (a: Log, b: Log) => {
    return a.entryDate < b.entryDate ? 1 : -1;
  };

  return (
    <main className="flex justify-center flex-col items-center bg-bgColor w-screen h-screen gap-3">
      <FormNew
        registerLogFn={(intValue: number) => {
          const strValue = intValue.toString();
          dispatch({
            type: 'increment',
            payload: strValue,
          });
        }}
      />
      <LogBox
        logs={state.logs.sort(compare)}
        deleteLogFn={(id) => {
          dispatch({
            type: 'decrement',
            payload: id,
          });
        }}
      />
    </main>
  );
}
