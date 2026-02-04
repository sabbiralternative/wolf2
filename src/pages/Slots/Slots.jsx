import CasinoGames from "../../components/shared/CasinoGames/CasinoGames";
import { useGetIndex } from "../../hooks";

const Slots = () => {
  const { data } = useGetIndex({
    type: "wolf_casino",
    category: "slots",
    provider: "all",
  });

  if (!data) {
    return null;
  }

  return <CasinoGames data={data} />;
};

export default Slots;
