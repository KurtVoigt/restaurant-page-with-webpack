export default function about(view){
    view.className = "about";
    const main = view.getElementsByClassName("main")[0];
    main.replaceChildren();
    const firstP= document.createElement("p");
    const secondP= document.createElement("p");
    firstP.className = secondP.className = "article";
    firstP.innerText = `This Webpage was a project to teach myself webpack. All HTML elements are created with javascript and each of`;
    secondP.innerText = "the tabs in the navigation bar use functions that were rolled up using webpack. Styling is done using transpiled scss.";

    main.appendChild(firstP);
    main.appendChild(secondP);
}
