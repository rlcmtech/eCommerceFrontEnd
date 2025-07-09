import React, { useState } from 'react';
import { API_URL } from '../APIs/userAPI';
import { useNavigate } from 'react-router-dom';




const Login = ({ onloginSuccess }) => {
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

const navigate = useNavigate();


const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

try {
const response = await fetch(`${API_URL}/login`, { 
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({ email, password }),
});

const data = await response.json();

if (!response.ok) {
throw new Error(data.message || 'Login Failed')
}

// Save token block

localStorage.setItem('token', data.token);

console.log('New Token:', data.token);
console.log('Stored Token:', localStorage.getItem('token'));


onloginSuccess();
navigate('/account');
} catch (error) {
  setError(error.message);
} finally {
  setLoading(false);
}



}

// if the login is successful block





 return (
    <div>
This is the login page     

<form onSubmit={handleSubmit}>   
  
  <input type="text" placeholder="email" value={email} onChange={(e) => setEmail (e.target.value)} required/>
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword (e.target.value)} />

<button type="submit">Log in </button>


</form>



    </div>
  )
}

export default Login
