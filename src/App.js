import Weather from "./components/container/weatherContainer";
import Search from "./components/container/searchContainer";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container paddingTop={8} justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4} xl={4} px={2}>
        <Search />
        <Weather />
      </Grid>
    </Grid>
  );
}

export default App;
