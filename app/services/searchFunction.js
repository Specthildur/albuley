"use server";
import accessToken from "./accessToken";

export async function searchFunction(searchValue, param) {
  // Validate user input to prevent SSRF (disallow suspicious characters)
  function isSafeSearchValue(value) {
    // Only allow alphanumerics, spaces, hyphens, and underscores.
    // You may relax this depending on expected values!
    return typeof value === "string" && /^[\w\s-]+$/.test(value);
  }

  let url;
  if (param === "album" && searchValue !== "all") {
    if (!isSafeSearchValue(searchValue)) {
      throw new Error("Invalid search value.");
    }
    url = `https://api.deezer.com/search/album?q=${encodeURIComponent(searchValue)}`;
  } else if (
    (searchValue === "all" || searchValue === undefined) &&
    param === "album"
  ) {
    url = "https://api.deezer.com/chart/0/albums";
  } else if (param === "params") {
    if (!isSafeSearchValue(searchValue)) {
      throw new Error("Invalid search value.");
    }
    // encodeURIComponent in case album id/names can be non-url-safe
    url = `https://api.deezer.com/search/album/${encodeURIComponent(searchValue)}`;
  }

  const response = await fetch(url);

  if (response.ok === 500 || !response.ok) {
    throw new Error("Network error, please try again later " + response.json());
  }
  const data = await response.json();
  const results = await data.data;
  return results;
}
