const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID"; // Replace this with your Google OAuth Client ID

const sessions = [
  {
    title: "CDC in PySpark",
    date: "2025-10-07",
    video_url: "https://drive.google.com/file/d/abc123/view",
    notes_url: "https://drive.google.com/file/d/notes_cdc/view",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PySpark-logo.svg/512px-PySpark-logo.svg.png"
  },
  {
    title: "Delta Live Tables Basics",
    date: "2025-10-08",
    video_url: "https://drive.google.com/file/d/xyz456/view",
    notes_url: "https://drive.google.com/file/d/notes_dlt/view",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Databricks_Logo.png/512px-Databricks_Logo.png"
  }
];

function handleCredentialResponse(response) {
  const data = parseJwt(response.credential);
  console.log("✅ Logged in as:", data);
  localStorage.setItem("user", JSON.stringify(data));
  showDashboard(data);
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
    '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  ).join(''));
  return JSON.parse(jsonPayload);
}

function showDashboard(user) {
  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("dashboard-section").classList.remove("hidden");
  document.getElementById("welcome").innerText = `👋 Welcome, ${user.name}`;
  document.getElementById("email").innerText = user.email;

  const grid = document.getElementById("sessionGrid");
  grid.innerHTML = "";
  sessions.forEach(s => {
    const card = document.createElement("div");
    card.className = "session-card";
    card.innerHTML = `
      <img src="${s.thumbnail}" alt="${s.title}" class="session-thumb">
      <h3>${s.title}</h3>
      <p><strong>Date:</strong> ${new Date(s.date).toLocaleDateString()}</p>
      <a href="${s.video_url}" target="_blank">🎥 Watch Video</a>
      <a href="${s.notes_url}" target="_blank" style="margin-left:10px;">📄 Notes</a>
    `;
    grid.appendChild(card);
  });
}

window.onload = () => {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    showDashboard(JSON.parse(savedUser));
  }
};

function signOut() {
  localStorage.removeItem("user");
  document.getElementById("dashboard-section").classList.add("hidden");
  document.getElementById("login-section").classList.remove("hidden");
}
