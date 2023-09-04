import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {

  return (
    <>
      <Navbar />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
