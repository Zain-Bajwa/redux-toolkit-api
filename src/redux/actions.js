import Fetch from "./hooks/helpers";
import { WEATHER_API_KEY, API_BASE_URL } from "../config";

const SearchCity = (keyword) => {
    // debugger
  let url = new URL(API_BASE_URL);
  url.search = new URLSearchParams({
    q: 'islamabad',
    appid: WEATHER_API_KEY,
  });
//   debugger
  const { data, isLoading, error } = Fetch(url);
  console.log(data);
  debugger
  return;
};

export default SearchCity;
