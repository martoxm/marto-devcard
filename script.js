function applyTheme(isLight) {
  const html = document.documentElement
  html.classList.toggle("light", isLight)
  const img = document.querySelector("#profile img")
  img.setAttribute(
    "src",
    isLight ? "./assets/foto-perfil-light.png" : "./assets/foto-perfil.png"
  )
}

function toggleMode() {
  const isLight = !document.documentElement.classList.contains("light")
  applyTheme(isLight)
  localStorage.setItem("theme", isLight ? "light" : "dark")
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("switch").addEventListener("click", toggleMode)

  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    applyTheme(true)
  }
})
