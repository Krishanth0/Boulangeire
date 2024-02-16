import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import About from  './components/About';
import Contact from  './components/Contact';
import Gallery from  './components/Gallery';
import Reviews from  './components/Reviews';
import Shops from  "./components/Shops";
import Products from  "./components/Products";
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Products/>
    <Shops/>
    <Gallery/>
    <Contact/>
    <Reviews/>
    <Footer/>
    </>
  );
}

export default App;
