import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Navbar from "./components/Navbar";
import Brand from "./components/Brand";
import CTA from "./components/CTA";

import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <div className='App'>
        <div className="gradient__bg">
        </div>
        <div className="demo">
         <Demo />
        </div>
      </div>
    </main>
  );
};

export default App;
