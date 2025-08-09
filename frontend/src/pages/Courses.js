import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetCourses, RegisterCourse } from '../services/api';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const user = localStorage.getItem('username') || 'guest';
  const [regis, setRegis] = useState(null);
  useEffect(() => {
    GetCourses().then(setCourses);
  }, []);

  const handleRegister = async (id) => {
    const res = await RegisterCourse(id, user);
    setRegis(res.mes || "Registed");
  };

  return (
    <div className="container mt-4">
      <h2>Available Courses</h2>
      {regis && <div className="alert alert-success">{regis}</div>}
      <div className="row">
        {courses.map(course => (
          <div className="col-md-4" key={course._id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary" onClick={() => handleRegister(course._id)}>Register</button>
                  <Link to={`/courses/${course._id}`} className="btn btn-outline-secondary">Detail</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}