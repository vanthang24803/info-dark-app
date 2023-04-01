import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/about/About';
import Home from './Components/home/Home';
import Blogs from './Components/post/Blogs';
import Project from './Components/project/Project';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
