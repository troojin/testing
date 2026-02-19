document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("auth_token");

  if (!token) {
    window.location.href = "/login";
  } else {
    window.location.href = "/home";
  }
});
