import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header-Footer/Header';
import Footer from './components/Header-Footer/Footer';
import HomePage from './components/HomePage';
import CourseDetail from './components/CourseDetail';
import CoursesPage from './components/CoursesPage';
import Login from './components/loginScreens/Login';
import Registration from './components/loginScreens/Registration';
import CourseDescribe from './components/CourseGenerationSteps/CourseDescribe';
import GeneratedCourses from './components/CourseGenerationSteps/GeneratedCourses';
import ai1 from './assets/ai.png';
import ai2 from './assets/ai2.png';
import ai3 from './assets/ai3.png';
import ai4 from './assets/ai4.png';
import ai5 from './assets/ai5.png';
import ai6 from './assets/ai6.png';
import treeAnimation from './assets/treeAnimation.gif';



function App() {
  const [courses, setCourses] = useState([
    {
      id: 1, title: "Artificial Intelligence Basics", description: "Explore AI concepts like machine learning and neural networks.", image: ai1, video: 'https://www.youtube.com/embed/nVyD6THcvDQ', animation: treeAnimation
    },
    { id: 2, title: "Data Structures Basics", description: "Learn fundamental structures like arrays, stacks, and queues.", image: ai2, video: 'https://www.youtube.com/embed/nVyD6THcvDQ', animation: treeAnimation },
    { id: 3, title: "Algorithms Essentials", description: " Understand sorting, searching, and optimization techniques efficiently.", image: ai3, video: 'https://www.youtube.com/embed/nVyD6THcvDQ', animation: treeAnimation },
    { id: 4, title: "Object-Oriented Programming", description: " Master OOP principles like encapsulation, inheritance, and polymorphism.", image: ai4, video: 'https://www.youtube.com/embed/nVyD6THcvDQ', animation: treeAnimation },
    { id: 5, title: "Advanced DSA", description: " Explore trees, graphs, heaps, and complex problem-solving strategies.", image: ai5, video: 'https://www.youtube.com/embed/nVyD6THcvDQ', animation: treeAnimation },
    { id: 6, title: "Design Patterns", description: " Implement reusable software design solutions using OOP concepts effectively.", image: ai6, video: 'https://www.youtube.com/embed/nVyD6THcvDQ', animation: treeAnimation },
  ]);

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <Routes>

        <Route path="/" element={<GeneratedCourses courses={courses} />} />
        <Route path="/generated-courses" element={<GeneratedCourses courses={courses} />} />
        <Route path="/home" element={<HomePage courses={courses} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/courses-page" element={<CoursesPage courses={courses} />} />
        <Route path="/course/:id" element={<CourseDetail courses={courses} />} />
        <Route path="/add-course" element={<CourseDescribe courses={courses} setCourses={setCourses} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
