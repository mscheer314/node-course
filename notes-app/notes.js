const fs = require('fs');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
  } else {
    console.log('Note title taken');
  }
  saveNotes(notes);
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  saveNotes(notesToKeep);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log('Your notes:');
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    console.log('in catch block');
    return [];
  }
};

module.exports = {
  listNotes,
  getNotes,
  addNote,
  removeNote,
};