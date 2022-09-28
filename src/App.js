import Weather from "./components/container/weatherContainer";
import Search from "./components/container/searchContainer";

function App() {
  return (
    <div className="container py-5">
      <Search />
      <Weather />
    </div>
  );
}

export default App;
