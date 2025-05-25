import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header-Footer/Header';
import Footer from './components/Header-Footer/Footer';
import HomePage from './components/HomePage';
import CourseDetail from './components/CourseDetail';
import CoursesPage from './components/CoursesPage';
import CourseDescribe from './components/CourseGenerationSteps/CourseDescribe';
import GeneratedCourses from './components/CourseGenerationSteps/GeneratedCourses';
import ai1 from './assets/ai.png';
import ai2 from './assets/ai2.png';
import ai3 from './assets/ai3.png';
import ai4 from './assets/ai4.png';
import ai5 from './assets/ai5.png';
import ai6 from './assets/ai6.png';
import avatar from './assets/avatar.png';
import avatar2 from './assets/avatar2.png';
import avatar3 from './assets/avatar3.png';
import treeAnimation from './assets/treeAnimation.gif';
import StudentDashboard from './components/StudentPortal/StudentDashboard';
import PrivateChat from './components/ChatRoom/PrivateChat';
import Instructors from './components/Instructor/Instructors';
import InstructorSingleProfile from './components/Instructor/InstructorSingleProfile';
import EnrollCourseSingle from './components/CourseGenerationSteps/EnrollCourseSingle';
import AssignmentDetail from './components/Assignment/AssignmentDetail';
import QuizDetail from './components/Quiz/QuizDeail';
import QuizSession from './components/Quiz/QuizSession';
import Login from './components/Instructor/loginScreens/Login';
import Registration from './components/Instructor/loginScreens/Registration';
import StartingPage from './components/StartingPage/StartingPage';
import RoleSelection from './components/StartingPage/RoleSelection';



