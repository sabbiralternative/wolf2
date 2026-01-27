import CasinoGames from "../../components/shared/CasinoGames/CasinoGames";
import { useGetIndex } from "../../hooks";

const LiveCasino = () => {
  const { data } = useGetIndex({
    type: "wolf_casino",
    category: "live_casino",
    provider: "all",
  });

  if (!data) {
    return null;
  }
  return <CasinoGames data={data} />;
};

export default LiveCasino;
