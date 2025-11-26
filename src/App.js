
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import TeslaSlider from './components/About';
import Contact from './components/Contact';
import Slider from './components/Slider';




function App() {
  return (
    <div>
      <Navbar />
      <Home />
     <TeslaSlider />
     <Slider />
     <Contact />
    </div>
  );
}

export default App;
