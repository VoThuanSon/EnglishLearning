import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetCourse, GetCourseComments, AddCourseComment } from '../services/api';

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const user = localStorage.getItem('username') || 'Guest';

  useEffect(() => {
    GetCourse(id).then(setCourse);
    GetCourseComments(id).then(setComments);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const c = await AddCourseComment(id, user, newComment);
    setComments([c, ...comments]);
    setNewComment('');
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <hr />

      <h4>Comments</h4>
      <form onSubmit={handleSubmit} className="mb-3">
        <textarea
          className="form-control mb-2"
          rows="3"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>

      {comments.map((c, i) => (
        <div key={i} className="border rounded p-2 mb-2">
          <strong>{c.user}</strong>
          <p>{c.content}</p>
          <small>{new Date(c.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
