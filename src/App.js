import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

const NOTES = [];
function App() {
  const [notes, setNote] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const addNote = (note) => {
    setNote((prevNote) => {
      return [...prevNote, note];
    });
  };

  const deleteNote = (id) => {
    setNote((prevNote) => {
      return prevNote.filter((note) => id !== note.id);
    });
  };

  const editNote = (editedNote) => {
    setNote((prevNote) => {
      let newArray = prevNote.map((note) => {
        if ((note.id = editedNote.id)) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        return note;
      });
      return newArray;
    });
  };

  const toggleModal = () => {
    setIsOpenModal((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isOpenModal && (
        <Modal
          isOpenModal={isOpenModal}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
    </div>
  );
}

export default App;
