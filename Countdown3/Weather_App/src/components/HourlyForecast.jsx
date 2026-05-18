import { Box, Card, CardContent, Typography } from "@mui/material";
import { formatCityTime, formatTemp, getIconUrl } from "../utils/weatherFormatting";

const HourlyForecast = ({ forecasts, timezoneOffset }) => {
    return (
        <Box component="section">
            <Typography variant="h5" component="h2" className="sectionTitle">
                Next 24 Hours
            </Typography>
            <Box className="forecastRail">
                {forecasts.map((forecast) => {
                    const condition = forecast.weather?.[0];

                    return (
                        <Card className="forecastCard" elevation={0} key={forecast.dt}>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {formatCityTime(forecast.dt, timezoneOffset)}
                                </Typography>
                                {condition?.icon && (
                                    <img
                                        className="forecastIcon"
                                        src={getIconUrl(condition.icon)}
                                        alt={condition.description}
                                    />
                                )}
                                <Typography variant="h6">{formatTemp(forecast.main.temp)}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {condition?.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>
        </Box>
    );
};

export default HourlyForecast;
