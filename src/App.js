import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Sections/HomePageSections/Footer/Footer';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import CoursesPage from './Pages/CoursesPage/CoursesPage';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/courses' Component={CoursesPage} />
          <Route path='/about-us' Component={AboutUsPage} />
          <Route path='/*' Component={NotFoundPage} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
