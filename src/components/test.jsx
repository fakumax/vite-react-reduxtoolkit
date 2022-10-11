import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
  return (
    <div>
      <button>
        <Link to={`/`}>Ir a menu</Link>
      </button>
    </div>
  );
};

export default Test;
