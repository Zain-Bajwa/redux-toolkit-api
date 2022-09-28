import Weather from "../Weather";
import { GetCityWeatherSelector } from "../logic/selectors";

const WeatherContainer = (props) => {
  const getCityWeather = GetCityWeatherSelector();
  // Dispatch all the properties of state(loading, hasErrors,
  // lastSearchKeyword and cities) in getCityWeather
  return <Weather {...props} {...getCityWeather} />;
};

export default WeatherContainer;
