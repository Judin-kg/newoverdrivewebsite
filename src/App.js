
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import TeslaSlider from './components/About';
import Contact from './components/Contact';
import DetailingHero from './components/DetailingHero';



function App() {
  return (
    <div>
      <Navbar />
      <Home />
     <TeslaSlider />
     <DetailingHero />
     <Contact />
    </div>
  );
}

export default App;
