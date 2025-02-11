

import useResponsivePage from "../../hooks/useResponsivePage";
import MobileProduction from "../../mobile/production/MobileProduction";
import ProductionHouseDesktop from "./ProductionHouseDesktop";


const ProductionHouse = () => {
  const isMobile = useResponsivePage();

  return isMobile ? <MobileProduction /> : <ProductionHouseDesktop />;
};

export default ProductionHouse;