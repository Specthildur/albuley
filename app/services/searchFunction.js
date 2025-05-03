"use server";

// export async function searchFunction(searchValue, type) {
//   if (type === "params") {
//     const response = await fetch(
//       `https://api.deezer.com/search/album/${searchValue}`,
//       {
//         method: "GET",
//       }
//     );
//     if (!response.ok) {
//       const error = new Error("Error fetching search query");
//       error.code = response.status;
//       error.info = await response.json();
//       throw error;
//     }
//     const data = await response.json();
//     const results = await data.data;
//     return results;
//   } else if (searchValue === "all" || !searchValue) {
//     const response = await fetch("https://api.deezer.com/chart/0/albums", {
//       method: "GET",
//     });
//     if (!response.ok) {
//       const error = new Error("Error fetching search query");
//       error.code = response.status;
//       error.info = await response.json();
//       throw error;
//     }
//     const data = await response.json();
//     const results = await data.data;
//     return results;
//   } else if (type === "album") {
//     const response = await fetch(
//       `https://api.deezer.com/search/album?q=${searchValue}`,
//       {
//         method: "GET",
//       }
//     );

//     if (!response.ok) {
//       const error = new Error("Error fetching search query");
//       error.code = response.status;
//       error.info = await response.json();
//       throw error;
//     }
//     const data = await response.json();
//     const results = await data.data;
//     return results;
//   }
// }

// export async function searchFunction(searchValue, param) {
//   if (param === "album" && searchValue !== "all") {
//     const response = await fetch(
//       `https://api.deezer.com/search/albu?q=${searchValue}`
//     );
//     if (!response.ok) {
//       return Promise.reject(
//         "Network error, please try again later. Network error: " +
//           response.json()
//       );
//     }
//     const data = await response.json();
//     const results = await data.data;
//     return results;
//   } else if (
//     (searchValue === "all" || searchValue === undefined) &&
//     param === "album"
//   ) {
//     const response = await fetch("https://api.deezer.com/chart/0/albums");
//     if (!response.ok) {
//       throw new Error(
//         "Network error, please try again later. Network error: " +
//           response.json()
//       );
//     }
//     const data = await response.json();
//     const results = await data.data;
//     return results;
//   } else if (param === "params") {
//     const response = await fetch(
//       `https://api.deezer.com/search/album/${searchValue}`
//     );
//     if (!response.ok) {
//       throw new Error(
//         "Network error, please try again later. Network error: " +
//           response.json()
//       );
//     }
//     const data = await response.json();
//     const results = await data.data;
//     return results;
//   }
// }

export async function searchFunction(searchValue, param) {
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
  console.log(response);
  if (response.ok === 500 || !response.ok) {
    console.log(response);
    throw new Error("Network error, please try again later " + response.json());
  }
  const data = await response.json();
  const results = await data.data;
  return results;
}
