import React from 'react';

const Notes = ({ notes, deleteNote }) => {

    const noteList = notes.length ? (
        notes.map(note => {
            return (
                <div key={note.id}>
                    <span onClick={() => { deleteNote(note.id) }}>{note.text}</span>


                </div>
            )
        })
    ) : (
            <p>No notes</p>
        )
    return (
        <div>
            {noteList}
            <br />
        </div>
    )
}

export default Notes;

