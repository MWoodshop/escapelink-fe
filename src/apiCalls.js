// src/apiCalls.js

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const BASE_URL = process.env.REACT_APP_API_URL;

export async function fetchGameLink(roomName) {
  const res = await fetch(
    `${BASE_URL}/api/v0/games?room_name=${encodeURIComponent(roomName)}`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': getCookie('X-CSRF-Token')
      }
    }
  );
  if (!res.ok) {
    throw new Error(`${res.status}: Unable to retrieve link`);
  }
  const data = await res.json();
  return data;
}

export async function fetchLeaderboard() {
  const res = await fetch(
    `${BASE_URL}/api/v0/leaderboards?room_id=1`
  );
  if (!res.ok) {
    throw new Error(`${res.status}: Unable to retrieve leaderboard`);
  }
  const data = await res.json();
  return data;
}
