import { Note } from "src/app/shared/models/note";

export const filterByString = (notes: Note[], text: string): Note[] => {
  if (text === '') {
    return notes;
  }
  return notes.filter((note) =>
    (note.title || '').toLowerCase().includes(text.toLowerCase())
    || (note.content || '').toLowerCase().includes(text.toLowerCase())
  );
};

export const getSubstringByWord = (
  text: string, searchWord: string
): string => {
  const startIndex = text.indexOf(searchWord);
  return text.substring(startIndex);
}

export const findAndReplace = (targetNote: Note, notes: Note[]) => {
  var index = notes.findIndex(function(note) {
    return note.id === targetNote.id;
  });
  
  if (index !== -1) {
    notes.splice(index, 1, targetNote);
  }
}

export const addHighlightClass = (text: string, searchTerm: string) => {
  if (searchTerm === '') {
    return text;
  }

  const regex = new RegExp(searchTerm, 'gi');
  const response = text.replace(
    regex, '<span class="highlight">$&</span>'
  );

  return response;
}

export const substringAndHighlightClass = (
  text: string,
  searchTerm: string
) => {
  if (searchTerm === '') {
    return text;
  }

  const subText = getSubstringByWord(text, searchTerm);
  const regex = new RegExp(searchTerm, 'gi');
  const response = subText.replace(
    regex, '<span class="highlight">$&</span>'
  );

  return response;
}

