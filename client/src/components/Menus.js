import React, {useState} from "react";
import Free_Drinks from "../images/Free_Drinks.png"
import Menu from "../images/Menu.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import "bootstrap/dist/css/bootstrap.min.css"



function Menus(){
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <>
          <Button
        variant="warning" 
        onClick={handleShow}
        className = "happyhour"
        >
        Happy Hour
      </Button> 
 
      <Modal  size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>MHappy Hour Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img className = "menui" src= {Free_Drinks} alt = "happy hour info"/>
        </Modal.Body>
        <Modal.Footer> 
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer> 
      </Modal> 
        <div className="menus">
         <img className = "menui" src= {Free_Drinks} alt = "happy hour info"/>
         <br></br>
         <img className = "menui" src= {Menu} alt = "happy hour info"/>
         </div>
        </> 
    )
}

export default Menus

