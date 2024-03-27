import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import initialNotes from "./notes";
import NoteInput from "./CreateArea";

function App() {
  const [all_notes, updateNotes] = useState(initialNotes);

  const handleNewNote = (noteData) => {
    const new_note = { ...noteData, key: Date.now() };
    updateNotes([...all_notes, new_note]);
  };

  const handleNoteDeletion = (noteId) => {
    const updatedNotes = all_notes.filter((note) => note.key !== noteId);
    updateNotes(updatedNotes);
  };

  return (
    <div>
      <Header />
      <NoteInput onAddNote={handleNewNote} />
      {all_notes.map((singleNote) => (
        <Note
          key={singleNote.key}
          id={singleNote.key}
          title={singleNote.title}
          content={singleNote.content}
          onDelete={handleNoteDeletion}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
