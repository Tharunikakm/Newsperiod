import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import '../Notes.css'; 

const Notes = () => {
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setSavedNotes(JSON.parse(storedNotes));
    }
  }, []);

  const handleSave = () => {
    if (note.trim() !== '') {
      const updatedNotes = [...savedNotes, note];
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setSavedNotes(updatedNotes);
      setNote('');
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedNotes = savedNotes.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setSavedNotes(updatedNotes);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="floating-button" onClick={toggleModal}>
        📝
      </button>
      {isOpen && (
        <div className="notes-modal-container">
          <Draggable handle=".notes-modal-content">
            <ResizableBox
              width={400}
              height={300}
              minConstraints={[300, 200]}
              maxConstraints={[800, 600]}
              className="notes-modal"
            >
              <div className="notes-modal-content">
                <h2 className="notes-title">NOTES</h2>
                <button className="close-button" onClick={toggleModal}>
                  &times;
                </button>
                <textarea
                  className="notes-textarea"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Write your notes here..."
                />
                <button className="save-button" onClick={handleSave}>Save</button>
                <div className="saved-notes">
                  <h3>Saved Notes</h3>
                  {savedNotes.length > 0 ? (
                    savedNotes.map((savedNote, index) => (
                      <div key={index} className="saved-note">
                        {savedNote}
                        <button 
                          className="delete-button" 
                          onClick={() => handleDelete(index)}
                        >
                          X
                        </button>
                      </div>
                    ))
                  ) : (
                    <p>No notes saved.</p>
                  )}
                </div>
              </div>
            </ResizableBox>
          </Draggable>
        </div>
      )}
    </>
  );
};

export default Notes;
