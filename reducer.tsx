import { Log } from './class/log';

interface LogAction {
  type: 'increment' | 'decrement';
  payload: string;
}

export interface LogsState {
  logs?: Log[];
}

export type initLogsState = {
  logs: Array<Log>;
};

export const logsReducer = (
  state: initLogsState,
  action: LogAction
): initLogsState => {
  const { type, payload } = action;
  const { logs } = state;

  switch (type) {
    case 'increment':
      return {
        ...state,
        logs: [...logs, new Log(payload, new Date())],
      };
    case 'decrement':
      return {
        ...state,
        logs: logs.filter((log) => log.id !== payload),
      };
    default:
      return state;
  }
};
