import { useEffect, useMemo, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import CurrentWeatherPanel from "./CurrentWeatherPanel";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import NewsSection from "./NewsSection";
import SearchPanel from "./SearchPanel";
import { fetchMostPopularNews, hasNytimesApiKey } from "../services/newsApi";
import { fetchLocation, fetchWeatherBundle, hasOpenWeatherApiKey } from "../services/weatherApi";
import { buildDailyForecast } from "../utils/weatherFormatting";
import "../App.css";

const WeatherApp = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const timezoneOffset = weather?.forecast?.city?.timezone || 0;
    const nextForecasts = useMemo(() => {
        return weather?.forecast?.list?.slice(0, 8) || [];
    }, [weather]);

    const dailyForecasts = useMemo(() => {
        return weather?.forecast ? buildDailyForecast(weather.forecast).slice(0, 5) : [];
    }, [weather]);

    useEffect(() => {
        const loadNews = async () => {
            if (!hasNytimesApiKey) {
                setNews([]);
                return;
            }

            try {
                setNews(await fetchMostPopularNews());
            } catch (error) {
                console.error("Error fetching news data:", error);
                setNews([]);
            }
        };

        loadNews();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedLocation = location.trim();

        if (!trimmedLocation) {
            setError("Please enter a city.");
            setWeather(null);
            return;
        }

        if (!hasOpenWeatherApiKey) {
            setError("Missing OpenWeather API key. Add VITE_OPENWEATHER_API_KEY to your .env file.");
            setWeather(null);
            return;
        }

        setIsLoading(true);

        try {
            const geocodingData = await fetchLocation(trimmedLocation);

            if (geocodingData.length === 0) {
                setError("Please enter a valid city.");
                setWeather(null);
                return;
            }

            const { lat, lon, name, state, country } = geocodingData[0];
            const placeName = [name, state, country].filter(Boolean).join(", ");
            const weatherData = await fetchWeatherBundle(lat, lon);

            setWeather({
                placeName,
                ...weatherData
            });
            setError("");
        } catch (error) {
            setError(`Weather lookup failed: ${error.message}`);
            setWeather(null);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box className="appShell">
            <Container maxWidth="lg">
                <SearchPanel
                    error={error}
                    isLoading={isLoading}
                    location={location}
                    onLocationChange={setLocation}
                    onSubmit={handleSubmit}
                />

                {weather && !error && (
                    <Stack spacing={4} className="results">
                        <CurrentWeatherPanel weather={weather} />
                        <HourlyForecast forecasts={nextForecasts} timezoneOffset={timezoneOffset} />
                        <DailyForecast forecasts={dailyForecasts} timezoneOffset={timezoneOffset} />
                        <NewsSection articles={news} />
                    </Stack>
                )}
            </Container>
        </Box>
    );
};

export default WeatherApp;
