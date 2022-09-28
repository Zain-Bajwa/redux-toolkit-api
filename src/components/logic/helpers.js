import { SEARCH_CITY_URL } from "../../constants/urls";
import {apiGet} from '../../utils/serverCalls'

export const getCityHelper = (requestData) =>
  apiGet(SEARCH_CITY_URL, requestData, true);
