import{BrowserRouter as Router, Routes,  Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import NewProjects from './components/pages/NewProjects';
import Project from './components/pages/Project';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';




function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min_height">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route  path='/projects' element={<Projects/>}/>
          <Route  path='/company' element={<Company/>}/>
          <Route  path='/contact' element={<Contact/>}/>   
          <Route  path='/newprojects' element={<NewProjects/>}/>
          <Route  path='/project/:id' element={<Project/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
