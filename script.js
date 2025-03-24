window.addEventListener ("DOMContentLoaded",() => {
    const video = document.querySelector("#ss25_vid");
    video.play()
});
    
const NewIn_urls = [
    ['images/NewIn/RuffledTunic.avif',"Ruffled Tunic","$34.99"],
    ['images/NewIn/CoatedMiniSkirt.avif',"Coated Mini Skirt","$34.99"],
    ['images/NewIn/Lacing-FrontCottonShirt.avif',"Lacing-Front Cotton Shirt","$54.99"],
    ['images/NewIn/Drawstring-DetailDress.avif',"Drawstring-Detail Dress","$34.99"],
    ['images/NewIn/Flared-SkirtLacing-DetailDress.avif',"Lacing-Detail Dress","$44.99"],
    ['images/NewIn/CrepeBlouse.avif',"Crêpe Blouse","$69.99"],
    ['images/NewIn/ChiffonSkirtWithFlounces.avif',"Chiffon Skirt with Flounces","$69.99"],
    ['images/NewIn/CoatedPencilSkirt.avif',"Coated Pencil Skirt","$34.99"]
]

const NewIn_items = document.querySelector("#NewIn-items");

function display_image(image_url, price, item_name, index){
    //create container div
    //create img element 
    //set src on img
    //append img to container 
    let itemContainerDiv = document.createElement("div"); 
    itemContainerDiv.className = "NewIn-item";

    let img = document.createElement("img");
    img.src= image_url;
    itemContainerDiv.appendChild(img);  

    let itemText = document.createElement("div"); 
    itemText.className="item_text";
    
    let h3 = document.createElement("h3");
    h3.textContent = price;
    itemText.appendChild(h3);  

    let p = document.createElement("p");
    p.textContent = item_name;
    itemText.appendChild(p);
    
    itemContainerDiv.appendChild(itemText); 
    
    NewIn_items.appendChild(itemContainerDiv);
}

function build_grid(image_url_array){
    //iterate array
    NewIn_items.innerHTML="";
    for (let i=0; i<image_url_array.length; i++){
        display_image(image_url_array[i][0],image_url_array[i][2],image_url_array[i][1], i);
    }
}

build_grid(NewIn_urls);