const menuItems = document.getElementsByClassName('menu_items').item(0);
const menuButton = document.getElementsByClassName('menu_button').item(0);


menuButton.addEventListener('click', () => {

    if (menuItems.style.display === 'none') {
        menuItems.style.display = "flex";
    }
    else {
        menuItems.style.display = 'none';
    }   
});