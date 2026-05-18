export const fetchJson = async (url, fallbackMessage) => {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data?.message || fallbackMessage);
    }

    return data;
};
