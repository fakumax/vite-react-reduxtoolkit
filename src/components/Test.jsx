import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

/* TO DISPATCH */
import { getEvery } from '../redux/eve/eveSlice';

const Test = ({ value }) => {
  const every = useSelector((state) => state.eve);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvery(value));
  }, []);

  return (
    <div>
      <button>
        <Link to={`/`}>Ir a menu:</Link>
      </button>
      <p>{value.id}</p>
      <p>State EVERY : {every.value}</p>
    </div>
  );
};

export default Test;
