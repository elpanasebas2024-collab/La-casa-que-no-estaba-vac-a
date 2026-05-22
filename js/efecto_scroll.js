document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent = scrollTop / documentHeight;

  // Oscurece progresivamente
  const darkness = Math.min(scrollPercent * 1.2, 1);

  document.body.style.filter = `brightness(${1 - darkness * 0.28}) contrast(${1 + darkness * 0.15})`;
  // Fondo rojizo infernal al final
  document.body.style.background = `radial-gradient(circle at top,
  rgb(${25 + darkness * 25}, 0, 0) 0%,
  rgb(${12 + darkness * 10}, 0, 0) 45%,
  rgb(${8 + darkness * 5}, 8, 8) 100%)`;
});
