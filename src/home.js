export default function LandingPage(view){
    view.className = "landingPage";
    const main = view.getElementsByClassName("main")[0];
    main.replaceChildren();
    const mainArticle = document.createElement("p");
    const inviteArticle = document.createElement("p");
    mainArticle.className = "article";
    mainArticle.innerText = "Providing excellence and boring corporate-sounding website texts since 1874, The Diner is proud to offer you an assortment of dishes from around the world";
    inviteArticle.className = "article";
    inviteArticle.innerText = "Stop by or order online!"

    main.appendChild(mainArticle); 
    main.appendChild(inviteArticle);
}

