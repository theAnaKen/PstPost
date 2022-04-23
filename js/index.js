// Getting DOM elements
const urlBox = document.getElementById("url");

const jsonBox = document.getElementById("Json");
const jsonRadio = document.getElementById("json");

const paramsRadio = document.getElementById("custom");
const parametersBox = document.querySelector(".parameterBox");
const addParams = parametersBox.querySelector(".btn");
const params = document.getElementById("params");
const submitBtn = document.getElementById("submit").querySelector(".btn");

const responseBox = document.getElementById("response-box");

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
var addedParams = 0;

// If user clicks on "addParam", add more params
addParams.addEventListener("click", (e) => {
	// if (!addedParams) {
	// 	addedParams = 2;
	// }

	let string = `
    <p>Parameter ${addedParams + 2}:</p>
    <div class="input">
    
    <input type="text" id="key${
		addedParams + 2
	}" placeholder="Parameter ${addedParams} Key">
    <input type="text" id="value${
		addedParams + 2
	}" placeholder="Parameter ${addedParams} Value">
    <button class="btn remove"> - </button>
    </div>`;
	addedParams++;

	// Convert the element string to DOM element
	let paramElement = getElementFromString(string, addedParams);
	params.appendChild(paramElement);

	// remove param event listener
	let deleteParam = document.getElementsByClassName("remove");
	for (const btn of deleteParam) {
		btn.addEventListener("click", (e) => {
			e.target.parentElement.parentElement.remove();
			addedParams--;
		});
	}
});

// When the submit button is pressed
submitBtn.addEventListener("click", (e) => {
	// Show Please wait || processing request in the response box
	responseBox.value = "Processing request...";

	// Fetch user inputed data
	const requestType = document
		.getElementById("reqType")
		.querySelector("input:checked");

	const contentType = document
		.getElementById("contentType")
		.querySelector("input:checked");

	//! console log values for debugging
	console.log("url type is", urlBox.value);
	console.log("requst type is", requestType);
	console.log("Content type is", contentType);

	// if user has selected params insted of JSON as content type:
	if (contentType.value == "custom") {
		let data = {};
		for (i = 0; i < addedParams + 1; i++) {
			const key = document.getElementById("key" + (i + 1)).value;
			const value = document.getElementById("value" + (i + 1)).value;
			data[key] = value;
			console.log(data);
		}
	}
});
