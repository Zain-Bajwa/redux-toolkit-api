import { Fragment, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { WEATHER_API_KEY } from "../config";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const [unit, setUnit] = useState("metric");

  const controlProps = (value) => ({
    checked: unit === value,
    onChange: (e) => onRadioChange(e),
    value: value,
    sx: {
      color: "white",
      "&.Mui-checked": {
        color: "white",
      },
    },
  });

  // Getting value from the input and set it into keyword
  const onSearchChanged = (event) => {
    setKeyword(event.target.value);
  };

  // This will get the value of checked Radio button
  const onRadioChange = (event) => {
    setUnit(event.target.value);
  };

  // This function will check the city name in the Redux-Store. If the name
  // is in Redux-Store then it will return false otherwise true.
  const checkCityNameStore = () => {
    let flag = true;
    props.cities.forEach((city) => {
      if (city.cityName.toLowerCase() === keyword.toLowerCase()) {
        flag = false;
        return flag;
      }
    });
    return flag;
  };

  const handleOnClick = (e) => {
    // The following line of code ensures the the input field should not empty
    // and the City name should not in the redux-store.
    if (keyword !== "" && checkCityNameStore()) {
      const requestData = { q: keyword, appid: WEATHER_API_KEY, units: unit };
      props.getCity(requestData);
    }
  };

  // Call onSubmit() with Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <Fragment>
      <Typography variant="h5" sx={{ pb: 3, color: "white" }} align="center">
        Check the weather forecast
      </Typography>
      <Paper sx={{ display: "flex" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search City"
          id="search-city"
          onChange={(e) => onSearchChanged(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <IconButton
          type="button"
          sx={{ p: "8px" }}
          aria-label="search"
          onClick={() => handleOnClick()}
        >
          <SearchIcon sx={{ fontSize: 20, color: "black" }} />
        </IconButton>
      </Paper>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="metric"
          sx={{ color: "white" }}
        >
          <FormControlLabel
            control={<Radio {...controlProps("metric")} />}
            label="Celsius"
          />
          <FormControlLabel
            control={<Radio {...controlProps("imperial")} />}
            label="Farenheit"
          />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
};

export default Search;
