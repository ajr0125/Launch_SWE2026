import { fetchJson } from "./apiClient";

const NYTIMES_API_KEY = import.meta.env.VITE_NYTIMES_API_KEY?.trim();

export const hasNytimesApiKey = Boolean(NYTIMES_API_KEY);

export const fetchMostPopularNews = async () => {
    const url = new URL("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json");
    url.searchParams.set("api-key", NYTIMES_API_KEY);

    const data = await fetchJson(url.toString(), "Unable to fetch news data.");
    return data.results || [];
};
