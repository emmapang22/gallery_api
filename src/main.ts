import { createHtml, showError } from "./htmlUtils";
import { getArtworks } from "./services/artworkService";
import "./style.css";

// finds the form and add submit event
document.getElementById("form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  // finds the search field and assigns it to variable input
  const input = document.getElementById("searchArtwork");

  // empty the search field
  let searchArtwork = "";

  // if input exists, make the value of searchArtwork the value of the user's input
  if (input) {
    searchArtwork = (input as HTMLInputElement).value.trim();
  }

  const artworks = await getArtworks(searchArtwork);
  if (!artworks) {
    showError("Artworks not found");
    return;
  }

  // create html for artworks
  createHtml(artworks);

  if (input) {
    (input as HTMLInputElement).value = "";
  }
});
