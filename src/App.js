import {Routes, Route} from 'react-router-dom';
import Career from './components/Career';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';
import Product from './components/Product';
import Footer from './components/Footer';
import ChairProf from './components/ChairProf';
import ViceChairProf from './components/ViceChairProf';
import SecreProf from './components/SecreProf';
import Services1 from './components/Services1';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/services1' element={<Services1/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/chairman' element={<ChairProf/>}/>
        <Route path='/vice-chairman' element={<ViceChairProf/>}/>
        <Route path='/secretary' element={<SecreProf/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
