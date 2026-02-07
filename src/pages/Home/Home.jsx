import CasinoProviders from "../../components/modules/Home/CasinoProviders";
import Casino from "../../components/modules/Home/Casino";
import CardGames from "../../components/modules/Home/CardGames";
import InPlay from "../../components/modules/Home/InPlay";
import LiveCasino from "../../components/modules/Home/LiveCasino";
import useBannerImage from "../../hooks/banner";
import SliderImage from "../../components/modules/Home/SliderImage";
import { useEffect } from "react";

const Home = () => {
  const { data } = useBannerImage();

  useEffect(() => {
    const leftArrow = document.getElementsByClassName("swiper-button-prev");
    Array?.from(leftArrow)?.forEach((item) => {
      item?.remove();
    });
    const rightArrow = document.getElementsByClassName("swiper-button-next");
    Array?.from(rightArrow)?.forEach((item) => {
      item?.remove();
    });
  }, [data]);
  return (
    <div className="page-body">
      <div className="ion-content-wrapper">
        <div
          role="main"
          className="md content-ltr hydrated"
          style={{
            "--offset-top": "0px",
            "--offset-bottom": "0px",
            height: "100%",
          }}
        >
          <div className="pagetab-body" style={{ marginTop: "0px" }}>
            <div className="pagetab-content">
              {data?.banner?.length > 0 && (
                <SliderImage bannerImage={data?.banner} />
              )}
              <CasinoProviders />
              <InPlay />
              <CardGames />
              <LiveCasino />
              <Casino />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
