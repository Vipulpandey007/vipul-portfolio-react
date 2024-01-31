import About from "./Components/About";
import Banner from "./Components/Banner";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Resume from "./Components/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-white dark:bg-bodyColor px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <Project />
        <Resume />
        <Certificate />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
