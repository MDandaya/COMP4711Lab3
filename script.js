function createArtistParams() {

    if (document.querySelector('#add-div') != null) {
        document.querySelector('#add-div').remove();
        return;
    }

    let addDiv = document.createElement("div");
    addDiv.setAttribute("id", "add-div");

    let fieldName = document.createElement("input");
    fieldName.setAttribute("id", "field-name");
    fieldName.setAttribute("placeholder", "Artist Name")

    let fieldAbout = document.createElement("input");
    fieldAbout.setAttribute("id", "field-about");
    fieldAbout.setAttribute("placeholder", "About Artist")

    let fieldImage = document.createElement("input");
    fieldImage.setAttribute("id", "field-image");
    fieldImage.setAttribute("placeholder", "Image URL")

    let addButton = document.createElement("input");
    addButton.setAttribute("type", "button");
    addButton.setAttribute("value", "Add")
    addButton.setAttribute("class", "field");
    addButton.setAttribute("onclick", "addArtist()");

    addDiv.appendChild(fieldName);
    addDiv.appendChild(fieldAbout);
    addDiv.appendChild(fieldImage);
    addDiv.appendChild(addButton);

    let top = document.getElementById("top").appendChild(addDiv);
}

function addArtist() {
    let name = document.getElementById("field-name").value;
    let about = document.getElementById("field-about").value;
    let imageurl = document.getElementById("field-image").value;

    let card = document.createElement("div");
    card.setAttribute("class", "flex-item hover");
    
    let image = document.createElement("img");
    image.setAttribute("src", imageurl);

    let description = document.createElement("div");
    description.setAttribute("class", "description");

    let boldnode = document.createElement("strong");

    let nametext = document.createTextNode(name);

    let br = document.createElement("br");

    let abouttext = document.createTextNode(about);

    let delButton = document.createElement("input");
    delButton.setAttribute("type", "button");
    delButton.setAttribute("value", "Delete")

    boldnode.appendChild(nametext);
    description.appendChild(boldnode);
    description.appendChild(br);
    description.appendChild(abouttext);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(delButton); 

    let container = document.getElementById("flex-container").appendChild(card);
    document.querySelector('#add-div').remove();

}

function deleteNode() {
    alert(this.value);
}