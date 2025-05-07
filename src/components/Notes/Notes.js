import "./Notes.css";
import Note from "./Note";

function Notes(props) {
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;

  if (notes.length === 0) {
    return (
      <div className="notes">
        <p>Notes you add appear here</p>
      </div>
    );
  }
  return (
    <div className="notes">
      {notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          deleteNote={deleteNote}
          toggleModal={toggleModal}
          setSelectedNote={setSelectedNote}
        />
      ))}
    </div>
  );
}

export default Notes;
