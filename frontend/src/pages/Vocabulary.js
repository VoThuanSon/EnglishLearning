import { useEffect, useState } from 'react';
import { getVocabs, addVocab, deleteVocab, updateVocab } from '../services/api.js';

export default function Vocabulary() {
  const [vocabs, setVocabs] = useState([]);
  const [newVocab, setNewVocab] = useState({ word: '', meaning: '', example: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    getVocabs().then(setVocabs);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (editingId) {
      const updated = await updateVocab(editingId, newVocab, token);
      setVocabs(vocabs.map(v => (v._id === editingId ? updated : v)));
      setEditingId(null);
    } else {
      const saved = await addVocab(newVocab, token);
      setVocabs([saved, ...vocabs]);
    }
    setNewVocab({ word: '', meaning: '', example: '' });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await deleteVocab(id, token);
    setVocabs(vocabs.filter(v => v._id !== id));
  };

  const handleEdit = (v) => {
    setNewVocab({ word: v.word, meaning: v.meaning, example: v.example });
    setEditingId(v._id);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Vocabulary List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-3 mb-3">
          <div className="col-md-4">
            <input type="text" className="form-control" value={newVocab.word} onChange={e => setNewVocab({ ...newVocab, word: e.target.value })} placeholder="Word" required />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" value={newVocab.meaning} onChange={e => setNewVocab({ ...newVocab, meaning: e.target.value })} placeholder="Meaning" required />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" value={newVocab.example} onChange={e => setNewVocab({ ...newVocab, example: e.target.value })} placeholder="Example" />
          </div>
        </div>
        <button type="submit" className="btn btn-success">{editingId ? 'Update' : 'Add'}</button>
      </form>

      {vocabs.map(v => (
        <div className="card mb-3" key={v._id}>
          <div className="card-body">
            <h5>{v.word}</h5>
            <p><strong>Meaning:</strong> {v.meaning}</p>
            <p><strong>Example:</strong> {v.example}</p>
            <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(v)}>Edit</button>
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(v._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}