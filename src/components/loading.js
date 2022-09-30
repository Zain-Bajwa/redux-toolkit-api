import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className="card shadow-0 border my-4 bg-secondary">
      <div className="card-body rounded p-4">
        <div className="d-flex flex-row align-items-center">
          <h4 className="mb-0 me-2">City Name</h4>
          <i>
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin-pulse text-dark"
            />
          </i>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <p className="mb-0 me-2">Current temperature:</p>
          <i>
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin-pulse text-dark"
            />
          </i>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <p className="mb-0 me-2">Feels like:</p>
          <i>
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin-pulse text-dark"
            />
          </i>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <p className="mb-0 me-2">Max:</p>
          <i>
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin-pulse text-dark me-4"
            />
          </i>
          <p className="mb-0 me-2">Min:</p>
          <i>
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin-pulse text-dark"
            />
          </i>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <p className="mb-0 me-2">Pressure:</p>
          <i>
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin-pulse text-dark me-4"
            />
          </i>
          <p className="mb-0 me-2">Humidity:</p>
          <i>
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin-pulse text-dark"
            />
          </i>
        </div>
        <div className="d-flex flex-row align-items-center">
          <p className="mb-0 me-4">Sky</p>
          <i>
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin-pulse text-dark"
            />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Loading;
