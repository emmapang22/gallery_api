import type { Artwork } from "../models/MetMuseumResponse";

export const showArtworkInfo = async (artwork: Artwork) => {
  const app = document.getElementById("app");

  const overlayBackdrop = document.createElement("div");
  const overlayContainer = document.createElement("div");

  const closeBtn = document.createElement("button");
  const images = document.createElement("div");
  const imgContainer = document.createElement("div");
  const mainImg = document.createElement("img");
  const thumbnailsContainer = document.createElement("div");

  const infoSection = document.createElement("div");
  const title = document.createElement("h2");
  const date = document.createElement("p");
  const artist = document.createElement("p");
  const period = document.createElement("p");
  const category = document.createElement("p");
  const medium = document.createElement("p");
  const dimensions = document.createElement("p");

  overlayBackdrop.className =
    "overlayBackdrop fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4";
  overlayBackdrop.onclick = (e) => {
    if (e.target === overlayBackdrop) overlayBackdrop.remove();
  };
  overlayContainer.className =
    "overlayContainer flex flex-col md:flex-row gap-8 justify-center z-50 bg-white p-12 w-[90vw] md:w-[70vw] max-h-[80vh] text-black relative overflow-y-auto";

  closeBtn.innerHTML = "✕";
  closeBtn.className =
    "closeBtn absolute top-4 right-4 text-2xl hover:text-gray-600 hover:cursor-pointer";
  closeBtn.onclick = () => overlayBackdrop.remove();

  images.className = "images w-full md:w-1/2 flex flex-col gap-4";
  imgContainer.className =
    "imgContainer w-auto h-96 max-h-96 flex items-center justify-center md:justify-between";
  mainImg.src = artwork.primaryImage;
  mainImg.alt = artwork.title;
  mainImg.className = "mainImg w-full h-full object-contain";
  thumbnailsContainer.className = "flex gap-2 mt-4 overflow-x-auto pb-2";

  const allImages = [artwork.primaryImage, ...(artwork.additionalImages || [])];

  allImages.forEach((imageUrl, i) => {
    const thumbnail = document.createElement("div");
    const thumbImg = document.createElement("img");

    thumbnail.className =
      "cursor-pointer border-2 border-transparent hover:border-blue-500 rounded-lg overflow-hidden flex-shrink-0 w-20 h-20";
    thumbImg.src = imageUrl;
    thumbImg.alt = `${artwork.title} thumbnail image ${i + 1}`;
    thumbImg.className = "w-full h-full object-cover";

    thumbnail.addEventListener("click", () => {
      mainImg.src = imageUrl;

      const allThumbnails = thumbnailsContainer.querySelectorAll(".thumbnail");
      allThumbnails.forEach((t) => {
        t.classList.remove("border-blue-500");
        t.classList.add("border-transparent");
      });

      thumbnail.classList.remove("border-transparent");
      thumbnail.classList.add("border-blue-500");
    });

    thumbnail.classList.add("thumbnail");

    thumbnail.appendChild(thumbImg);
    thumbnailsContainer.appendChild(thumbnail);
  });

  infoSection.className = "flex flex-col w-full md:w-1/2";
  title.innerHTML = artwork.title;
  title.className = "text-2xl font-bold mb-1";
  date.innerHTML =
    `<strong>Date:</strong> ` + (artwork.objectDate || "Unknown");

  if (artwork.artistDisplayBio) {
    artist.innerHTML =
      "<strong>Artist:</strong> " +
      (artwork.artistDisplayName || "Unknown") +
      ` (${artwork.artistDisplayBio})`;
  } else {
    artist.innerHTML =
      "<strong>Artist:</strong> " + (artwork.artistDisplayName || "Unknown");
  }

  period.innerHTML =
    `<strong>Period:</strong> ` + (artwork.period || "Unknown");
  category.innerHTML =
    `<strong>Category:</strong> ` + (artwork.objectName || "Unspecified");
  medium.innerHTML =
    "<strong>Medium:</strong> " + (artwork.medium || "Unspecified");
  dimensions.innerHTML =
    `<strong>Dimensions:</strong> ` + (artwork.dimensions || "Unspecified");

  infoSection.append(title, date, artist, period, category, medium, dimensions);
  imgContainer.appendChild(mainImg);
  images.append(imgContainer, thumbnailsContainer);
  overlayContainer.append(closeBtn, images, infoSection);
  overlayBackdrop.appendChild(overlayContainer);
  app?.appendChild(overlayBackdrop);
};
