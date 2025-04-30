"use server";

export async function searchAlbum(albumName) {
    if (!albumName) {
        return;
    }

    const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${albumName}&limit=50&api_key=${process.env.LASTFM_KEY}&format=json`,
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
    const results = await data.results.albummatches;
    return results;
}
