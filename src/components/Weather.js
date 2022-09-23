import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faCloudRain, faSun } from "@fortawesome/free-solid-svg-icons";

const Weather = () => {
  const fontawesome = (value) => {
    return value
  }

  const color = (value) => {
    if (value === 1){
        return "#3b72c4";
    }
    else{
        return '#f0c724'
    }
  }
  return (
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card shadow-0 border my-4">
          <div className="card-body p-4">
            <h4 className="mb-1 sfw-normal">New York, US</h4>
            <p className="mb-2">
              Current temperature: <strong>5.42°C</strong>
            </p>
            <p>
              Feels like: <strong>4.37°C</strong>
            </p>
            <p>
              Max: <strong>6.11°C</strong>, Min: <strong>3.89°C</strong>
            </p>

            <div className="d-flex flex-row align-items-center">
              <p className="mb-0 me-4">Scattered Clouds</p>
              <i style={{ color: color(2) }}>
                <FontAwesomeIcon icon={fontawesome(faSun)} />
              </i>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Weather;
