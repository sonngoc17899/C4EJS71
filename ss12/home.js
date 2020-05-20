let menu = [
    "Home", "About", "Rooms", "Dive site", "Foot", "News", "Contacts"
]
let menulink = document.getElementsByClassName("menu-link");
for(let i=0;i<menulink.length && i<menu.length;i++)
{
    menulink[i].innerHTML = menu[i];
}

