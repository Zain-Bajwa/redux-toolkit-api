import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { WEATHER_API_KEY } from "../config";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const [unit, setUnit] = useState("metric");

  // Getting value from the input and set it into keyword
  const onSearchChanged = (event) => {
    setKeyword(event.target.value);
  };

  // This will get the value of checked Radio button
  const onRadioChange = (event) => {
    setUnit(event.target.id);
  };

  // This function will check the city name in the Redux-Store. If the name
  // is in Redux-Store then it will return false otherwise true.
  const checkCityNameStore = () => {
    let flag = true;
    props.cities.forEach((city) => {
      if (city.cityName.toLowerCase() === keyword.toLowerCase()) {
        flag = false;
        return flag;
      }
    });
    return flag;
  };

  const onSubmit = (e) => {
    // The following line of code ensures the the input field should not empty
    // and the City name should not in the redux-store.
    if (keyword !== "" && checkCityNameStore()) {
      const requestData = { q: keyword, appid: WEATHER_API_KEY, units: unit };
      props.getCity(requestData);
    }
  };

  // Call onSubmit() with Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <Fragment>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <h3 className="mb-4 pb-2 fw-normal text-center">
            Check the weather forecast
          </h3>

          <div className="input-group justify-content-center">
            <input
              type="search"
              id="search-city"
              className="form-control"
              onChange={(e) => onSearchChanged(e)}
              onKeyDown={(e) => handleKeyDown(e)}
              placeholder="Search"
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSubmit()}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className="pt-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                // metric=celsius
                id="metric"
                onChange={(e) => onRadioChange(e)}
                checked={unit === "metric"}
              />
              <label className="form-check-label">Celsius</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                // imperial=farenheit
                id="imperial"
                onChange={(e) => onRadioChange(e)}
                checked={unit === "imperial"}
              />
              <label className="form-check-label">Farenheit</label>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
