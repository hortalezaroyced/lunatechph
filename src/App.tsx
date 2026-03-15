import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Brands from './components/Brands';



function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Brands />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;