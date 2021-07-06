selected_skin = JSON.parse(selected_skin)
var min = document.getElementById("min")
var mor = document.getElementById("mor")

document.getElementById("min").addEventListener("click", ev => {
    if (ev.target.getAttribute("allow") == "false") return;
    if (selected_skin_image > 0) ev.target.setAttribute("allow", "true");
    changeImage(selected_skin_image - 1)
    if (selected_skin_image == 0) ev.target.setAttribute("allow", "false");
    if (selected_skin_image < selected_skin.images.length) mor.setAttribute("allow", "true")
})

document.getElementById("mor").addEventListener("click", ev => {
    if (ev.target.getAttribute("allow") == "false") return;
    changeImage(selected_skin_image + 1)
    if (selected_skin_image != 0) min.setAttribute("allow", "true")
    if (selected_skin_image <= selected_skin.images.length) mor.setAttribute("allow", "false")
})

document.getElementById("skin-download").addEventListener("click", button => {
    window.open(button.target.getAttribute("d-url"), "_blank")
})