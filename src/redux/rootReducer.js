import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import { weatherReducer } from "../components/logic/slice";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});
export { rootPersistConfig, rootReducer };
