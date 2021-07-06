function showSkinPage() {
    if (selected_skin.images.length == 1) {
        mor.setAttribute("allow", "false")
    } else {
        mor.setAttribute("allow", "true")
    }
    console.log(selected_skin.title)
    document.body.style.overflowY = "hidden"
    document.getElementById("skin-page").style.opacity = "0";
    document.getElementById("skin-page").style.display = "flex";
    image_displayer.setAttribute("src", selected_skin.images[0])
    min.setAttribute("allow", "false")
    setTimeout(function() {
        document.getElementById("skin-page").style.opacity = "1";
    }, 100)
}

function hideSkinPage() {
    document.body.style.overflowY = "auto"
    document.getElementById("skin-page").style.opacity = "0";
    setTimeout(function() {
        document.getElementById("skin-page").style.display = "none";
    }, 100)
    selected_skin_image = 0;
    selected_skin = "{}";
}

document.addEventListener("keydown", key => {
    if (key.key == "Escape") hideSkinPage();
})

function updateMetadata() {
    document.getElementById("skin-title").innerText = selected_skin.title;
    document.getElementById("skin-author").innerText = selected_skin.author;
    document.getElementById("skin-type").innerText = selected_skin.type;
    document.getElementById("skin-keys").innerText = selected_skin.keys;
    document.getElementById("skin-about").innerText = selected_skin.description;
    document.getElementById("skin-download").setAttribute("d-url", selected_skin.download)
}

if (window.location.search.replace("?", "").split("&").length != 1) showPermalinkContent();

function showPermalinkContent() {
    console.log(splitted_params)
    fetch("/api/skins", {
        headers: {
            client_id: "website",
        }
    }).then(r => { return r }).then(json => {
        json.json().then(parsed => {
            parsed = JSON.parse(parsed)
            selected_skin = parsed.skins[splitted_params[1]]
            updateMetadata()
            showSkinPage()
        })
    })
}