const menu = document.querySelector("#menu")
const close = document.querySelector("ion-icon[name='close']")
const nav = document.querySelector(".nav")

menu.onclick = () => {
  nav.classList.toggle("show")
}

close.onclick = () => {
  nav.classList.toggle("show")
}
