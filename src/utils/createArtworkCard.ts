import type { Artwork } from "../models/MetMuseumResponse";
import { showArtworkInfo } from "./showArtworkInfo";

export const createArtworkCard = (artworks: Artwork[]) => {
  const artSection = document.getElementById("artSection");

  if (artSection) {
    artSection.innerHTML = "";
  }

  artworks.forEach((artwork) => {
    const framedArt = document.createElement("div");

    const artContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const artInfo = document.createElement("div");
    const title = document.createElement("h2");
    const artist = document.createElement("p");
    const medium = document.createElement("p");

    framedArt.className =
      "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col gap-4";

    artContainer.className =
      "artContainer flex flex-col gap-4 bg-neutral-50 border-[0.75rem] border-yellow-600 px-4 py-6";
    imgContainer.className =
      "imgContainer w-full max-h-60 flex items-center justify-center hover:cursor-pointer";
    imgContainer.addEventListener("click", () => {
      showArtworkInfo(artwork);
      console.log(artwork);
    });

    img.src = artwork.primaryImageSmall;
    img.alt = artwork.title;
    img.className = "w-auto h-full";

    artInfo.className =
      "flex flex-col gap-2 bg-white border-neutral-500 border-2 text-black py-6 px-4";
    title.innerHTML = artwork.title;
    title.className =
      "text-xl font-bold hover:text-amber-700 hover:cursor-pointer";
    title.addEventListener("click", () => {
      showArtworkInfo(artwork);
    });
    artist.innerHTML =
      "<strong>Artist:</strong> " + (artwork.artistDisplayName || "Unknown");
    medium.innerHTML =
      "<strong>Medium:</strong> " + (artwork.medium || "Unspecified");

    imgContainer.appendChild(img);
    artInfo.append(title, artist, medium);
    artContainer.append(imgContainer);
    framedArt.append(artContainer, artInfo);
    artSection?.appendChild(framedArt);
  });
};
