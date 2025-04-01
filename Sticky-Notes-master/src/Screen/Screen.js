import React, { useState } from "react";
import Note from "../Note/Note";
import "./Screen.css";
import plus from "../Icons/plus.png";

function Screen() {
    const [notes, setNotes] = useState([{ id: Date.now(), active: false, x: 100, y: 100 }]);
    const [archivedNotes, setArchivedNotes] = useState([]);

 

    const setActiveNote = (id) => {
        const updatedNotes = notes.map(note => {
            if (note.id === id) {
                return { ...note, active: true };
            } else {
                return { ...note, active: false };
            }
        });
        setNotes(updatedNotes);
    };

    const removeNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const addArchivedNote = (note) => {
        setArchivedNotes([...archivedNotes, note]);
    };

    const AddNote = () => {
        const newNote = { id: Date.now(), active: false, x: 100 + notes.length * 20, y: 100 + notes.length * 20 };
        setNotes([...notes, newNote]);
        addArchivedNote(newNote);
    };

    return (
        <div className="container">
            <div className="plusButton" onClick={AddNote}>
                <abbr title="New Note"><img src={plus} alt="plus" /></abbr>
            </div>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    onAddNote={AddNote}
                    active={note.active}
                    setActive={() => setActiveNote(note.id)}
                    onRemoveNote={() => removeNote(note.id)}
                    onAddArchivedNote={() => addArchivedNote(note)}
                />
            ))}
        </div>
    );
}

export default Screen;
