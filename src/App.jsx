
import './App.css';
import Header from '../src/components/Header/Header';
import Navbar from '../src/components/Navbar/Navbar';
import About from '../src/components/About/About';
import Experience from '../src/components/Experience/Experience'
import Services from '../src/components/Services/Services'
import Projects from  '../src/components/Projects/Projects'
import Testimonials from '../src/components/Testimonials/Testimonials'
import Contact from '../src/components/Contact/Contact'
import Footer from './components/Footer/Footer';
import UpArrow from './components/UpArrow/UpArrow';

function App() {
  return(
  <>

 <Header FullName="Kenza Filali"/>
<Navbar/>
<About/>
<Experience/>
<Services/>
<Projects/>
<Testimonials/>
<Contact/>
<UpArrow/>
<Footer/>

  </>);
}

export default App;
