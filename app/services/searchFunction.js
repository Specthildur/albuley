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
  } else if (searchValue === "all" || !searchValue) {
    const response = await fetch("https://api.deezer.com/chart/0/albums", {
      method: "GET",
    });
    if (!response.ok) {
      const error = new Error("Error fetching search query");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    const data = await response.json();
    const results = await data.data;
    return results;
  } else if (type === "album") {
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

// export async function searchFunction(searchValue, param) {
//   try {
//     if (param === "album" && searchValue !== "all") {
//       const response = await fetch(
//         `https://api.deezer.com/search/album?q=${searchValue}`
//       );
//       const data = await response.json();
//       if (!data) throw new Error("No response found");
//       const results = await data.data;
//       return results;
//     } else if (
//       (searchValue === "all" || searchValue === undefined) &&
//       param === "album"
//     ) {
//       const response = await fetch("https://api.deezer.com/chart/0/albums");
//       const data = await response.json();
//       if (!data) throw new Error("No response found");
//       const results = await data.data;
//       return results;
//     } else if (param === "params") {
//       const response = await fetch(
//         `https://api.deezer.com/search/album/${searchValue}`
//       );
//       const data = await response.json();
//       if (!data) throw new Error("No response found");
//       const results = await data.data;
//       return results;
//     }
//   } catch (error) {
//     const data = error.data;
//     return data;
//   }
// }
