const menuLinks=document.querySelectorAll(".menu__link"),menuButton=document.querySelector(".menu__button"),menuList=document.querySelector(".menu__list");if(menuButton.addEventListener("click",()=>{let e="true"===menuButton.getAttribute("aria-expanded");menuButton.setAttribute("aria-expanded",!e),menuButton.classList.toggle("menu__button_open"),menuList.classList.toggle("menu__list_open")}),menuLinks.length>0){function onMenuLinkClick(e){menuList.classList.contains("menu__list_open")&&(document.body.style.overflow="",menuButton.classList.remove("menu__button_open"),menuList.classList.remove("menu__list_open")),e.preventDefault()}menuLinks.forEach(e=>{e.addEventListener("click",onMenuLinkClick)})}for(let e=0;e<menuLinks.length;e++)menuLinks[e].addEventListener("click",function(){let e=document.getElementsByClassName("menu__link_active");e[0].className=e[0].className.replace(" menu__link_active",""),this.className+=" menu__link_active"});