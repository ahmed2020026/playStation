let links_menu = document.querySelector(".links");
let links_items = document.querySelectorAll(".links li")
let toggle = document.querySelector(".btn");
let landing = document.querySelector(".landing");
let about = document.querySelector(".about");
let gallery = document.querySelector(".gallery");
let games = document.querySelector(".games");
let price = document.querySelector(".price");
let contact = document.querySelector(".contact");
let cards = document.querySelectorAll(".games .container .card");
let form_search = document.querySelector(".form-search");
let input_search = document.querySelector(".search");
let btn_search = document.querySelector(".btn-search"); 
let output = document.querySelector(".output");

/* =========== collection title of games ========== */
class outputSearch{
    constructor(title , link){
        this.title = title;
        this.link = link;
    }
}

let group_of_cards = [];
cards.forEach(function(e){
    let title = e.children[1].children[0].getAttribute("get-data");
    let link = e.children[1].children[1].href;
    group_of_cards.push(new outputSearch(title.toLowerCase() , link))
});


/* ================================================ */

/* ===== btn to Open navBar ====== */
document.addEventListener('click' , function(e){
    try {
            if(e.target.getAttribute("class") === "btn" || e.target.getAttribute("class") === "btn open"){
                btn_search.classList.remove("open");
                form_search.style.cssText = "height: auto ; right : -500px";
                toggle.classList.toggle("open");
                if(toggle.getAttribute("class") === "btn open"){
                    btn_search.classList.remove(".open");
                    links_menu.style.cssText = "animation: animation_menu 0.5s ease-in-out 0s 1 forwards;"
                }
                else{
                    links_menu.style.cssText = "animation : none"
                    toggle.classList.remove("open");
                }
            }
            else if(e.target.getAttribute("class") === "btn-search"||e.target.getAttribute("class") === "btn-search open"){
                links_menu.style.cssText = "animation: none";
                toggle.classList.remove("open");
                e.target.classList.toggle("open");
                if(e.target.getAttribute("class") === "btn-search open"){
                    form_search.style.cssText = "height: auto ; right : 0";
                }
                else{
                    form_search.style.cssText = "height: auto ; right : -500px";
                    btn_search.classList.remove(".open");
                }
            }
            else{
                btn_search.classList.remove("open");
                toggle.classList.remove("open");
                links_menu.style.cssText = "animation: none"
            }
        } catch (error) {
            if(e.target.getAttribute("class") === "btn" || e.target.getAttribute("class") === "btn open"){
                toggle.classList.toggle("open");
                if(toggle.getAttribute("class") === "btn open"){
                    links_menu.style.cssText = "animation: animation_menu 0.5s ease-in-out 0s 1 forwards;"
                }
                else{
                    links_menu.style.cssText = "animation : none"
                    toggle.classList.remove("open");
                }
            }
            else{
                toggle.classList.remove("open");
                links_menu.style.cssText = "animation: none"
            }
        }
});

/* ===== scrolling mode ========== */
window.onscroll = function(){
    if(window.scrollY >= landing.offsetTop && window.scrollY < about.offsetTop-60){
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[0].classList.add("active");
    }
    else if(window.scrollY >= about.offsetTop-60 && window.scrollY < gallery.offsetTop-60){
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[1].classList.add("active");
    }
    else if(window.scrollY >= gallery.offsetTop-60 && window.scrollY < games.offsetTop-60){
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[2].classList.add("active");
    }
    else if(window.scrollY >= games.offsetTop-60 && window.scrollY < price.offsetTop-60){
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[3].classList.add("active");
    }
    else if(window.scrollY >= price.offsetTop-60 && window.scrollY < contact.offsetTop-60){
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[4].classList.add("active");
    }
    else{
        links_items.forEach((e) => e.classList.remove("active"));
        links_items[5].classList.add("active");
    }
}
/* =============== functions of search =============== */
let comp = [];

function processing(value){
    comp = [];
    output.textContent = '';
    if(value !== ""){
        group_of_cards.forEach(e => {
            if(!e.title.indexOf(value)){
                comp.push(e);
            }
        })
        createElement(comp)
    }
    else{
        comp = [];
        output.textContent = '';
    }
}
function createElement(content){
    content.forEach((e) => {
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = e.link;
        link.appendChild(document.createTextNode(e.title));
        li.appendChild(link);
        output.appendChild(li);
    })
}
