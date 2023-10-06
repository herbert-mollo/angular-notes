import { Note } from "./shared/models/note";

export const notes: Note[] = (() => {
  const quantity = 1;
  const newArray: Note[] = [];
  for(let i=0; i<=quantity; i++) {
    newArray[i] = {
      id: i + '',
      title: `Note ${i}`,
      content: `Content note ${i}`,
    }
  };

  return newArray;
})();
