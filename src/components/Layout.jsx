import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Layout;

