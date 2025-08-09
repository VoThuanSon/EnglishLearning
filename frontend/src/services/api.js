const API_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

export async function getVocabs() {
  const res = await fetch(`${API_URL}/vocab`);
  return await res.json();
}

export async function addVocab(vocab, token) {
  const res = await fetch(`${API_URL}/vocab`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(vocab)
  });
  return await res.json();
}
export async function registerUser(userData) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return await res.json();
}

export async function loginUser(userData) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return await res.json();
}

export async function ReadingById(id) {
  const res = await fetch(`${API_URL}/reading/${id}`, {
    method: 'GET',
  });
  return await res.json();
}

export async function GetReadings() {
  const res = await fetch(`${API_URL}/reading`, {
    method: 'GET',
  });
  return await res.json();
}

export async function updateVocab(id, vocab, token) {
  const res = await fetch(`${API_URL}/vocab/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(vocab)
  });
  return await res.json();
}
export async function deleteVocab(id, token) {
  await fetch(`${API_URL}/vocab/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
}


export async function GetCourses() {
  const res = await fetch(`${API_URL}/courses`);
  return await res.json();
}

export async function GetCourse(id) {
  const res = await fetch(`${API_URL}/courses/${id}`);
  return await res.json();
}

export async function RegisterCourse(courseId, user) {
  const res = await fetch(`${API_URL}/registrations/${courseId}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user })
  });
  return await res.json();
}

export async function GetMyCourses(user) {
  const res = await fetch(`${API_URL}/registrations/${user}/my-courses`);
  return await res.json();
}
export async function GetCourseComments(courseId) {
  const res = await fetch(`${API_URL}/courses/${courseId}/comments`);
  return await res.json();
}

export async function AddCourseComment(courseId, user, content) {
  const res = await fetch(`${API_URL}/courses/${courseId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, content })
  });
  return await res.json();
}

export async function UnregisterCourse(registrationId) {
  const res = await fetch(`${API_URL}/registrations/${registrationId}/unregister`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to unregister');
  return res.json();
}
