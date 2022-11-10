const menuLinks = document.querySelectorAll('.menu__link')
const menuButton = document.querySelector('.menu__button');
const menuList = document.querySelector('.menu__list');

menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('menu__button_open');
    menuList.classList.toggle('menu__list_open');
});

if (menuLinks.length > 0) {
    menuLinks.forEach(el => {
        el.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        if (menuList.classList.contains('menu__list_open'))  {
            document.body.style.overflow = ''
            menuButton.classList.remove('menu__button_open')
            menuList.classList.remove('menu__list_open')
        }
        e.preventDefault()
    }
}

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("menu__link_active");
        current[0].className = current[0].className.replace(" menu__link_active", "");
        this.className += " menu__link_active";
    });
}

