import About from "./Components/About";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="w-full h-auto bg-white dark:bg-bodyColor px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
      </div>
    </div>
  );
}

export default App;
