import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import AddCourseForm from './components/AddCourseForm';
import CoursesPage from './components/CoursesPage';

function App() {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", description: "Learn the basics of React." },
    { id: 2, title: "Advanced React", description: "Dive deeper into React hooks and context." },
  ]);

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<CourseList courses={courses} />} />
        <Route path="/courses-page" element={<CoursesPage courses={courses} />} />
        <Route path="/course/:id" element={<CourseDetail courses={courses} />} />
        <Route path="/add-course" element={<AddCourseForm courses={courses} setCourses={setCourses} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
