import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Enquiry from './pages/Enquiry';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/:category/:name" element={<ProjectDetail/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/ujarchitect" element={<Enquiry/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
