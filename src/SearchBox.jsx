import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();

    if (jsonResponse.cod !== 200) throw new Error("City not found");

    return {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        mb: 3,
      }}
    >
      <TextField
        label="Enter City"
        variant="outlined"
        value={city}
        required
        onChange={(e) => {
          setCity(e.target.value);
          setError(false);
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          ❌ No such place in our API
        </p>
      )}
    </Box>
  );
}
