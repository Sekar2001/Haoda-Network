
import useResponsivePage from "../../hooks/useResponsivePage";
import MobileContactus from "../../mobile/Contactus/MobileContactus"
import ContactUsDesktop from "./ContactUsDesktop";


const ContactUs = () => {
  const isMobile = useResponsivePage();

  return isMobile ? <MobileContactus /> : <ContactUsDesktop />;
};

export default ContactUs;