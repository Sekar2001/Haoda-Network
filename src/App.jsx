import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fontsource/chakra-petch'; // Import the font
import '@fontsource/inter'; // Import the font



import AboutUs from "./pages/about/AboutUs"; 
import ContactUs from "./pages/contact/ContactUs";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import OTT from "./pages/ott/OTT";
import Swipe from "./pages/swipe/Swipe";
import Game from "./pages/game/Game";
import ProductionHouse from "./pages/production/ProductionHouse";
import './assets/css/responsive.css'
const App = () => {
  return (
    <Router>
      
      <Routes>
       <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ott" element={<OTT />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/game" element={<Game />} />
        <Route path="/production" element={<ProductionHouse />} />

        </Route>
      </Routes>
      
    </Router>
  );
};

export default App;
