import { useSelector } from "../../redux/store";

// We cannot set GetCitySelector as a getCitySelector because react raise error
// React Hook "useSelector" is called in function "getCitySelector" that is
// neither a React function component nor a custom React Hook function.
// React component names must start with an uppercase letter. React Hook names
// must start with the word "use".
export const GetCityWeatherSelector = () => {
  const { loading, hasErrors, lastSearchKeyword, cities } = useSelector(
    (state) => state.weather
  );

  return { loading, hasErrors, lastSearchKeyword, cities };
};
