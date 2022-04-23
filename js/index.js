// Getting DOM elements
const jsonBox = document.getElementById("Json");
const jsonRadio = document.getElementById("json");
const paramsRadio = document.getElementById("custom");
const parametersBox = document.getElementById("parameterBox");
const addParams = parametersBox.querySelector(".btn");
const params = document.getElementById("params");

//* Utility functions:
// 1. Utility function to get DOM element from string
function getElementFromString(string) {
	let div = document.createElement("div");
	div.innerHTML = string;
	return div.firstElementChild;
}

// Huding Parameter box by default
parametersBox.style.display = "none";

// If user clickes on "JSON", hide Parameter box
paramsRadio.addEventListener("click", (e) => {
	jsonBox.style.display = "none";
	parametersBox.style.display = "flex";
});

// If user clicks on "Custom Parameter", hide Json box
jsonRadio.addEventListener("click", (e) => {
	parametersBox.style.display = "none";
	jsonBox.style.display = "flex";
});

// No. of params
let addedParams = 1;

// If user clicks on "addParam", add more params
addParams.addEventListener("click", (e) => {
	let string = `
    <p>Parameter ${addedParams}:</p>
    <div class="input">
    
    <input type="text" placeholder="Parameter ${addedParams} Key">
    <input type="text" placeholder="Parameter ${addedParams} Value">
    <button class="btn"> + </button>
    </div>`;
	addedParams++;
	// console.log(string);
	// console.log(addedParams);

	// Convert
});
