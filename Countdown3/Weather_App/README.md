# Weather App

## Setup

1. Create a free OpenWeather account at https://openweathermap.org/.
2. Open your account dashboard and copy a key from the API keys tab.
3. Add the key to `.env`:

```bash
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

The NYTimes API key is optional. If you have one, add it too:

```bash
VITE_NYTIMES_API_KEY=your_nytimes_api_key_here
```

Then start the app:

```bash
npm run dev
```

OpenWeather keys can take a little time to activate after they are created. If a brand-new key returns an invalid-key error, wait a bit and try again.