function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Artificial Intelligence Basics",
      description: "Explore AI concepts like machine learning and neural networks.",
      image: ai1,
      video: 'https://www.youtube.com/embed/nVyD6THcvDQ',
      animation: treeAnimation,
      instructorId: 1,
      learningPoints: [
        "AI fundamentals",
        "Machine learning",
        "Neural networks",
        "AI applications",
        "Ethical AI",
        "AI tools"
      ]
    },
    {
      id: 2,
      title: "Data Structures Basics",
      description: "Learn fundamental structures like arrays, stacks, and queues.",
      image: ai2,
      instructorId: 1,
      video: 'https://www.youtube.com/embed/nVyD6THcvDQ',
      animation: treeAnimation,
      learningPoints: [
        "Arrays",
        "Stacks",
        "Queues",
        "Linked lists",
        "Complexity analysis",
        "Data organization"
      ]
    },
    {
      id: 3,
      title: "Algorithms Essentials",
      description: "Understand sorting, searching, and optimization techniques efficiently.",
      image: ai3,
      instructorId: 2,
      video: 'https://www.youtube.com/embed/nVyD6THcvDQ',
      animation: treeAnimation,
      learningPoints: [
        "Sorting",
        "Searching",
        "Time complexity",
        "Recursion",
        "Optimization",
        "Algorithm design"
      ]
    },
    {
      id: 4,
      title: "Object-Oriented Programming",
      description: "Master OOP principles like encapsulation, inheritance, and polymorphism.",
      image: ai4,
      instructorId: 2,
      video: 'https://www.youtube.com/embed/nVyD6THcvDQ',
      animation: treeAnimation,
      learningPoints: [
        "OOP concepts",
        "Classes",
        "Inheritance",
        "Encapsulation",
        "Polymorphism",
        "Abstraction"
      ]
    },
    {
      id: 5,
      title: "Advanced DSA",
      description: "Explore trees, graphs, heaps, and complex problem-solving strategies.",
      image: ai5,
      instructorId: 3,
      video: 'https://www.youtube.com/embed/nVyD6THcvDQ',
      animation: treeAnimation,
      learningPoints: [
        "Trees",
        "Graphs",
        "Heaps",
        "Backtracking",
        "Dynamic programming",
        "Problem-solving"
      ]
    },
    {
      id: 6,
      title: "Design Patterns",
      description: "Implement reusable software design solutions using OOP concepts effectively.",
      image: ai6,
      instructorId: 3,
      video: 'https://www.youtube.com/embed/nVyD6THcvDQ',
      animation: treeAnimation,
      learningPoints: [
        "Design principles",
        "Singleton pattern",
        "Factory pattern",
        "Adapter pattern",
        "Observer pattern",
        "Code reusability"
      ]
    }
  ]);

  const [assignment, setAssignments] = useState([
    {
      AssignmentId: 1,
      AssignmentTitle: "Advanced DSA",
      AssignmentDescription: "Complete Assignment and submit handwritten solutions",
      DeadLine: "20-05-2025",
      status: "Pending",
      totalMarks: 100,
      questionsCount: 5,
      attemptsLeft: 3,
      attachments: [
        {
          name: "Problem-Statement.pdf",
          url: "#",
          type: "PDF",
          size: "2.4 MB"
        }
      ],
      objectives: [
        "Understand core data structures",
        "Implement complex algorithms",
        "Analyze time complexity"
      ],
      guidelines: [
        "Submit PDF format only",
        "Include complexity analysis",
        "Properly comment your code",
        "No late submissions accepted"
      ],
      requirements: [
        "Complete all 5 questions",
        "Handwritten solutions required",
        "Include testing scenarios"
      ],
      gradingCriteria: [
        { category: "Correctness", percentage: 70 },
        { category: "Documentation", percentage: 20 },
        { category: "Code Quality", percentage: 10 }
      ],
      submissions: [
        {
          fileName: "solution.pdf",
          date: "15-05-2025",
          status: "Graded",
          grade: 85
        }
      ]
    },
    {
      AssignmentId: 2,
      AssignmentTitle: "Design Patterns",
      AssignmentDescription: "Implement common design patterns in Java",
      DeadLine: "28-05-2025",
      status: "Pending",
      totalMarks: 100,
      questionsCount: 4,
      attemptsLeft: 2,
      attachments: [
        {
          name: "Design-Specifications.docx",
          url: "#",
          type: "DOCX",
          size: "1.8 MB"
        }
      ],
      objectives: [
        "Understand SOLID principles",
        "Implement creational patterns",
        "Apply behavioral patterns"
      ],
      guidelines: [
        "Submit .zip file with source code",
        "Include UML diagrams",
        "Add proper documentation",
        "Follow naming conventions"
      ],
      requirements: [
        "Implement 4 patterns",
        "Include test cases",
        "Add documentation comments"
      ],
      gradingCriteria: [
        { category: "Implementation", percentage: 60 },
        { category: "Documentation", percentage: 30 },
        { category: "Originality", percentage: 10 }
      ],
      submissions: [] // No submissions yet
    }
  ]);
  const [instructor, setInstructor] = useState(
    [
      {
        id: 1, image: avatar, HisCourse: [1, 2], HisReviews: [1, 2], name: "Professor Ali", description: " Master OOP principles like encapsulation, inheritance, and polymorphism.", ranking: "5.0", reviews: "143", skills: ["Web", "Data Sructure"], achievements: "100", certificates: "20"
      },
      {
        id: 2, image: avatar2, HisCourse: [3, 4], HisReviews: [3, 4], name: "Professor Hamna", description: " Master OOP principles like encapsulation, inheritance, and polymorphism.", ranking: "4.7", reviews: "591", skills: ["OOP", "PDC"], achievements: "30", certificates: "13"
      },
      {
        id: 3, image: avatar3, HisCourse: [5, 6], HisReviews: [5, 6],
        name: "Professor Haris", description: " Master OOP principles like encapsulation, inheritance, and polymorphism.", ranking: "4.9", reviews: "563", skills: ["Python", "Java", "C++"], achievements: "93", certificates: "8"
      },


    ]
  )

  const [quizzes, setQuizzes] = useState([
    {
      QuizId: 1,
      timeLimit: 30,
      questions: [
        {
          text: "Which of these is NOT a valid Python data type?",
          options: ["tuple", "dict", "array", "decimal"],
          correctAnswer: 2,
          points: 5
        },
        {
          text: "What is the output of 'print(3 * '7')' in Python?",
          options: ["21", "777", "Error", "37"],
          correctAnswer: 1,
          points: 5
        },

      ],
      totalPoints: 100,
      QuizTitle: "Python Fundamentals Certification",
      QuizDescription: "Test your knowledge of core Python programming concepts and best practices.",
      timeLimit: 30,
      questionsCount: 20,
      attemptsLeft: 2,
      difficulty: "Intermediate",
      totalPoints: 100,
      passingScore: 75,
      timePerQuestion: 90,
      structure: [
        "Multiple Choice Questions (80%)",
        "Code Analysis (15%)",
        "Practical Coding (5%)",
        "Negative marking for wrong answers"
      ],
      scoringPolicy: [
        { category: "Correct Answer", value: "+4 points" },
        { category: "Wrong Answer", value: "-1 point" },
        { category: "Unanswered", value: "0 points" }
      ],
      attempts: [
        { score: 68, date: "2023-03-15", timeSpent: 25 },
        { score: 72, date: "2023-04-02", timeSpent: 28 }
      ],

      sampleQuestion: {
        text: "Which of these is NOT a valid Python data type?",
        options: ["tuple", "dict", "array", "decimal"]
      }
    }
  ])
  const [reviews, setReviews] = useState(
    [
      {
        id: 1, rating: "5.0", reviews: "Master OOP principles like encapsulation, inheritance, and polymorphism.", reviewerName: "Ali"
      },
      {
        id: 2, rating: "4.6", reviews: "Very Good", reviewerName: "Hamza"
      },
      {
        id: 3, rating: "4.9", reviews: "Master OOP principles like encapsulation, inheritance, and polymorphism.", reviewerName: "Haris"
      },
      {
        id: 4, rating: "4.2", reviews: "Master OOP principles like encapsulation, inheritance, and polymorphism.", reviewerName: "Faizan"
      },
      {
        id: 5, rating: "4.5", reviews: "Master OOP principles like encapsulation, inheritance, and polymorphism.", reviewerName: "Ahad"
      },
      {
        id: 6, rating: "4.1", reviews: "Master OOP principles like encapsulation, inheritance, and polymorphism.", reviewerName: "Hamza"
      },



    ]
  )
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <Routes>

        <Route path="/" element={<StartingPage />} />
        <Route path="/generated-courses" element={<GeneratedCourses courses={courses} />} />
        <Route path="/student-dashboard" element={<StudentDashboard courses={courses} assignment={assignment} quizzes={quizzes} />} />
        <Route path="/select-role" element={<RoleSelection />} />
        <Route path="/home" element={<HomePage courses={courses} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instructors" element={<Instructors instructor={instructor} />} />
        <Route path="/private-chat" element={<PrivateChat />} />
        <Route path="/starting-page" element={<StartingPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/courses-page" element={<CoursesPage courses={courses} />} />
        <Route path="/course/:id" element={<CourseDetail courses={courses} />} />
        <Route path="/assignment/:id" element={<AssignmentDetail assignments={assignment} />} />
        <Route path="/quizzes/:id" element={<QuizDetail quizzes={quizzes} />} />
        <Route path="/quiz/:id/start" element={<QuizSession quizzes={quizzes} />} />
        <Route path="/instructor-Profile/:id" element={<InstructorSingleProfile instructor={instructor} courses={courses} reviews={reviews} />} />
        <Route path="/enroll-course-single/:id" element={<EnrollCourseSingle instructor={instructor} courses={courses} reviews={reviews} />} />
        <Route path="/add-course" element={<CourseDescribe courses={courses} setCourses={setCourses} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
