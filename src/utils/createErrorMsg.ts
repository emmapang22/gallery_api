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
