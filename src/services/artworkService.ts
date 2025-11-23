import type { Artwork, Search } from "../models/MetMuseumResponse";
import { get } from "./serviceBase";

// BASE URL for Met Museum
const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1/";

export const getArtworks = async (searchArtwork: string) => {
  const response = await get<Search>(
    `${BASE_URL}search?hasImages=true&q=${searchArtwork}`
  );

  return response.objectIDs;
};

export const getArtworkDetails = async (objectID: number) => {
  const response = await get<Artwork>(`${BASE_URL}objects/${objectID}`);

  return response.objectID;
};
