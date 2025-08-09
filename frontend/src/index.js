import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vocabulary from './pages/Vocabulary.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Reading from './pages/Reading.js';
import Courses from './pages/Courses';
import MyCourses from './pages/MyCourses';
import CourseDetail from './pages/CourseDetail';
import ProtectedRoute from './services/ProtectedRoute.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<App />} />
        </Route>
        <Route path="/vocab" element={<Vocabulary />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
