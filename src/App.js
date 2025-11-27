
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import TeslaSlider from './components/About';
import Contact from './components/Contact';
import Slider from './components/Slider';
import Footer from './components/Footer';




function App() {
  return (
    <div>
      <Navbar />
      <Home />
     <TeslaSlider />
     <Slider />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
