const menu = document.querySelector("#menu")
const close = document.querySelector("ion-icon[name='close']")
const nav = document.querySelector(".nav")
const links = nav.querySelectorAll("a")

menu.onclick = () => {
  nav.classList.toggle("show")
}

close.onclick = () => {
  nav.classList.toggle("show")
}

links.forEach((link) => {
  link.onclick = () => {
    nav.classList.remove("show")
  }
})
