import { useEffect, useState } from 'react';
import { GetReadings, ReadingById } from '../services/api';

export default function Reading() {
  const [readings, setReadings] = useState([]);
  const [selectedReading, setSelectedReading] = useState(null);
  const [selected, setSelected] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      const list = await GetReadings();
      setReadings(list);
    };
    fetchList();
  }, []);

  const loadReading = async (id) => {
    const data = await ReadingById(id);
    setSelectedReading(data);
    setSelected('');
    setShowAnswer(false);
  };



  const handleAnswer = () => {
    setShowAnswer(true);
  };

  const renderParagraph = () => {
    if (!selectedReading) return null;
    return selectedReading.paragraph.split(' ').map((word, index) => {
      return (
        <span
          key={index}
          style={{ cursor: 'pointer', marginRight: '6px', color: '#007bff' }}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <div className="container">
      {!selectedReading ? (
        <>
          <h2 className="mb-4">Select a Reading</h2>
          <ul className="list-group">
            {readings.map((r) => (
              <li key={r._id} className="list-group-item d-flex justify-content-between align-items-center">
                {r.title}
                <button className="btn btn-sm btn-outline-primary" onClick={() => loadReading(r._id)}>Read</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className="mb-4">{selectedReading.title}</h2>
          <p>{renderParagraph()}</p>

          <div className="mt-4">
            {selectedReading.questions.map((q, idx) => (
              <div key={idx} className="mb-4">
                <h5>{q.question}</h5>
                {q.options.map((opt, i) => (
                  <div key={i} className="form-check">
                    <input
                      type="radio"
                      name={`q${idx}`}
                      id={`q${idx}_opt${i}`}
                      value={opt}
                      className="form-check-input"
                      onChange={() => setSelected(opt)}
                      checked={selected === opt}
                    />
                    <label htmlFor={`q${idx}_opt${i}`} className="form-check-label">{opt}</label>
                  </div>
                ))}
                <button className="btn btn-primary mt-2" onClick={handleAnswer}>Submit</button>
                {showAnswer && (
                  <div className="mt-2">
                    {selected === q.answer ? (
                      <div className="alert alert-success">Correct!</div>
                    ) : (
                      <div className="alert alert-danger">Incorrect. Correct answer is: {q.answer}</div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="btn btn-secondary mt-4" onClick={() => setSelectedReading(null)}>Back to List</button>
        </>
      )}
    </div>
  );
}
