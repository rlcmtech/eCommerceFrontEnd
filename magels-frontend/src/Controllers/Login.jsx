import React, { useState } from 'react';
import { API_URL } from '../APIs/userAPI';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

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
        throw new Error(data.message || 'Login Failed');
      }

      localStorage.setItem('token', data.token);
      onloginSuccess();
      navigate('/account');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <p>Please log in to continue</p>

      {error && <div className="error">{error}</div>}

      <form className="login-form" onSubmit={handleSubmit}>   
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />

        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    </div>
  );
};

export default Login;
