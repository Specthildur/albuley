"use server";

// Switch to TheAudioDB
export async function searchFunction(searchName, type) {
  if (!searchName) {
    return;
  }

  if (type === "album") {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchName}&limit=50&api_key=${process.env.LASTFM_KEY}&format=json`,
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
}
