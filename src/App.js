import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './pages/Banner';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Header from './pages/Header';


function App() {
  return (
    <div >
      <Header></Header>
      <Banner></Banner>
      <Contact></Contact>
      <Routes>
        {/* <Route path='/contact' element={<Contact></Contact>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
