import React from "react";

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <div>{this.props.myNote}</div>
        <button onClick={() => this.props.handleDeleteNote(this.props.myNote)}>
          X
        </button>
      </div>
    );
  }
}

export default Note;
