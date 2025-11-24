import type { Artwork } from "./models/MetMuseumResponse";

export const createHtml = (artworks: Artwork[]) => {
  const artSection = document.getElementById("artSection");

  if (artSection) {
    artSection.innerHTML = "";
  }

  artworks.forEach((artwork) => {
    const artContainer = document.createElement("div");
    const title = document.createElement("h2");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const artist = document.createElement("p");
    const medium = document.createElement("p");

    artContainer.className = "artContainer rounded";
    title.innerHTML = artwork.title;
    title.className = "text-3xl";
    img.src = artwork.primaryImageSmall;
    img.alt = artwork.title;
    imgContainer.className = "imgContainer";
    artist.innerHTML = "Artist: " + (artwork.artistDisplayName || "Unknown");
    medium.innerHTML = "Medium: " + (artwork.medium || "Unspecified");

    artSection?.appendChild(artContainer);
    artContainer.appendChild(title);
    artContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    artContainer.appendChild(artist);
    artContainer.appendChild(medium);
  });
};

export const showError = (message: string) => {
  const artSection = document.getElementById("artSection");

  if (artSection) {
    artSection.innerHTML = "";
  }

  const errorText = document.createElement("p");

  errorText.className = "text-red-500 text-center mt-4 text-lg";
  errorText.innerHTML = message;

  artSection?.appendChild(errorText);
};
