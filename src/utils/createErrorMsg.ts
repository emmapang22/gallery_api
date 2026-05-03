export const showError = (message: string) => {
  const artSection = document.getElementById("artSection");

  if (artSection) {
    artSection.innerHTML = "";
  }

  const errorText = document.createElement("p");

  errorText.className =
    "text-red-500 text-center font-medium mt-4 text-lg col-span-12";
  errorText.textContent = message;

  artSection?.appendChild(errorText);
};
