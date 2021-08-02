import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1 style={{color:'#893330'}}>404 - Not Found!</h1>
    <Link to="/" style={{color:'#893330'}}>
      Go Home
    </Link>
  </div>
);

export default NotFound;