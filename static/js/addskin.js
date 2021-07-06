function addskin(id, name, author, keys, type, download, images, tags, description) {
    const skinjson = {
        id: id,
        title: name,
        author: author,
        keys: keys,
        type: type,
        download: download,
        images: [],
        tags: [],
        description: description
    }

    let skintags = tags.split(",")
    let skinimages = images.split(",")

    for (let i = 0; i < skinimages.length; i++) {
        skinjson.images.concat(skinimages[i])
    }

    for (let i = 0; i < skintags.length; i++) {
        skinjson.tags.concat(skintags[i])
    }

    return console.log(JSON.stringify(skinjson));
}