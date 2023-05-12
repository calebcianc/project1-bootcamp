import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function InfoPopUp() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button className="btn btn-warning" onClick={handleShowModal}>
        ℹ️ More info
      </Button>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>How to use the application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            A coding-themed Pomodoro technique app that allows user to keep
            track of time and tasks.
            <br />
          </p>
          <p>
            {" "}
            <ul>
              {" "}
              <li>
                * In 1 cycle, there are four focus time period(25min) separated
                by a short break(5min). At the end of the fourth focus time,
                there is a long break(15min) before the cycle repeats. <br />
                <br />
              </li>
              <li>
                * Click on the column header to sort by the various columns.
                <br />
                <br />
              </li>
              <li>
                * Once you have completed the task, check on status checkbox.
                You can choose to hide or show the completed tasks by clicking
                on "show☑️/hide☑️" button.
                <br />
                <br />
              </li>
              <li>* To clear all task, click on "Clear All Tasks" button</li>
            </ul>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default InfoPopUp;
