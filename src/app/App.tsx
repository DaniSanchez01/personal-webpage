import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/colors.css';
import './styles/typography.css';
import Navbar from './navbar/navbar.component';
import Home from './pages/home/home.tsx';
import Blog from './pages/blog/blog.tsx';
import BlogPost from './pages/blog/blogPost.tsx';
import AboutMe from './pages/aboutMe/aboutMe.tsx';
import Projects from './pages/projects/projects.tsx';
import ScrollToTop from './components/scrollToTop/scrollToTop.tsx';

function App() {
  return (
    <div className="app-globals">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
