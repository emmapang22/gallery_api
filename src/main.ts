import "./style.css";
import { showError } from "./utils/createErrorMsg";
import { getArtworks } from "./services/artworkService";
import { createArtworkCard } from "./utils/createArtworkCard";

const input = document.getElementById("searchArtwork") as HTMLInputElement;
const artSection = document.getElementById("artSection");

document.getElementById("form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!input.value) {
    showError("Please enter a search term");
    return;
  }

  try {
    if (artSection) {
      artSection.innerHTML = "";
      artSection.innerHTML =
        '<p class="text-center text-black col-span-12">Loading...</p>';
    }

    const artworks = await getArtworks(input.value.trim());

    createArtworkCard(artworks);

    input.value = "";
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch artworks";
    showError(message);
  }
});
