import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudRain,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Fragment } from "react";
import {
  Rain,
  Clouds,
  Clear,
  Smoke,
  Haze,
} from "../static/backgroundImges/images";
import Loading from "./loading";

const Weather = (props) => {
  const reverseCities = props.cities.slice().reverse();

  // Conditional rendering for FontAwesomeIcon
  const fontAwesomeIcon = (main) => {
    if (main === "Clouds") {
      return faCloud;
    } else if (main === "Clear") {
      return faSun;
    } else if (main === "Rain" || main === "Drizzle") {
      return faCloudRain;
    } else if (main === "Smoke" || main === "Mist") {
      return faSmog;
    } else if (main === "Haze") {
      return faCloud;
    }
  };

  // Conditional rendering for colour of FontAwesomeIcon
  const fontAwesomeColor = (main) => {
    if (main === "Clear") {
      return "#f4d867";
    } else if (main === "Rain" || main === "Drizzle") {
      return "#73a08a";
    } else if (
      main === "Clouds" ||
      main === "Smoke" ||
      main === "Haze" ||
      main === "Mist"
    ) {
      return "#ffff";
    }
  };

  // Conditional rendering for text of FontAwesomeIcon
  const fontAwesomeText = (main) => {
    if (main === "Clouds") {
      return "Scattered Clouds";
    } else if (main === "Clear") {
      return "Clear";
    } else if (main === "Rain" || main === "Drizzle") {
      return "Raining";
    } else if (main === "Smoke") {
      return "Smoke";
    } else if (main === "Haze") {
      return "Haze";
    } else if (main === "Mist") {
      return "Mist";
    }
  };

  // Conditional rendering for text colour of every component
  const textColor = (main) => {
    if (main === "Clouds") {
      return "text-white";
    } else if (main === "Clear") {
      return "text-dark";
    } else if (main === "Rain" || main === "Drizzle") {
      return "text-white";
    } else if (main === "Smoke") {
      return "text-white";
    } else if (main === "Haze" || main === "Mist") {
      return "text-dark";
    }
  };

  // Conditional rendering for background of every component
  const backgroundGif = (main) => {
    if (main === "Clouds") {
      return Clouds;
    } else if (main === "Clear") {
      return Clear;
    } else if (main === "Rain" || main === "Drizzle") {
      return Rain;
    } else if (main === "Smoke") {
      return Smoke;
    } else if (main === "Haze" || main === "Mist") {
      return Haze;
    }
  };

  // Display a Sweetalert if there is an error in API call
  const errorMessage = (cityName) => {
    const mySwal = withReactContent(Swal);
    mySwal.fire({
      icon: "error",
      title: "Oops...",
      text: cityName + " not found!",
    });
  };

  return (
    <Fragment>
      {props.hasErrors && errorMessage(props.lastSearchKeyword)}
      {props.loading ? (
        <Loading />
      ) : (
        reverseCities.map((city, index) => (
          <div
            className="row d-flex justify-content-center align-items-center h-100"
            key={index}
          >
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div
                className="card shadow-0 border my-4"
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(${backgroundGif(city.main)})`,
                }}
              >
                <div
                  className={`card-body rounded p-4 ${textColor(city.main)}`}
                >
                  <h4 className="mb-1 sfw-normal">
                    {city.cityName}, {city.countryName}
                  </h4>
                  <p>
                    Current temperature:{" "}
                    <strong>
                      {city.currentTemperature}°
                      {city.unit === "imperial" ? "F" : "C"}
                    </strong>
                  </p>
                  <p>
                    Feels like:{" "}
                    <strong>
                      {city.feelsLike}°{city.unit === "imperial" ? "F" : "C"}
                    </strong>
                  </p>
                  <p>
                    Max:{" "}
                    <strong>
                      {city.maxTemperature}°
                      {city.unit === "imperial" ? "F" : "C"}
                    </strong>
                    , Min:{" "}
                    <strong>
                      {city.minTemperature}°
                      {city.unit === "imperial" ? "F" : "C"}
                    </strong>
                  </p>
                  <p>
                    Pressure: <strong>{city.pressure}N/m2 </strong>, Humidity:{" "}
                    <strong>{city.humidity}%</strong>
                  </p>

                  <div className="d-flex flex-row align-items-center">
                    <p className="mb-0 me-4">{fontAwesomeText(city.main)}</p>
                    <i style={{ color: fontAwesomeColor(city.main) }}>
                      <FontAwesomeIcon
                        icon={fontAwesomeIcon(city.main)}
                        className="fa-2x"
                      />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </Fragment>
  );
};

export default Weather;
