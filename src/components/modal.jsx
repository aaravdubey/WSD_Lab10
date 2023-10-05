import { useState } from 'react';
import { Modal, Card, Button } from 'react-bootstrap';

function CenteredModal({ isModal, setIsModal, property }) {
  // const [showModal, setShowModal] = useState(false);

  const handleClose = () => setIsModal(false);
  // const handleShow = () => setShowModal(true);

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button> */}

      <Modal show={isModal} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>{property.property_type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Title className='mb-3'>{property.location}</Card.Title>
          <Card.Text>
            Bedrooms: {property.bedrooms} | Bathrooms: {property.bathrooms}
            <br />
            Price: ${property.price}
          </Card.Text>

          <p>Square Feet: {property.square_feet}</p>
          <p>Year Built: {property.year_built}</p>
          <p>Description: {property.description}</p>
          {/* Add more fields as needed */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CenteredModal;
