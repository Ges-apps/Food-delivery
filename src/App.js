import './App.css';
import Cards from './Components/Cards';
import Category from './Components/Category';
import Foods from './Components/Foods';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
function App() {
  return (
  <div>
    <Navbar />
    <Hero />
    <Cards />
    <Foods />
    <Category />
  </div>
  );
}

export default App;
