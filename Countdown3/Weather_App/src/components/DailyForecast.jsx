import { Box, Card, CardContent, Divider, Grid, Stack, Typography } from "@mui/material";
import { formatCityDate, formatTemp, getIconUrl } from "../utils/weatherFormatting";

const DailyForecast = ({ forecasts, timezoneOffset }) => {
    return (
        <Box component="section">
            <Typography variant="h5" component="h2" className="sectionTitle">
                5 Day Forecast
            </Typography>
            <Grid container spacing={2}>
                {forecasts.map((forecast) => {
                    const condition = forecast.weather?.[0];

                    return (
                        <Grid item xs={12} sm={6} md={4} lg key={forecast.dt}>
                            <Card className="dailyCard" elevation={0}>
                                <CardContent>
                                    <Typography variant="subtitle2">
                                        {formatCityDate(forecast.dt, timezoneOffset)}
                                    </Typography>
                                    {condition?.icon && (
                                        <img
                                            className="forecastIcon"
                                            src={getIconUrl(condition.icon)}
                                            alt={condition.description}
                                        />
                                    )}
                                    <Typography variant="body2" color="text.secondary">
                                        {condition?.description}
                                    </Typography>
                                    <Divider className="cardDivider" />
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography variant="body2">High {formatTemp(forecast.high)}</Typography>
                                        <Typography variant="body2">Low {formatTemp(forecast.low)}</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default DailyForecast;
