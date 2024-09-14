import Atributtion from "./components/Atributtion/Atributtion";
import FooterSection from "./components/Footer/Footer";
import HeroC from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Simplify from "./components/Simplify/Simplify";
import Testimonials from "./components/Testimonials/Testimonials";
import MainC from "./components/Main/MainC";

function App() {
  return (
    <>
      <NavBar />
      <HeroC />
      <MainC />
      <Testimonials />
      <Simplify />
      <FooterSection />
      <Atributtion />
    </>
  );
}

export default App;
