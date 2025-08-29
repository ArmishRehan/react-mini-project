import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";

export default function InfoBox({ info }) {
  const rain_image =
    "https://images.unsplash.com/photo-1428592953211-077101b2021b";
  const hot_image =
    "https://images.unsplash.com/photo-1561473880-3b8b12de0a71";
  const cold_image =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0";

  const getWeatherIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon color="primary" />;
    if (info.temp > 20) return <SunnyIcon sx={{ color: "#fbc02d" }} />;
    return <AcUnitIcon color="info" />;
  };

  return (
    <Card sx={{ maxWidth: 450, borderRadius: 3, mt: 3, mx: "auto" }} elevation={4}>
      <CardMedia
        component="img"
        alt="Weather Image"
        height="180"
        image={
          info.humidity > 80 ? rain_image : info.temp > 20 ? hot_image : cold_image
        }
      />
      <CardContent>
        {/* City + Weather Icon */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          {info.city} {getWeatherIcon()}
        </Typography>

        {/* Line 1: Temp + Max / Min */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <DeviceThermostatIcon />
          <Typography variant="body1">
            Temp: {info.temp}°C &nbsp; | &nbsp; Max: {info.tempMax}°C / Min: {info.tempMin}°C
          </Typography>
        </Box>

        {/* Line 2: Humidity */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <OpacityIcon />
          <Typography variant="body1">Humidity: {info.humidity}%</Typography>
        </Box>

        {/* Line 3: Feels Like */}
        <Typography variant="body1" gutterBottom>
          Feels Like: {info.feelsLike}°C
        </Typography>

        {/* Line 4: Weather Description */}
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
          Weather: {info.weather}
        </Typography>
      </CardContent>
    </Card>
  );
}
