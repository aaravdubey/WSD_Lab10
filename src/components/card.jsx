import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CenteredModal from './modal';

function RealEstateCard({ property }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <Card
      style={{ width: '18rem', margin: '20px' }}
    >
      <Card.Body>
        <Card.Title>{property.property_type}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {property.location}
        </Card.Subtitle>
        <Card.Text>
          Bedrooms: {property.bedrooms} | Bathrooms: {property.bathrooms}
          <br />
          Price: ${property.price}
        </Card.Text>
        {isExpanded && (
          <div>
            <p>Square Feet: {property.square_feet}</p>
            <p>Year Built: {property.year_built}</p>
            <p>Description: {property.description}</p>
            {/* Add more fields as needed */}
          </div>
        )}
        <Button
          variant="primary"
          size="sm"
          className='btn btn-info text-white '
          onClick={() => setIsModal(!isModal)}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      </Card.Body>
      
      <CenteredModal isModal={isModal} setIsModal={setIsModal} property={property} />
    </Card>
  );
}

export default RealEstateCard;
