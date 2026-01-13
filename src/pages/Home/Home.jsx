import CasinoProviders from "../../components/modules/Home/CasinoProviders";
import GameShows from "../../components/modules/Home/GameShows";
import GoCasino from "../../components/modules/Home/GoCasino";
import GoCrash from "../../components/modules/Home/GoCrash";
import InPlay from "../../components/modules/Home/InPlay";
import InstantGames from "../../components/modules/Home/InstantGames";
import LiveCasino from "../../components/modules/Home/LiveCasino";
import SocialLinks from "../../components/modules/Home/SocialLinks";

const Home = () => {
  return (
    <div className="page-body">
      <div className="ion-content-wrapper">
        <div
          role="main"
          className="md content-ltr hydrated"
          style={{
            "--offset-top": "0px",
            "--offset-bottom": "0px",
          }}
        >
          <div className="pagetab-body">
            <div className="pagetab-content">
              <CasinoProviders />
              <InPlay />
              <GoCrash />
              <InstantGames />
              <GameShows />
              <GoCasino />
              <LiveCasino />
            </div>
          </div>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Home;
