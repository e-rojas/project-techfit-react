import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Accordion, Card, ButtonToolbar, Modal } from "react-bootstrap";
import RecipeCardInfo from '../components/Profile/SavedItemsSection/RecipeCardInfo'
import WorkoutCardInfo from '../components/Profile/SavedItemsSection/WorkoutCardInfo'



//----- css style variable.

// const colStyle = { marginTop: "100px" };
const rowStyle = { minHeight: "300px" };
const footerButton = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-evenly",
  padding: "40px"
};

const imageStyle = { height: "100px", width: "100px", marginBottom: "40px"}


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RecipeCardInfo />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}
