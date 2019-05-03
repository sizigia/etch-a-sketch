const headContainer = document.createElement('div');
headContainer.className = 'container';
document.body.appendChild(headContainer);

const title = document.createElement('div');
title.className = 'title';
title.innerHTML = "Etch-A-Sketch";
headContainer.appendChild(title);

const border = document.createElement('div');
border.className = 'border';
document.body.appendChild(border);

const myGrid = document.createElement('div');
myGrid.className = 'myGrid';
border.appendChild(myGrid);


function sqrDivs(num, nameClass) {
    var i = 1;
    do {
        let div = document.createElement('div');
        div.className = nameClass;
        div.addEventListener("mouseover", function () {
            div.style.background = 'black';
        });
        myGrid.appendChild(div);
        i++;
    } while (i <= num);
}

const sq = window.prompt('How many squares per side?');
sqrDivs(sq * sq, 'sqrs');
myGrid.style.setProperty("--sqr-per-side", sq);
const pixSize = (400 / sq) + 'px';
myGrid.style.setProperty("--pix-size", pixSize);

