import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

/* Redux */
import { useSelector, useDispatch } from 'react-redux';
import { decrementUsers, incrementUsers } from './redux/users/usersSlice';
import { decrementEve, incrementEve } from './redux/eve/eveSlice';

const App = () => {
  const user = useSelector((state) => state.users.value);
  const eve = useSelector((state) => state.eve.value);

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        <span>user result : {user}</span>
        <div>
          <button
            aria-label='Increment uUsers'
            onClick={() => dispatch(incrementUsers())}
          >
            Increment User
          </button>

          <button
            aria-label='Decrement uUsers'
            onClick={() => dispatch(decrementUsers())}
          >
            Decrement user
          </button>
        </div>
        <div>
          <span>Eve result : {eve}</span>
          <div>
            <button
              aria-label='Increment uEves'
              onClick={() => dispatch(incrementEve())}
            >
              Increment Eve
            </button>

            <button
              aria-label='Decrement uEves'
              onClick={() => dispatch(decrementEve())}
            >
              Decrement Eve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
