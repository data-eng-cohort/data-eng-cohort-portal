async function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Attempting login for:", email);

  try {
    const response = await fetch("data.json");
    const data = await response.json();

    const user = data.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      console.log("✅ Login successful!");
      localStorage.setItem("user_id", user.user_id);
      localStorage.setItem("user_name", user.name);
      window.location.href = "portal.html";
    } else {
      alert("❌ Invalid credentials!");
    }
  } catch (err) {
    console.error("⚠️ Error loading data.json:", err);
  }
}
