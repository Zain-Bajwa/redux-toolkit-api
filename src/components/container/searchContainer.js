// This Container is to wrap all the logic of Search Component.
import Search from "../Search";
import { useDispatch } from "../../redux/store";
import { getCity } from "../logic/actions";
import { GetCityWeatherSelector } from "../logic/selectors";

const SearchContainer = (props) => {
  const dispatch = useDispatch();
  const getCityWeather = GetCityWeatherSelector();

  return (
    <Search
      // Sending all props to Search component comming from App Component
      {...props}
      // Wrap getCity function ready to use in Search
      getCity={(requestData) => dispatch(getCity(requestData))}
      // Dispatch all the properties of state(loading, hasErrors,
      // lastSearchKeyword and cities)
      {...getCityWeather}
    />
  );
};

export default SearchContainer;
