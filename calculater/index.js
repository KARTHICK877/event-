const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const result = document.getElementById("result");

addButton.addEventListener("click", () => {
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    const sum = num1 + num2;
    result.innerHTML = sum;
});

subtractButton.addEventListener("click", () => {
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    const difference = num1 - num2;
    result.innerHTML = difference;
});

multiplyButton.addEventListener("click", () => {
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    const product = num1 * num2;
    result.innerHTML = product;
});

divideButton.addEventListener("click", () => {
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    const quotient = num1 / num2;
    result.innerHTML = quotient;
});



function validateInput(event) {
const charCode = event.which ? event.which : event.keyCode;


if (charCode < 48 || charCode > 57) {
    event.preventDefault();
    alert("Only numbers are allowed!");
}
}






const a = document.querySelector("#result")
a.style.color="red";


const b = document.querySelector("#addButton")
b.style.backgroundColor="lightyellow"


const c = document.querySelector("#subtractButton")
c.style.backgroundColor="lightblue"


const d = document.querySelector("#multiplyButton")
d.style.backgroundColor="lightpink"


const e = document.querySelector("#divideButton")
e.style.backgroundColor="skyblue"

const f = document.querySelector("#input1")
f.style.backgroundColor="Azure"

const g = document.querySelector("#input2")
g.style.backgroundColor="Azure"

const h = document.querySelector("#head")
h.style.backgroundColor="white"

// Applying media query styles programmatically using JavaScript
function applyMediaQueryStyles() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
        // Adjust styles for smaller screens
        document.body.style.backgroundColor = "lightgreen";
        document.body.style.padding = "10px";
    } else {
        // Default styles for larger screens
        document.body.style.backgroundColor = "aqua";
        document.body.style.padding = "20px";
        
    }
    
}


applyMediaQueryStyles();


window.addEventListener("resize", applyMediaQueryStyles);


alert( ` Only Numbers are Allowed`)

