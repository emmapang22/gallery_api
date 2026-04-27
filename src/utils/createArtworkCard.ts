import type { Artwork } from "../models/MetMuseumResponse";

export const createArtworkCard = (artworks: Artwork[]) => {
  const artSection = document.getElementById("artSection");

  if (artSection) {
    artSection.innerHTML = "";
  }

  artworks.forEach((artwork) => {
    const artContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const artist = document.createElement("p");
    const medium = document.createElement("p");

    artContainer.className =
      "artContainer rounded flex flex-col flex-1 bg-slate-800 gap-4 items-center border-[0.75rem] border-yellow-600 px-4 py-6";
    imgContainer.className =
      "imgContainer w-80 max-h-80 flex items-center justify-center";
    img.src = artwork.primaryImageSmall;
    img.alt = artwork.title;
    img.className = "w-auto h-full";
    title.innerHTML = artwork.title;
    title.className = "text-3xl font-bold";
    artist.innerHTML = "Artist: " + (artwork.artistDisplayName || "Unknown");
    medium.innerHTML = "Medium: " + (artwork.medium || "Unspecified");

    imgContainer.appendChild(img);
    artContainer.append(imgContainer, title, artist, medium);
    artSection?.appendChild(artContainer);
  });
};
