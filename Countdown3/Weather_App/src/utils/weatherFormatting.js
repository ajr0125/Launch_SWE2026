export const formatTemp = (temp) => `${Math.round(temp)}°F`;

export const getCityDate = (timestamp, timezoneOffset = 0) => {
    return new Date((timestamp + timezoneOffset) * 1000);
};

export const getCityDayKey = (timestamp, timezoneOffset = 0) => {
    return getCityDate(timestamp, timezoneOffset).toISOString().slice(0, 10);
};

export const formatCityTime = (timestamp, timezoneOffset = 0) => {
    return getCityDate(timestamp, timezoneOffset).toLocaleTimeString([], {
        hour: "numeric",
        timeZone: "UTC"
    });
};

export const formatCityDate = (timestamp, timezoneOffset = 0, options = {}) => {
    return getCityDate(timestamp, timezoneOffset).toLocaleDateString([], {
        weekday: "short",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
        ...options
    });
};

export const buildDailyForecast = (forecastData) => {
    const timezoneOffset = forecastData.city?.timezone || 0;
    const groupedByDay = forecastData.list.reduce((days, forecast) => {
        const dayKey = getCityDayKey(forecast.dt, timezoneOffset);
        days[dayKey] = [...(days[dayKey] || []), forecast];
        return days;
    }, {});

    return Object.values(groupedByDay).map((forecasts) => {
        const temps = forecasts.map((forecast) => forecast.main.temp);
        const middayForecast = forecasts.find((forecast) => {
            const hour = getCityDate(forecast.dt, timezoneOffset).getUTCHours();
            return hour >= 11 && hour <= 15;
        }) || forecasts[Math.floor(forecasts.length / 2)];

        return {
            dt: middayForecast.dt,
            weather: middayForecast.weather,
            high: Math.max(...temps),
            low: Math.min(...temps)
        };
    });
};

export const getIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;
