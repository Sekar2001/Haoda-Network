

import useResponsivePage from "../../hooks/useResponsivePage";
import MobileAboutus from "../../mobile/Aboutus/MobileAboutus"
import AboutUsDesktop from "./AboutUsDesktop";


const AboutUs = () => {
  const isMobile = useResponsivePage();

  return isMobile ? <MobileAboutus /> : <AboutUsDesktop />;
};

export default AboutUs;