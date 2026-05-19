import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { formatCityDate, formatTemp, getIconUrl } from "../utils/weatherFormatting";

const CurrentWeatherPanel = ({ weather }) => {
    const condition = weather.current.weather?.[0];

    return (
        <Paper className="currentPanel" elevation={0}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={3} justifyContent="space-between">
                <Box>
                    <Typography variant="overline" color="text.secondary">
                        {formatCityDate(weather.current.dt, weather.current.timezone, {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                        })}
                    </Typography>
                    <Typography variant="h4" component="h2">
                        {weather.placeName || weather.current.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className="conditionText">
                        {condition?.description}
                    </Typography>
                </Box>

                <Stack direction="row" alignItems="center" spacing={2}>
                    {condition?.icon && (
                        <img
                            className="currentIcon"
                            src={getIconUrl(condition.icon)}
                            alt={condition.description}
                        />
                    )}
                    <Box>
                        <Typography variant="h2" className="currentTemp">
                            {formatTemp(weather.current.main.temp)}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            <Chip label={`Feels ${formatTemp(weather.current.main.feels_like)}`} />
                            <Chip label={`${weather.current.main.humidity}% humidity`} />
                            <Chip label={`${Math.round(weather.current.wind.speed)} mph wind`} />
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default CurrentWeatherPanel;
