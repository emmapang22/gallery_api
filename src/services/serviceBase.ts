import { showError } from "../utils/createErrorMsg";

export const get = async <T>(url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      showError("No artworks found");

      throw new Error(
        `Fetch failed: ${response.status} ${response.statusText}`,
      );
    }
    const data: T = await response.json();

    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Network request failed";

    throw new Error(message);
  }
};
