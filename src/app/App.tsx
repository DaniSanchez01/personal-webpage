import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/colors.css';
import Navbar from './navbar/navbar.component';
import Home from './pages/home/home.tsx';
import Blog from './pages/blog/blog.tsx';

function App() {
  return (
    <div className="app-globals">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
