import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
// import axios from 'axios';
import Menu from './components/Menu'
import Home from './page/Home';
import Footer from './components/Footer';

// import page website
import Learn from './page/Learn';
import LearningPath from './page/LearningPath';
import CourseDetail from './page/CourseDetail';
import BlogDetail from './page/BlogDetail';
import Blog from './page/Blog';
import Login from './page/Login';
import Admin from './admin/Admin';
import From from './components/From';
import Edit from './components/Edit'

function App() {
  const [check, setCheck] = useState(false);
  const [checkAdmin, setCheckAdmin] = useState(false)

  const isLoginPage = window.location.href.split('/')[3] === 'login';
  const isAdminPage = window.location.href.split('/')[3] === 'admin';
  // console.log(isAdminPage);
  useEffect(() => {
    setCheck(isLoginPage);
    setCheckAdmin(isAdminPage);
  }, [isLoginPage, isAdminPage])

  return (
    <>
      {!check ? <Header checkAdmin={checkAdmin} /> : null}
      <div className='flex min-w-screen'>
        <div className='sticky top-[74px] z-30'>
        {!check ? <Menu checkAdmin={checkAdmin} /> : null}
        </div>
        <div className={`w-full ${!check ? "max-w-screen-page" : ''} px-5 mt-5 relative`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning-path" element={<LearningPath />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/course-detail/:id" element={<CourseDetail />} />
            <Route path="/blog-detail" element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/them" element={<From />} />
            <Route path="/admin/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </div>
      {!check ? <Footer checkAdmin={checkAdmin} /> : null}
    </>
  );
}

export default App;
