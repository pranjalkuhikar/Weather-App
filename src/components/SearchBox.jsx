/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

const SearchBox = ({ updatedInfo }) => {
  const [cityname, setCityname] = useState();
  const [error, setError] = useState(false);

  async function getWeatherInfo() {
    const API_KEY = "bc65488edacf26b7a4e0b966169dd7be";
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`
      );
      let result = {
        city: cityname,
        temp: response.data.main.temp,
        tempMin: response.data.main.temp_min,
        tempMax: response.data.main.temp_max,
        humidity: response.data.main.humidity,
        feelsLike: response.data.main.feels_like,
        weather: response.data.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  function handleChange(event) {
    setCityname(event.target.value);
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setCityname("");
      let newinfo = await getWeatherInfo();
      updatedInfo(newinfo);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-semibold mb-10">Search Weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={cityname}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p className="text-red-600 font-semibold mt-5">No Such Place Exits</p>
        )}
      </form>
    </div>
  );
};

export default SearchBox;
