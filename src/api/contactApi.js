const BASE_URL = 'https://dostivatechbackend-1.onrender.com'

export const sendContact = async (data) => {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const text = await res.text();

  let parsed = {};
  try {
    parsed = text ? JSON.parse(text) : {};
  } catch {
    parsed = {};
  }

  return {
    ok: res.ok,
    status: res.status,
    data: parsed,
  };
};