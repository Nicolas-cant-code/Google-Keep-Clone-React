import React, { useState } from "react";
import "./Form.css";
import { uid } from "uid";
import Modal from "../Modal/Modal";

function Form(props) {
  const { edit, selectedNote, toggleModal, editNote } = props;
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [isActiveForm, setActiveForm] = useState(edit);

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value);
    setActiveForm(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    // Add data to array

    if (!edit) {
      const note = {
        id: uid(),
        title,
        text,
      };
      props.addNote(note);
      setText("");
      setTitle("");
      setActiveForm(false);
    } else {
      editNote({
        id: selectedNote.id,
        title,
        text,
      });

      toggleModal();
    }
  };

  const formClickHandler = () => {
    //state
    setActiveForm(true);
  };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form
          onSubmit={submitFormHandler}
          className={isActiveForm ? "form" : ""}
        >
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              type="text"
              className="note-title"
              placeholder="Title"
              value={title}
            />
          )}

          <input
            onChange={textChangeHandler}
            className="note-text"
            type="text"
            placeholder="Take a note..."
            value={text}
          />
          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
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
                <div className="tooltip">
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
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>

              <button className="close-btn">Close</button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New note with drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New note with image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;
