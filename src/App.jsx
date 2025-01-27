
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fontsource/chakra-petch'; // Import the font
import '@fontsource/inter'; // Import the font
import Features from "./components/Features";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Listing from "./components/Listing";
import Network from "./components/Network";
import AboutUs from "./pages/AboutUs"; 
import ContactUs from "./pages/ContactUs";
import Slide from "./components/Slide";
import Choose from "./components/Choose";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slide/>
              <Choose/>
              <Listing />
              <Game />
              <Network />
              <Features />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
