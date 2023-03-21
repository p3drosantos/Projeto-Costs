import{BrowserRouter as Router, Routes,  Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import NewProjects from './components/pages/NewProjects';

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
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/company' element={<Company/>}/>
          <Route exact path='/contact' element={<Contact/>}/>   
          <Route exact path='/newprojects' element={<NewProjects/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
