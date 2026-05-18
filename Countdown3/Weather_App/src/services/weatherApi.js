import { fetchJson } from "./apiClient";

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY?.trim();

const openWeatherUrl = (path, params) => {
    const url = new URL(`https://api.openweathermap.org${path}`);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    url.searchParams.set("appid", OPENWEATHER_API_KEY);
    return url.toString();
};

export const hasOpenWeatherApiKey = Boolean(OPENWEATHER_API_KEY);

export const fetchLocation = async (location) => {
    return fetchJson(
        openWeatherUrl("/geo/1.0/direct", {
            q: location,
            limit: "1"
        }),
        "Unable to find that city."
    );
};

export const fetchWeatherBundle = async (lat, lon) => {
    const [currentData, forecastData] = await Promise.all([
        fetchJson(
            openWeatherUrl("/data/2.5/weather", {
                lat,
                lon,
                units: "imperial"
            }),
            "Unable to fetch current weather."
        ),
        fetchJson(
            openWeatherUrl("/data/2.5/forecast", {
                lat,
                lon,
                units: "imperial"
            }),
            "Unable to fetch forecast data."
        )
    ]);

    return {
        current: currentData,
        forecast: forecastData
    };
};
