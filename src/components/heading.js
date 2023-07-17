import Badge from 'react-bootstrap/Badge';
import React from 'react';
import { alignPropType } from 'react-bootstrap/esm/types';

function heading() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>
        React Bootstrap Cards <Badge bg="secondary">New</Badge>
      </h1>
    </div>
  );
}

export default heading;