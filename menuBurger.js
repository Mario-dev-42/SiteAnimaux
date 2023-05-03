
const x = window.matchMedia("(max-width: 600px)");

const createMobileNav = () => {
    if (x.matches) {
        const header = Array.from(document.getElementsByTagName('header'))[0];

        const mobileMenu = document.createElement("nav");
        mobileMenu.className = 'mobile_menu';
        document.body.appendChild(mobileMenu);
        header.after(mobileMenu);

        const menu = document.createElement('div');
        menu.className = 'menu';
        mobileMenu.appendChild(menu);

        const menuButton = document.createElement('button');
        menuButton.className = 'menu_button';
        menuButton.type = 'button';
        menu.appendChild(menuButton);

        const btnImage = document.createElement('img');
        menuButton.appendChild(btnImage);
        btnImage.className = 'btn_image';
        btnImage.src = "img/menu.png";
        btnImage.alt = "icone du menu";

        const btnCross = document.createElement('img');
        btnCross.className = 'btn_cross';
        menuButton.appendChild(btnCross);
        btnCross.src = "img/cross.svg";
        btnCross.alt = "icone de la fermeture du menu";

        const menuItems = document.createElement('div');
        menuItems.className = 'menu_items';
        mobileMenu.appendChild(menuItems);

        let elA = [];
        const menuItemsA = ['About us', 'Adoption', 'Contact us'];
        for (let i = 0; i < menuItemsA.length; i++) {
            elA[i] = document.createElement('a');
            elA[i].textContent = menuItemsA[i];
            menuItems.appendChild(elA[i]);
        }
    }
};

createMobileNav();
x.addEventListener('resize', createMobileNav);

const menuButton = document.getElementsByClassName('menu_button').item(0);
const menuItems = document.getElementsByClassName('menu_items').item(0);
const btnImage = document.getElementsByClassName('btn_image').item(0);
const btnCross = document.getElementsByClassName('btn_cross').item(0);
const mobileMenu = document.getElementsByClassName('mobile_menu').item(0);
const deskTopMenu = document.getElementsByClassName('desktop_menu').item(0);

menuButton.addEventListener('click', () => {
    if (menuItems.style.display === 'flex') {
        menuItems.style.display = 'none';
        btnImage.style.display = 'inline';
        btnCross.style.display = 'none';
    }
    else {
        menuItems.style.display = 'flex';
        btnImage.style.display = 'none';
        btnCross.style.display = 'inline';   
    }
});
