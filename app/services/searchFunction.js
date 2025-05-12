"use server";
import accessToken from "./accessToken";

export async function searchFunction(searchValue, param) {
  //   const token = await accessToken();
  //   const body = await token.json();
  //   localStorage.setItem("access_token", body);
  //   console.log(body);
  let url;
  if (param === "album" && searchValue !== "all") {
    url = `https://api.deezer.com/search/album?q=${searchValue}`;
  } else if (
    (searchValue === "all" || searchValue === undefined) &&
    param === "album"
  ) {
    url = "https://api.deezer.com/chart/0/albums";
  } else if (param === "params") {
    url = `https://api.deezer.com/search/album/${searchValue}`;
  }

  const response = await fetch(url);

  if (response.ok === 500 || !response.ok) {
    throw new Error("Network error, please try again later " + response.json());
  }
  const data = await response.json();
  const results = await data.data;
  return results;
}
