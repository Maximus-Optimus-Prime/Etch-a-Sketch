const flexContainer = document.getElementById('flexContainer');
const button = document.getElementById('btn');

function changeSize() {
    let size = parseInt(prompt("Enter size value (max 100)"));
    size = size > 100 ? 100 : size;
    reset(size);
}

function reset(size) {
    flexContainer.innerHTML = "";
    flexContainer.style.opacity = 1;
    setSize(size);
}

function setSize(size) {
    for (let row = 1; row <= size; row++) {
        for (let column = 1; column <= size; column++) {
            const flexItem = document.createElement('div');
            flexItem.className = 'flexItem';
            flexItem.style.backgroundColor = "white";
            flexItem.style.color = 'black';
            flexItem.style.flex = `1 0 calc(100% / ${size})`;
            flexItem.textContent = `${row} ${column}`;
            flexItem.addEventListener('mouseover', () => {
                flexItem.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                flexContainer.style.opacity -= 0.1;
            });
            flexContainer.appendChild(flexItem);
        }
    }
}

window.onload = function() {reset(5);};
button.addEventListener("click", changeSize);

