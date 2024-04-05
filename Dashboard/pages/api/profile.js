
export async function fetchProfile(token) {
    const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL+`/auth/get-info`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });
    if (res.ok) {
      const json = await res.json();
      return json;
    } else {
      throw new Error("Failed to fetch user profile");
    }
  }
  