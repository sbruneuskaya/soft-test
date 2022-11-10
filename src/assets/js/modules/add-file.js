const upload = document.querySelectorAll('[name="upload"]');

upload.forEach(item => {
    item.addEventListener('input', () => {
        // реализация обрезки имени файла, если имя файла больше 7-ми символов, то имя будет обрезаться и прибавлять ...
        let dots;
        const elemArr = item.files[0].name.split('.');
        // 'nameImage.jpg'=>['nameImage', 'jpg']-----так разобьет сплит
        elemArr[0].length > 6 ? dots = '...' : dots = '.';
        let nameElem = elemArr[0].substring(0, 6) + dots + elemArr[1];

        //    в предыдущий див записываем имя получившееся (в див выше инпута)
        item.previousElementSibling.textContent = nameElem
    })
})




