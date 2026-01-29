import CasinoGames from "../../components/shared/CasinoGames/CasinoGames";
import { useGetIndex } from "../../hooks";

const InstantGames = () => {
  const { data } = useGetIndex({
    type: "wolf_casino",
    category: "instant_games",
    provider: "all",
  });

  if (!data) {
    return null;
  }

  return <CasinoGames data={data} />;
};

export default InstantGames;
