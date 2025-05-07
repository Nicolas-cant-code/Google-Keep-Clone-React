import "./Modal.css";
import Form from "../Form/Form";

const Modal = (props) => {
  const { isOpenModal, selectedNote, toggleModal, editNote } = props;
  let isOver = false;

  const handleOver = () => (isOver = true);
  const handleOut = () => (isOver = false);
  const handleModalClick = (event) => {
    if (!isOver) {
      toggleModal();
    }
  };

  return (
    <div
      className={`modal ${isOpenModal ? "open-modal" : ""}`}
      onClick={handleModalClick}
    >
      <div
        className="modal-content"
        onMouseOver={handleOver}
        onMouseOut={handleOut}
      >
        <Form
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
          edit
        />
      </div>
    </div>
  );
};

export default Modal;
