import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
// import About from './components/About';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {

  return (
    <>
      <div className="min-h-screen ">
      <Header />
      <Cursor/>
      <main>
        <Hero />
        <Work />
        <Contact />
      </main>
    </div>
    </>
  )
}

export default App
