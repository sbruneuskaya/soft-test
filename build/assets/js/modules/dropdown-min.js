let getDropdown=(e,t,o)=>{let d=document.querySelectorAll(e),c=document.querySelector(t);d.forEach(e=>{e.addEventListener("click",()=>{c.textContent=e.textContent})}),document.addEventListener("click",e=>{const t=document.querySelector(o),d=e.target;d!==t&&(d.closest(".dropdown__filter")||(t.parentNode.classList.remove("active"),t.checked=!1))})},addBorder=e=>{document.querySelector(e).addEventListener("click",t=>{const o=t.target;o&&o.classList.contains(e.replace(/^./,""))&&o.parentNode.classList.toggle("active")})};addBorder(".dropdown__switch"),getDropdown(".dropdown__select-option",".dropdown__filter-selected",".dropdown__switch");