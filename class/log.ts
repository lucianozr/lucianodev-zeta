import { idGenerator } from '@/util/randomId';

export class Log {
  id: string;
  value: string;
  entryDate: Date;

  constructor(value: string, date: Date) {
    this.value = value;
    this.entryDate = date;
    this.id = idGenerator();
  }

  getLog = () => {
    return `
      ${this.entryDate.toLocaleDateString('pt-br')} 
      - 
      ${this.entryDate.toLocaleTimeString('pt-br')} 
      | 
      Resultado: ${this.value} `;
  };
}
