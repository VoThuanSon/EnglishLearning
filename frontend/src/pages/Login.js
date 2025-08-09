import { useState } from 'react';
import { loginUser } from '../services/api.js';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser({ email, password });
    if (result.token) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('username', result.user.username)
      window.location.href = '/';
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}