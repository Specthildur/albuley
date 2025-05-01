"use server";

export async function searchFunction(searchValue, type) {
    if (type === "params") {
        const response = await fetch(
            `https://api.deezer.com/search/album/${searchValue}`,
            {
                method: "GET",
            }
        );
        if (!response.ok) {
            const error = new Error("Error fetching search query");
            error.code = response.status;
            error.info = await response.json();
            throw error;
        }
        const data = await response.json();
        const results = await data.data;
        return results;
    }

    if (type === "album") {
        const response = await fetch(
            `https://api.deezer.com/search/album?q=${searchValue}`,
            {
                method: "GET",
            }
        );

        if (!response.ok) {
            const error = new Error("Error fetching search query");
            error.code = response.status;
            error.info = await response.json();
            throw error;
        }
        const data = await response.json();
        const results = await data.data;
        return results;
    }
}
