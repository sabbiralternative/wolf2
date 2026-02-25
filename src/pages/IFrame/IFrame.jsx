import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, Settings } from "../../api";
import { AxiosSecure } from "../../lib/AxiosSecure";
import Loader from "../../components/UI/Loader/Loader";

const IFrame = () => {
  const [iFrame, setIFrame] = useState("");
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    const getCasinoVideo = async () => {
      setLoading(true);

      let payload = {
        gameId: id?.toString(),
        isHome: false,
        mobileOnly: true,
        casinoCurrency: Settings.casino_currency,
      };
      try {
        const { data } = await AxiosSecure.post(API.liveCasinoIframe, payload);
        setIFrame(data?.gameUrl);
        setLoading(false);
        // window.open(data?.gameUrl, "_blank");
      } catch (error) {
        setLoading(false);
        console.error("Error opening casino game:", error);
        // Handle error as needed
      }
    };
    getCasinoVideo();
  }, [id, token]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{ height: "100%", maxHeight: "100%" }}
      className="page-body ng-star-inserted"
    >
      <iframe height="100%" width="100%" frameBorder="0" src={iFrame}></iframe>
    </div>
  );
};

export default IFrame;
