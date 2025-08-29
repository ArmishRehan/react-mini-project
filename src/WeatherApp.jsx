import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { Typography, Box, Paper } from "@mui/material";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Karachi",
    feelsLike: 29.86,
    humidity: 82,
    temp: 26.97,
    tempMax: 26.97,
    tempMin: 26.97,
    weather: "overcast clouds",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  // Background gradient depending on weather
  const getBackground = () => {
    if (weatherInfo.humidity > 80)
      return "linear-gradient(135deg, #5fb2faff 0%, #5df4fcff 100%)";
    if (weatherInfo.temp > 20)
      return "linear-gradient(135deg, #ffac47ff, #ffdd46ff)";
    return "linear-gradient(135deg, #83a4d4, #abfbffff)";
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        borderRadius: 3,
        background: "#e0e0e0", // outside border
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 5,
          maxWidth: 500,
          width: "100%",
          background: getBackground(),
          color: "#fff",
          textAlign: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3, textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
        >
          🌤️ Weather App
        </Typography>

        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </Paper>
    </Box>
  );
}
