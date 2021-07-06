/**
 * @var {Array} splitted_params 1 = Page ;; 2 = Skin ID
 */

const modal = document.getElementById("skins-container")
var splitted_params = window.location.search.replace("?", "").split("&")
console.log(splitted_params)

function parseParams() {
    for (let index = 0; index < splitted_params.length; index++) {
        console.log(splitted_params[index].split("="))
        splitted_params[index] = splitted_params[index].split("=")[1]
    }
}

parseParams()

//history.pushState({}, null, "/?pages=1&skin=727");

fetch("/api/skins", {
    headers: {
        client_id: "website",
    }
}).then(r => { return r }).then(json => {
    json.json().then(stringifiedJson => {
        localStorage["skins_data"] = stringifiedJson;
        json = JSON.parse(stringifiedJson)
        for (let index = 0; index < json.skins.length; index++) {
            let data = json.skins[index];
            modal.insertAdjacentHTML("beforeend", `
            <div class="skin-container">
            <interact skin_id="${data.id}">
            <div class="thumbnail" style="background-image: url('${data.images[0]}');"></div>
            <p class="title">${data.title}</p>
            <p class="author">${data.author}</p>
            </interact>
            </div>`)
            if (index == json.skins.length - 1) {
                prepare()
            }
        }
    })
})