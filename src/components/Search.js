import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchCity from "../redux/actions";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [unit, setUnit] = useState("Celsius");

  SearchCity(keyword);
  debugger

  const onSearchChanged = (event) => {
    setKeyword(event.target.value);
  };

  const onRadioChange = (event) => {
    setUnit(event.target.id);
    console.log(event.target.id);
  };

  const onSubmit = () => {
    SearchCity(keyword);
    debugger
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
              id="form1"
              className="form-control"
              onChange={(e) => onSearchChanged(e)}
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
                id="Celsius"
                //value="option1"
                onChange={(e) => onRadioChange(e)}
                checked={unit === "Celsius"}
              />
              <label className="form-check-label">Celsius</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="Farenheit"
                //value="option2"
                onChange={(e) => onRadioChange(e)}
                checked={unit === "Farenheit"}
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
