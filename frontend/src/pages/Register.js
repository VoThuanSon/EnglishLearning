import { useState } from 'react';
import { registerUser } from '../services/api.js';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registerUser(formData);
    if (result.message) {
      setMessage('Register successful! You can login now.');
      navigate('/login');
    } else {
      setMessage(result.error || 'Register failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username</label>
          <input name="username" className="form-control" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input name="email" type="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input name="password" type="password" className="form-control" value={formData.password} onChange={handleChange} required />
        </div>
        <button className="btn btn-success" type="submit">Register</button>
      </form>
    </div>
  );
}
