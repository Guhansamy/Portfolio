import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden text-white'>
      <Header />
      <Banner />
      <About />
      {/* <Services /> */}
      <Work />
      <Contact />
      <Nav />
      <div className='h-[5000px]'></div>
    </div>
   );
}

export default App;
