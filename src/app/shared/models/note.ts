import { v4 as uuidv4 } from 'uuid';

export class Note {
  id: string;
  title: string;
  content: string;

  constructor() {
    this.id = uuidv4();
    this.title = '';
    this.content = '';
  }
}
