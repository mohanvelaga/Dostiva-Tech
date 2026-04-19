const BASE_URL = import.meta.env.VITE_API_URL

export const sendContact = async (data) => {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON response");
  }
};