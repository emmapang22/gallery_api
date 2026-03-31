import { showError } from "./utils/createErrorMsg";
import { getArtworks } from "./services/artworkService";
import "./style.css";
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
    showError("Artworks not found");
    return;
  }

  createArtworkCard(artworks);

  if (input) {
    (input as HTMLInputElement).value = "";
  }
});
