import { Log } from '@/class/log';
import { AiOutlineCloseCircle } from 'react-icons/ai';

type LogBoxProps = {
  logs: Array<Log>;
  deleteLogFn: (id: string) => void;
};

type LogBoxItemProps = {
  log: Log;
  className?: string;
  deleteLogFn: (id: string) => void;
};

const LogBoxItem = ({ log, className, deleteLogFn }: LogBoxItemProps) => (
  <div className="flex items-center gap-4">
    <p className={className}>{log.getLog()}</p>
    <AiOutlineCloseCircle onClick={() => deleteLogFn(log.id)} />
  </div>
);

const LogBox = ({ logs, deleteLogFn }: LogBoxProps) => {
  return (
    <>
      {!!logs.length && (
        <div className="border p-[25px] max-h-[380px] w-[558px] rounded overflow-auto">
          {logs?.map((log, index) => (
            <LogBoxItem
              key={log.id}
              deleteLogFn={deleteLogFn}
              className={index === 0 ? 'text-xl' : ''}
              log={log}
            />
          ))}
        </div>
      )}
    </>
  );
};

export { LogBox };
