import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <header className="d-flex justify-content-end p-3 border-bottom mb-4">
            {!token ? (
                <>
                    <Link to="/login" className="btn btn-primary me-2">Đăng nhập</Link>
                    <Link to="/register" className="btn btn-outline-secondary me-2">Đăng ký</Link>
                </>
            ) : (
                <>
                    <button className="btn btn-warning me-2" onClick={handleLogout}>Logout</button>
                    <Link to="/my-courses" className="btn btn-outline-success me-2">My Courses</Link>
                    <Link to="/" className="btn btn-outline-secondary">Home</Link>
                </>
            )}

        </header>
    );
}