import home from "./home";
import menu from "./menu";
import about from "./about";

const content = document.getElementById("content");

//factories for various elements
function Tab(tabText){
    const tab = document.createElement("div");
    tab.innerText = tabText;
    tab.className = "tab";


    return tab; 
}

const head = document.createElement("div");
const title = document.createElement("div");
title.innerText = "The Diner";
title.className = "title";
head.className = "header";

const main = document.createElement("div");
main.className = "main";

const footer = document.createElement("div")
footer.className = "footer"
const footerText = document.createElement("p");
const gitHubLink = document.createElement("a");
gitHubLink.href = "https://github.com/KurtVoigt/restaurant-page-with-webpack";
const githubImage = document.createElement("img");
githubImage.src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";

gitHubLink.appendChild(githubImage);
footerText.innerText = "KurtVoigt";
footer.appendChild(footerText);
footer.appendChild(gitHubLink);

const nav= (document.createElement("div"));
nav.className = "nav";

const homeTab = Tab("Home");
homeTab.addEventListener("click", ()=>home(content));
nav.appendChild(homeTab);

const menuTab = Tab("Menu");
menuTab.addEventListener("click", ()=>menu(content));
nav.appendChild(menuTab);

const aboutTab = Tab("About")
aboutTab.addEventListener("click", ()=>about(content));
nav.appendChild(aboutTab);


head.appendChild(title);
head.appendChild(nav);
content.appendChild(head);
content.appendChild(main);
content.appendChild(footer);
home(content);



//create tab pages



function MenuPage(view){

}


function AboutPage(view){





}
