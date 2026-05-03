import type { Artwork, Search } from "../models/MetMuseumResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1/";
const MAX_ARTWORKS = 50;

export const getArtworks = async (searchTerm: string): Promise<Artwork[]> => {
  if (!searchTerm.trim()) {
    throw new Error("Search term cannot be empty");
  }

  const response = await get<Search>(
    `${BASE_URL}search?hasImages=true&q=${encodeURIComponent(searchTerm)}`,
  );

  if (!response.objectIDs || response.objectIDs.length === 0) {
    throw new Error("No artworks found for the search term");
  }

  const limitedObjectIDs = response.objectIDs.slice(0, MAX_ARTWORKS);

  const artworkPromises = limitedObjectIDs.map((id) =>
    get<Artwork>(`${BASE_URL}objects/${id}`),
  );

  const results = await Promise.all(artworkPromises);

  const artworks: Artwork[] = [];

  for (const artwork of results) {
    if (artwork && artwork.primaryImageSmall) {
      artworks.push(artwork);
    }
  }

  if (artworks.length === 0) {
    throw new Error("No artworks with images found");
  }

  return artworks;
};
