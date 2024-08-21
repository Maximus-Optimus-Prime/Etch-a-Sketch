const flexContainer = document.getElementById('flexContainer');
const button = document.querySelector('button');
let stylesheet = document.styleSheets[0];
let myClassRule;

function changeSize() {
    let size = parseInt(prompt("Enter size value (max 100)"));
    size = size > 100 ? 100 : size;
    console.log(size)
    reset(size);
}

function reset(size) {
    let rules = stylesheet.cssRules;
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].selectorText === ".flexItem") {
            myClassRule = rules[i];
            break;
        }
    }
    let elementsToDelete = document.getElementsByClassName('flexItem');
    for (let i = 0; i < elementsToDelete.length; i++) {
        elementsToDelete[i].remove();
    }
    myClassRule.style.flex = `1 0 calc(100% / ${size})`;
    setSize(size);
}

function setSize(size) {
    for (let row = 1; row <= size; row++) {
        for (let column = 1; column <= size; column++) {
            const flexItem = document.createElement('div');
            flexItem.className = 'flexItem';
            flexItem.textContent = `${row} ${column}`;
            flexContainer.appendChild(flexItem);
        }
    }
}

window.onload = function() {reset(5);};
button.addEventListener("click", function() {reset(10);});
