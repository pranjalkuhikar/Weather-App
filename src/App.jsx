import InfoBox from "./components/InfoBox";
import SearchBox from "./components/SearchBox";
import { useState } from "react";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Nagpur",
    feelsLike: 31.2,
    humidity: 94,
    temp: 27.01,
    tempMax: 27.01,
    tempMin: 27.01,
    weather: "haze",
  });

  function updatedInfo(newInfo) {
    setWeatherInfo(newInfo);
  }

  return (
    <>
      <SearchBox updatedInfo={updatedInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}

export default App;
