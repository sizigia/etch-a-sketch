function divs(num, nameClass) {
    var i = 1;
    do {
        let div = document.createElement('div');
        div.className = nameClass;
        div.id = 'sqr' + i;
        div.addEventListener("mouseover", function () {
            div.style.background = 'black';
        });
        myGrid.appendChild(div);
        i++;
    } while (i <= num);
}
let myGrid = document.createElement('div');
myGrid.className = 'myGrid';
document.body.appendChild(myGrid);
divs(256, 'sqrs');



