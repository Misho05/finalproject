import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    navigate('/'); 
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>შესვლა</h2>
        <div className="form-group">
          <label htmlFor="email">ელ. ფოსტა</label>
          <input 
            type="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">პაროლი</label>
          <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">შესვლა</button>
        <p className="auth-switch">
          არ გაქვს ანგარიში? <Link to="/register">რეგისტრაცია</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;