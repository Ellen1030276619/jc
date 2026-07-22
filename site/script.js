const simulator = document.querySelector(".simulator");
const button = document.querySelector(".experience-button");
const statusText = document.querySelector(".status-text");

function setExperience(active) {
  simulator.classList.toggle("is-experiencing", active);
  button.setAttribute("aria-pressed", String(active));
  button.textContent = active ? "体验结束" : "开始模拟";
  statusText.textContent = active ? "体验中…" : "你该知晓祂所经历…";
}

button.addEventListener("click", () => {
  setExperience(!simulator.classList.contains("is-experiencing"));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setExperience(false);
});
