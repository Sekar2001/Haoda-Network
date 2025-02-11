
import useResponsivePage from "../../hooks/useResponsivePage";
import MobileHome from "../../mobile/home/MobileHome"
import HomeDesktop from "./HomeDesktop";

const Home = () => {
  const isMobile = useResponsivePage();

  return isMobile ? <MobileHome /> : <HomeDesktop />;
};

export default Home;