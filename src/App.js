import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './pages/Banner';
import background from '../src/images/background1.png';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Skills from './pages/Skills';



function App() {
  return (
    <div className="App">
      <Header></Header> 
      <Banner></Banner>
      <Contact></Contact>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
