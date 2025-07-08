import React, { useState } from 'react';
import { API_URL } from '../APIs/userAPI';
import { useNavigate } from 'react-router-dom';

const Login = ({ loginSuccess }) => {
const [email , setEmail] = useState('');

}






const Login = () => 
  return (
    <div>
This is the login page     

<form onSubmit={loginSuccess}>   
  
  <input type="text" id="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail (e.target.value)} required/>
<input type='password' placeholder='password'/>

<button>Log in </button>


</form>



    </div>
  )
}

export default Login
