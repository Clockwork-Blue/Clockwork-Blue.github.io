function cardMaker(repo) {
    //get main cont div
    let main = document.getElementById("main");
    //make main card
    let card = document.createElement("div");
    card.classList.add("card");
    main.appendChild(card);
    //img row
    let cImgDiv = document.createElement("div");
    cImgDiv.classList.add("img-row");
    card.appendChild(cImgDiv);
    let cImg = document.createElement("img");
    cImg.classList.add("cardImg");
    let source = "globalImg/" + repo + ".png";
    cImg.src = source;
    cImgDiv.appendChild(cImg);
    //text-row
    let textRow = document.createElement("div");
    textRow.classList.add("text-row");
    textRow.innerText= repo;
    card.appendChild(textRow);
    
}