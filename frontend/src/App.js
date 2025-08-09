import './App.css';
import { Link} from 'react-router-dom';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Welcome to English Helper</h1>
      <p className="lead text-center">Practice vocabulary, reading comprehension, and more to improve your English skills.</p>

      <div className="row mt-5 justify-content-center g-3">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"> Your Vocabulary</h5>
              <p className="card-text">Add and review vocabulary with examples to improve your memory.</p>
              <Link to="/vocab" className="btn btn-primary">Go to Vocabulary</Link>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reading Practice</h5>
              <p className="card-text">Read stories and answer questions to test your understanding.</p>
              <Link to="/reading" className="btn btn-primary">Go to Reading</Link>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Course</h5>
              <p className="card-text">Read stories and answer questions to test your understanding.</p>
              <Link to="/courses" className="btn btn-primary">Course</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
