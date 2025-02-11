import useResponsivePage from "../hooks/useResponsivePage";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {

  const isMobile = useResponsivePage();

  return !isMobile ? <div style={{display:'flex',flexDirection:'column'}}>
  <Header />
  <Outlet/>
  <Footer />
</div> : <Outlet />;
};

export default Layout;

