import CasinoGames from "../../components/shared/CasinoGames/CasinoGames";
import { useGetIndex } from "../../hooks";

const GameShows = () => {
  const { data } = useGetIndex({
    type: "wolf_casino",
    category: "game_shows",
    provider: "all",
  });

  if (!data) {
    return null;
  }
  return <CasinoGames data={data} />;
};

export default GameShows;
