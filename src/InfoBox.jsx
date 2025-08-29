import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
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
    if (info.humidity > 80) return <ThunderstormIcon sx={{ fontSize: 32, color: "#0288d1" }} />;
    if (info.temp > 20) return <WbSunnyIcon sx={{ fontSize: 32, color: "#fbc02d" }} />;
    return <AcUnitIcon sx={{ fontSize: 32, color: "#4fc3f7" }} />;
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        mt: 4,
        width: "100%",
        maxWidth: 600, // bigger card for desktop
        mx: "auto",
        backgroundColor: "white", // clean white card
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)", // soft shadow
      }}
      elevation={0} // remove grey elevation background
    >
      <CardMedia
        component="img"
        alt="Weather Image"
        sx={{
          height: { xs: 160, sm: 220 }, // bigger on desktop
          objectFit: "cover",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
        image={
          info.humidity > 80
            ? rain_image
            : info.temp > 20
            ? hot_image
            : cold_image
        }
      />

      <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
        {/* City + Icon */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.4rem", sm: "1.8rem" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {info.city} {getWeatherIcon()}
        </Typography>

        {/* Line 1: Temp + Max / Min */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <DeviceThermostatIcon color="error" />
          <Typography variant="body1" sx={{ fontSize: { xs: "0.95rem", sm: "1.1rem" } }}>
            {info.temp}°C &nbsp; | Max: {info.tempMax}°C / Min: {info.tempMin}°C
          </Typography>
        </Box>

        {/* Line 2: Humidity */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <OpacityIcon color="primary" />
          <Typography variant="body1" sx={{ fontSize: { xs: "0.95rem", sm: "1.1rem" } }}>
            Humidity: {info.humidity}%
          </Typography>
        </Box>

        {/* Line 3: Feels Like */}
        <Typography
          variant="body1"
          gutterBottom
          sx={{ fontSize: { xs: "0.95rem", sm: "1.1rem" } }}
        >
          Feels Like: {info.feelsLike}°C
        </Typography>

        {/* Line 4: Weather Description */}
        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            mt: 1,
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
        >
          {info.weather}
        </Typography>
      </CardContent>
    </Card>
  );
}
