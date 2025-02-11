

import useResponsivePage from "../../hooks/useResponsivePage";
import MobileSwipe from "../../mobile/Swipe/MobileSwipe";
import SwipeDesktop from "./SwipeDesktop";


const Swipe = () => {
  const isMobile = useResponsivePage();

  return isMobile ? <MobileSwipe /> : <SwipeDesktop />;
};

export default Swipe;