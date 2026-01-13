
export function applyDarkMode() {
  const isDark = localStorage.getItem("darkMode") === "true";
  const classAction = isDark ? 'add' : 'remove';

  const elements = [
    "body",
    ".header",
    ".navbar",
    ".footer",
    ".content",
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "ul", "ol", "li",
    ".nav-link",
    ".styled-table",
    "input", "textarea", "select",
    "button", "input[type='submit']", "input[type='reset']",
    "#reservations-section",
    "#reservations-section li",
    "#messages-section",
    "#messages-section li"
  ];

  elements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList[classAction]("dark");
    });
  });

  const btn = document.getElementById("toggleDarkMode");
  if (btn) {
    btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
}

export function toggleDarkMode() {
  const current = localStorage.getItem("darkMode") === "true";
  const newState = !current;
  localStorage.setItem("darkMode", newState);
  applyDarkMode();
}

export function applyDarkModeOnLoad() {
  applyDarkMode();
}

