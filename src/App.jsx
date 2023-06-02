import HeroC from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Simplify from "./components/Simplify/Simplify";
import Testimonials from "./components/Testimonials/Testimonials";
import MainC from "./components/main/MainC";

function App() {
  return (
    <>
      <NavBar />
      <HeroC />
      <MainC />
      <Testimonials />
      <Simplify />
    </>
  );
}

export default App;
