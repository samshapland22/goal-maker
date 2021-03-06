import React from "react";
import Note from "./Note";

class Notes extends React.Component {
  constructor() {
    super();

    this.state = {
      noteInput: "",
      notes: [],
    };
  }

  handleNoteInput = (event) => {
    this.setState({
      noteInput: event.target.value,
    });
    console.log(this.state.noteInput);
  };

  handleAddNote = (event) => {
    event.preventDefault();
    this.setState({
      notes: [...this.state.notes, this.state.noteInput],
      noteInput: "",
    });
  };

  handleDeleteNote = (noteToDelete) => {
    let filteredNotes = this.state.notes.filter((note) => {
      return note !== noteToDelete;
    });

    this.setState({
      notes: filteredNotes,
    });
  };

  render() {
    let notesToDisplay = this.state.notes.map((note, i) => {
      return (
        <Note
          key={note + i}
          myNote={note}
          handleDeleteNote={this.handleDeleteNote}
        />
      );
    });

    return (
      <div className="notes">
        <h2>Notes</h2>
        <form onSubmit={this.handleAddNote}>
          <textarea
            value={this.state.noteInput}
            onChange={this.handleNoteInput}
          />
          <button>Add note</button>
        </form>
        <div className="note-container">{notesToDisplay}</div>
      </div>
    );
  }
}

export default Notes;
