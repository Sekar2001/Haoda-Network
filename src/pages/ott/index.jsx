

import useResponsivePage from "../../hooks/useResponsivePage";
import MobileOtt from "../../mobile/OTT/MobileOtt";
import OTTDesktop from "./OTTDesktop";


const OTT = () => {
  const isMobile = useResponsivePage();

  return isMobile ? <MobileOtt /> : <OTTDesktop />;
};

export default OTT;