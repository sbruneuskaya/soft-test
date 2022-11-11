// выбор селекторов
let getDropdown = (selector, labelBtn, selectorSwitch) => {
    let options = document.querySelectorAll(selector)
    let label = document.querySelector(labelBtn)
    options.forEach((option) => {
        option.addEventListener('click', () => {
            options.forEach((option) => {
                option.classList.remove('active')
            })
            label.textContent = option.textContent;
            option.classList.add('active')
        })
    })

    // закрытие вне
    document.addEventListener('click', (e) => {
        const toggle = document.querySelector(selectorSwitch)
        const element = e.target
        if (element === toggle) return;

        const isDropdownChild = element.closest('.dropdown__filter')
        if (!isDropdownChild) {
            toggle.parentNode.classList.remove('active')
            toggle.checked = false
        }
    })
}

let addBorder = (selector) => {
    let getSelector = document.querySelector(selector)
    getSelector.addEventListener('click', (e) => {
        const target = e.target
        if (target && (target.classList.contains(selector.replace(/^./, "")))) {
            target.parentNode.classList.toggle('active')
        }
    })
}

addBorder('.dropdown__switch');
getDropdown('.dropdown__select-option', '.dropdown__filter-selected', '.dropdown__switch')
