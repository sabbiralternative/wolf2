import { Link, useNavigate } from "react-router-dom";
import { useLotusHomeLobby } from "../../../hooks/lotusHomeLobby";
import { useDispatch, useSelector } from "react-redux";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const CasinoProviders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { data } = useLotusHomeLobby({
    theme: "wolf",
    home: true,
  });
  const handleNavigateToIFrame = (code, name) => {
    if (token) {
      navigate(`/game-provider/${name}/${code}`);
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

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
          {data?.casinoProviders?.slice(0, 10)?.map((item) => (
            <li key={item?.product} className="p-item ng-star-inserted">
              <a
                onClick={() =>
                  handleNavigateToIFrame(item?.game_id, item?.game_name)
                }
                className="provider-item"
              >
                <div className="p-logo">
                  <img alt="Evolution Gaming" src={item?.icon} />
                </div>
                <p>{item?.game_name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CasinoProviders;
