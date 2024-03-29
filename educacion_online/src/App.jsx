import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import CourseDetail from "./components/Course/CourseDetail";
import CourseList from "./components/Course/CourseList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Courses from "./pages/Courses";
import LessonDetail from "./components/Lesson/LessonDetail";
import NotFoundPage from "./components/Layout/NotFoundPage";
import { useEffect, useState } from "react";
import { saveDataToFile } from "./utils/dataCursos";
import { useDispatch, useSelector } from "react-redux";
import { fetchCursos } from "./redux/actions/actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCursos());
    // setCursos(courses)
  }, []);
  return (
    <>
      <div
        className="flex flex-col min-h-screen  "
        style={{ backgroundColor: "#fff6ed" }}
      >
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<Courses  />} />
          {/* <Route exact path="/course/:id" element={<CourseDetail />} /> */}
          <Route exact path="/courses/course/:id" element={<CourseDetail />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/lessondetail/:id" element={<LessonDetail />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* Agrega más rutas aquí si es necesario */}
          {/* <Route element={<NotFound/>} /> */}
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
