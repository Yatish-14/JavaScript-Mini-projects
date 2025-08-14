const counter = document.querySelector('#counter');
const incrementBtn = document.querySelector('#incrementBtn');
const decrementBtn = document.querySelector('#decrementBtn');
const resetBtn = document.querySelector('#resetBtn');

let count = 0;

function updateCounter() {
  counter.textContent = count;
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

// THEME TOGGLE LOGIC

const root = document.documentElement; // <html>
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  root.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
  // Update button icon and label
  const isDark = theme === 'dark';
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// 1) Start with saved theme or system preference
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
setTheme(savedTheme);

// 2) Toggle on click
themeToggle.addEventListener('click', () => {
  const next = root.classList.contains('dark') ? 'light' : 'dark';
  setTheme(next);
});


