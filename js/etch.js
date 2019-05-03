let myGrid = document.getElementsByClassName('myGrid')[0];

let reset = document.getElementById('reset');

setUp();

function sqrDivs(num, nameClass) {
    var i = 1;
    do {
        let div = document.createElement('div');
        div.className = nameClass;
        div.addEventListener("mouseover", function () {
            div.style.background = 'black';
        });
        myGrid.append(div);
        i++;
    } while (i <= num);
}


function setUp() {
    var sq = window.prompt('How many squares per side?');
    if (sq === null) {
        sq = 20;
    }
    sqrDivs(sq * sq, 'sqrs');
    myGrid.style.setProperty("--sqr-per-side", sq);
    const pixSize = (400 / sq) + 'px';
    myGrid.style.setProperty("--pix-size", pixSize);
}
