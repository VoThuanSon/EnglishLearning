import { useCallback, useEffect, useState } from 'react';
import { GetMyCourses, UnregisterCourse } from '../services/api';

export default function MyCourses() {
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = localStorage.getItem('username') || 'guest';

  const loadCourses = useCallback(async () => {
    setLoading(true);
    try {
      const data = await GetMyCourses(user);
      setMyCourses(data);
    } catch (err) {
      console.error('Failed to fetch courses', err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  const handleUnregister = async (regId) => {
    if (window.confirm('Bạn có chắc muốn hủy đăng ký khóa học này?')) {
      try {
        await UnregisterCourse(regId);
        await loadCourses();
      } catch (err) {
        alert('Không thể hủy đăng ký.');
        console.error(err);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>My Registered Courses</h2>
      {loading && <p>Đang tải...</p>}
      <div className="row">
        {myCourses.map((reg) => (
          <div className="col-md-4" key={reg._id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{reg.courseId.title}</h5>
                <p className="card-text">{reg.courseId.description}</p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleUnregister(reg._id)}
                >
                  Hủy đăng ký
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
