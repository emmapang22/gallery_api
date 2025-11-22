import type { MetMuseumResponse } from "../models/MetMuseumResponse";
import { get } from "./serviceBase";

// BASE URL for Met Museum
const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1/";

export const getArtworks = async (searchText: string) => {
  const response = await get<MetMuseumResponse>(
    `${BASE_URL}search?q=${searchText}`
  );

  return response.objectIDs;
};
