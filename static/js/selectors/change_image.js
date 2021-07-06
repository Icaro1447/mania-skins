var image_displayer = document.getElementById("skin-image")

function changeImage(value) {
    selected_skin_image = value;
    image_displayer.setAttribute("src", selected_skin.images[selected_skin_image])
}