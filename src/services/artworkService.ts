import type { Artwork, Search } from "../models/MetMuseumResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1/";

export const getArtworks = async (searchTerm: string) => {
  const response = await get<Search>(
    `${BASE_URL}search?hasImages=true&q=${encodeURIComponent(searchTerm)}`,
  );

  if (!response.objectIDs) {
    return null;
  }

  // limit the artworks to the first 12 ones
  const limitedObjectIDs = response.objectIDs.slice(0, 12);

  const artworks: Artwork[] = [];

  for (const id of limitedObjectIDs) {
    const artwork = await get<Artwork>(`${BASE_URL}objects/${id}`);

    if (artwork.primaryImageSmall) {
      artworks.push(artwork);
    }
  }

  if (!artworks) {
    return null;
  }

  return artworks;
};
