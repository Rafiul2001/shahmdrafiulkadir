import './tailwind.css'
import { Navbar, Intro, About, Portfolio, MyServices, Contact } from './components/index';

function App() {
  return (
    <div className="max-w-7xl mx-auto font-poppins">
      <Navbar />
      <Intro />
      <About />
      <Portfolio /> 
      <MyServices />
      <Contact />
    </div>
  );
}

export default App;
