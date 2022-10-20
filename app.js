function createCard(){
    const imageLink = "https://www.alhaya-medical.com/wp-content/uploads/2017/11/team-member.jpg";

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-image");
    img.setAttribute('src', imageLink);

    card.appendChild(img);

    const h2 = document.createElement("h2");
    const h2Contet = document.createTextNode("Web developer copy");
    h2.classList.add("title");
    h2.appendChild(h2Contet);

    card.appendChild(h2);

    const p = document.createElement("p");
    const pContet = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem?");
    p.classList.add("text");
    p.appendChild(pContet);

    card.appendChild(p);

    const btn = document.createElement("button");
    const btnText = document.createTextNode("Close");
    btn.classList.add("btn");
    btn.setAttribute("onclick", "removeCard(this)");
    btn.appendChild(btnText);

    card.appendChild(btn);

    document.getElementById("cardContainer").appendChild(card);

}

document.getElementById("addCard").addEventListener("click", createCard);

// removing card
function removeCard(id){
    id.parentNode.remove();
}








  
  
  






