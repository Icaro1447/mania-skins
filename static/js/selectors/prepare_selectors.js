function prepare() {
    let skins_json = JSON.parse(localStorage["skins_data"])
    document.querySelectorAll("interact").forEach(element => {
        element.addEventListener("click", event => {
            selected_skin = JSON.parse(JSON.stringify(skins_json.skins[element.getAttribute("skin_id")]))
            updateMetadata()
            showSkinPage()
            history.pushState({}, null, `/?pages=1&skin=${element.getAttribute("skin_id")}`);
            console.log(element.getAttribute("skin_id"))
        })
    })
}