import CasinoGames from "../../components/shared/CasinoGames/CasinoGames";
import { useGetIndex } from "../../hooks";

const IndianCards = () => {
  const { data } = useGetIndex({
    type: "wolf_casino",
    category: "indian_cards",
    provider: "all",
  });

  if (!data) {
    return null;
  }
  return <CasinoGames data={data} />;
};

export default IndianCards;
