// UserEntry.jsx
import React from 'react';
import Login from '../Controllers/Login';
import Signup from '../Controllers/Signup';

const UserEntry = ({ onloginSuccess }) => {
  return (
    <div>
      <div id='login'> 
        <Login onloginSuccess={onloginSuccess} />
      </div>

      <div id='signup'> 
        <Signup />
      </div>
    </div>
  );
};

export default UserEntry;
