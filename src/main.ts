import { createHtml } from "./htmlUtils";
import { getArtworks } from "./services/artworkService";
import "./style.css";

document.getElementById("form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = document.getElementById("searchArtwork");

  let searchArtwork = "";

  if (input) {
    searchArtwork = (input as HTMLInputElement).value;
  }

  const artworks = await getArtworks(searchArtwork);

  createHtml(artworks);

  if (input) {
    (input as HTMLInputElement).value = "";
  }
});
