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

    title.innerHTML = artwork.title;
    img.src = artwork.primaryImage;
    img.alt = artwork.title;
    imgContainer.className = "imgContainer";
    artist.innerHTML = "Created by: " + artwork.artistDisplayName;

    artSection?.appendChild(artContainer);
    artContainer.appendChild(title);
    artContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    artContainer.appendChild(artist);
  });
};

export const showError = (message: string) => {
  const artSection = document.getElementById("artSection");

  if (artSection) {
    artSection.innerHTML = "";
  }

  const errorText = document.createElement("p");

  errorText.innerHTML = message;

  artSection?.appendChild(errorText);
};
