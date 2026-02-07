import { useGetIndex } from "../../hooks";

const CasinoProviders = () => {
  const { data } = useGetIndex({
    type: "wolf_casino_provider",
  });

  return (
    <div className="page-body">
      <div
        role="main"
        className="ion-content md content-ltr hydrated"
        style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
      >
        <div className="pagetab-body">
          <div className="pagetab-content">
            <div className="game-play-heading">
              <h2>Casino Providers</h2>
            </div>
            <div className="providers-list ng-star-inserted">
              <ul>
                {data?.result?.data?.map((item) => (
                  <li key={item?.product} className="p-item ng-star-inserted">
                    <a className="provider-item">
                      <div className="p-logo">
                        <img
                          alt="Overlay"
                          className="overlay-img"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/frame.webp"
                        />
                        <img alt={item?.product} src={item?.img} />
                      </div>
                      <p>{item?.product}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoProviders;
