import { Link } from "react-router-dom";
import { useGetIndex } from "../../../hooks";

const CasinoProviders = () => {
  const { data } = useGetIndex({
    type: "wolf_casino_provider_homepage",
  });

  return (
    <div
      className="providers-section ng-star-inserted"
      style={{ marginTop: "5px" }}
    >
      <div className="game-play-heading" tabIndex={0}>
        <h2>Casino Providers</h2>
        <Link to="/casino-providers" className="view-all-link">
          All
          <span
            role="img"
            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
            aria-hidden="true"
            data-mat-icon-type="font"
          >
            chevron_right
          </span>
        </Link>
      </div>
      <div className="providers-list">
        <ul>
          {data?.result?.data?.map((item) => (
            <li key={item?.product} className="p-item ng-star-inserted">
              <a className="provider-item">
                <div className="p-logo">
                  <img alt="Evolution Gaming" src={item?.img} />
                </div>
                <p>{item?.product}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CasinoProviders;
