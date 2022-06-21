const container = document.querySelector('#container');
const buttonContainer = document.querySelector('#buttonContainer');
const questionButton = document.createElement('button');
const clearButton = document.createElement('button');
const clearContainer = document.querySelector('#clearContainer');

clearButton.classList.add('clearButton');
questionButton.classList.add('questionButton');
questionButton.textContent = 'Press Me';
clearButton.textContent = 'Press to Clear';
clearContainer.appendChild(clearButton);
buttonContainer.appendChild(questionButton);
const divcaca = '';



questionButton.addEventListener("click", function() {
    const divNum = prompt('Choose a quantity.');
    booty(divcaca, divNum);
    
});

function booty(e, c) {
    const numofSq = c * c;
    width = ((600 / (c * c) * c) -2);
    height = ((600 / (c * c) * c) -2);
        for (i = 0; i < numofSq; i++) {
            e = document.createElement('div');
            e.style.height = width + 'px';
            e.style.width = height + 'px';
            e.style.border = "1px solid black";
            e.classList.add(i);
            container.appendChild(e);
            var divs = container.querySelectorAll('div');
        };
        console.log(divs);
    clearButton.addEventListener("click", function() {
        divs.forEach(div => {
            div.remove();
        });
    });
    console.log('i is = ' + i);
};


container.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "rgb(115, 206, 240)";
    container.style.background = null;
});

var viewportWidth = document.documentElement.clientWidth;
var viewportHeight = document.documentElement.clientHeight;

console.log('page height is = ' + viewportHeight);
console.log('page width is = ' + viewportWidth);
