import React, { useState } from "react";
import Notes from "./Notes";

function Note(props) {
  useState(props.title);
  const [isHover, setHover] = useState(false);

  const noteClickHandler = (event) => {
    props.toggleModal();
    props.setSelectedNote(props.note);
  };

  const mouseOverHandler = () => {
    setHover(true);
  };
  const mouseOutHandler = () => {
    setHover(false);
  };

  const deleteHandler = () => {
    props.deleteNote(props.id);
  };

  return (
    <div
      className="notes"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <div className="note" id={props.note.id} onClick={noteClickHandler}>
        <span
          className="material-symbols-outlined hover small-icon check-circle"
          style={{ visibility: isHover ? "visible" : "hidden" }}
        >
          check_circle
        </span>

        <div className="title">{props.note.title}</div>
        <div className="text">{props.note.text}</div>

        <div
          className="note-footer"
          style={{ visibility: isHover ? "visible" : "hidden" }}
        >
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              add_alert
            </span>
            <span className="tooltip-text">Remind me</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              person_add
            </span>
            <span className="tooltip-text">Collaborator</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              palette
            </span>
            <span className="tooltip-text">Change Color</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              image
            </span>
            <span className="tooltip-text">Add Image</span>
          </div>
          <div className="tooltip" onClick={deleteHandler}>
            <span className="material-symbols-outlined hover small-icon">
              archive
            </span>
            <span className="tooltip-text">Archive</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              more_vert
            </span>
            <span className="tooltip-text">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Note;
