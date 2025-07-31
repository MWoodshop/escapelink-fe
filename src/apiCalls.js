const API_URL = process.env.REACT_APP_API_URL;

export async function fetchGameLink(roomName) {
  const res = await fetch(`${API_URL}/api/v0/games?room_name=${roomName}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': getCookie('X-CSRF-Token'),
    },
  });

  if (!res.ok) {
    throw new Error(`${res.status}: Unable to retrieve game link`);
  }

  const data = await res.json();
  return data;
}

export async function fetchLeaderboard() {
  const res = await fetch(`${API_URL}/api/v0/leaderboard`, {
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error(`${res.status}: Unable to retrieve leaderboard`);
  }

  const data = await res.json();
  return data;
}
