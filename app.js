'use strict';

const varswitcher =document.querySelector('.btn');

varswitcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const varclassName = document.body.className;
    if(varclassName == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + varclassName);
});