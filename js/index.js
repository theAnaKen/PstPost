// Getting DOM elements
const jsonBox = document.getElementById("Json");
const jsonRadio = document.getElementById("json");
const paramsRadio = document.getElementById("custom");
const parametersBox = document.querySelector(".parameterBox");
const addParams = parametersBox.querySelector(".btn");
const params = document.getElementById("params");

//* Utility functions:
// 1. Utility function to get DOM element from string
function getElementFromString(string, index) {
	let div = document.createElement("div");
	div.setAttribute("class", "parameterBox");
	div.setAttribute("id", `param${index}`);
	div.innerHTML = string;
	return div;
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
	jsonBox.style.display = "grid";
});

// No. of params
let addedParams = 0;

// If user clicks on "addParam", add more params
addParams.addEventListener("click", (e) => {
	if (!addedParams) {
		addedParams = 2;
	}

	let string = `
    <p>Parameter ${addedParams}:</p>
    <div class="input">
    
    <input type="text" placeholder="Parameter ${addedParams} Key">
    <input type="text" placeholder="Parameter ${addedParams} Value">
    <button class="btn remove"> - </button>
    </div>`;
	addedParams++;
	// console.log(string);
	// console.log(addedParams);

	// Convert the element string to DOM element
	let paramElement = getElementFromString(string, addedParams);
	// console.log(paramElement);
	params.appendChild(paramElement);

	// remove param event listener
	let deleteParam = document.getElementsByClassName("remove");
	for (const btn of deleteParam) {
		btn.addEventListener("click", (e) => {
			e.target.parentElement.parentElement.remove();
		});
	}
});
