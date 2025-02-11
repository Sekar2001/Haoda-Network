
import useResponsivePage from "../../hooks/useResponsivePage";
import MobileGame from "../../mobile/Game/MobileGame"
import GameDesktop from "./GameDesktop";

const Game = () => {
  const isMobile = useResponsivePage();

  return isMobile ? <MobileGame /> : <GameDesktop />;
};

export default Game;