import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API } from "../../../api";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let searchStyle = {};
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  if (showSearch) {
    searchStyle = {
      cursor: "pointer",
      backgroundColor: "var(--white-color)",
      color: "var(--primary-color)",
      borderRadius: "4px",
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "26px",
      height: "26px",
      minWidth: "26px",
      minHeight: "26px",
      aspectRatio: "1/1",
      fontWeight: "900",
    };
  }

  useEffect(() => {
    if (searchText?.length > 2) {
      const getSearchData = async () => {
        const { data } = await AxiosSecure.post(API.searchEvent, {
          name: searchText,
        });

        if (data?.result?.length > 0) {
          setData(data?.result);
        }
      };
      getSearchData();
    }
  }, [searchText, token]);

  /* filter the search value */
  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.eventType)));

    setCategories(categories);
  }, [data]);

  /* hide the search modal */
  const handleNavigate = (item) => {
    setSearchText("");
    setData([]);
    searchStyle = {};
    navigate(`/event-details/${item?.eventTypeId}/${item?.eventId}`);
  };
  return (
    <div className="ng-star-inserted">
      <div className="forSearchBar-internal">
        <div className="ng-star-inserted">
          <div className="search-wrapper">
            <div
              className={`search-field ${showSearch ? "open" : ""}`}
              style={{ ...searchStyle }}
            >
              <span
                role="img"
                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                aria-hidden="true"
                data-mat-icon-type="font"
              >
                search
              </span>
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                placeholder="Search Matches / Casino Games"
                className="ng-untouched ng-pristine ng-valid"
              />
            </div>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowSearch(true)}
              role="img"
              className="mat-icon notranslate material-icons search-btn mat-ligature-font mat-icon-no-color"
              aria-hidden="true"
              data-mat-icon-type="font"
            >
              search
            </span>
          </div>
          {data?.length > 0 && searchText?.length > 2 && (
            <div className="results-wrapper ng-star-inserted">
              <div className="search-result ng-star-inserted">
                {categories?.map((category) => (
                  <div
                    key={category}
                    className="game cricket-game ng-star-inserted"
                  >
                    <div className="game-head">
                      <h1>{category}</h1>
                    </div>
                    <div className="list-wrap">
                      <ul>
                        {data
                          .filter((item) => item.eventType === category)
                          .map((item, i) => (
                            <li
                              onClick={() => handleNavigate(item)}
                              key={i}
                              className="ng-star-inserted"
                            >
                              <h4>{item?.name}</h4>
                              <p>{item?.openDate}</p>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {data?.length === 0 && searchText?.length > 4 && (
            <div className="results-wrapper ng-star-inserted">
              <p className="no-search-result ng-star-inserted">
                {" "}
                No search results found{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
