import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, Settings } from "../../api";
import { AxiosSecure } from "../../lib/AxiosSecure";

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
        casinoCurrency: Settings.casinoCurrency,
      };
      try {
        const res = await AxiosSecure.post(API.liveCasinoIFrame, payload);
        const data = res?.data;
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
    return "Loading...";
  }

  return (
    <div
      style={{ height: "calc(100vh - 70px)" }}
      className="page-body ng-star-inserted"
    >
      <iframe height="100%" width="100%" frameBorder="0" src={iFrame}></iframe>
    </div>
  );
};

export default IFrame;
