import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import '@fontsource/chakra-petch'; // Import the font
import '@fontsource/inter'; // Import the font



import AboutUs from "./pages/about"; 
import ContactUs from "./pages/contact";
import Home from "./pages/home";
import Layout from "./components/Layout";
import OTT from "./pages/ott";
import Swipe from "./pages/swipe";
import Game from "./pages/game";
import ProductionHouse from "./pages/production";
import './assets/css/responsive.css'
const App = () => {
  return (
   <div className="App"> <Router>
      
      <Routes>
       <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ott" element={<OTT />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/game" element={<Game />} />
        <Route path="/production" element={<ProductionHouse />} />

        </Route>
      </Routes>
      
    </Router></div>
  );
};

export default App;
