const API_URL = process.env.REACT_APP_API_URL;

export async function getWelcomeMessage() {
  const response = await fetch(`${API_URL}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch from backend");
  }
  return response.json();
}
