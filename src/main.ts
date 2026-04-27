import "./style.css";
import { showError } from "./utils/createErrorMsg";
import { getArtworks } from "./services/artworkService";
import { createArtworkCard } from "./utils/createArtworkCard";

document.getElementById("form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = document.getElementById("searchArtwork");

  let searchArtwork = "";

  if (input) {
    searchArtwork = (input as HTMLInputElement).value.trim();
  }

  const artworks = await getArtworks(searchArtwork);

  if (!artworks) {
    return showError("Artworks not found");
  }

  createArtworkCard(artworks);

  if (input) {
    (input as HTMLInputElement).value = "";
  }
});
