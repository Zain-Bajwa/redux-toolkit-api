import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  lastSearchKeyword: "",
  cities: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,

  reducers: {
    isLoading: (state) => {
      state.loading = true;
    },
    getCitySuccess: (state, action) => {
      const { data } = action.payload;
      const cityData = {
        currentTemperature: data.main.temp,
        feelsLike: data.main.feels_like,
        minTemperature: data.main.temp_min,
        maxTemperature: data.main.temp_max,
        countryName: data.sys.country,
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        main: data.weather[0].main,
        // Unit can be metric=celsius or imperial=farenheit
        unit: action.payload.successData.unit,
      };
      state.lastSearchKeyword = action.payload.successData.searchKeyword;
      state.cities.push(cityData);

      state.loading = false;
      state.hasErrors = false;
    },
    getCityFail: (state, action) => {
      state.lastSearchKeyword = action.payload.errorData.searchKeyword;
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { isLoading, getCityFail, getCitySuccess } = weatherSlice.actions;

// Reducer
export const { reducer: weatherReducer } = weatherSlice;
