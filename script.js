// Global variables.
const outerColourPicker = document.getElementById("outer");
const innerColourPicker = document.getElementById("inner");

var outerColour = "#000000";
var innerColour = "#000000";

// Fires whenever the user does anything to the exterior colour picker.
outerColourPicker.addEventListener("input", (event) => {
    outerColour = event.target.value;
    writeOutput();
});

// Fires whenever the user does anything to the liner colour picker. 
innerColourPicker.addEventListener("input", (event) => {
    innerColour = event.target.value;
    writeOutput();
});

// Write values out to screen.
function writeOutput() {
    // Regex slicing of hex value strings, to separate RGB values.
    let slicedOuter = outerColour.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    let slicedInner = innerColour.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

    // Write out new HTML, calling helper function to convert values.
    const outputArea = document.getElementById("output");
    outputArea.innerHTML = `
        <h4>Exterior R: ` + colourHexTo32(slicedOuter[1]) + `</h4>
        <h4>Exterior G: ` + colourHexTo32(slicedOuter[2]) + `</h4>
        <h4>Exterior B: ` + colourHexTo32(slicedOuter[3]) + `</h4>
        <h4>Lining R: ` + colourHexTo32(slicedInner[1]) + `</h4>
        <h4>Lining G: ` + colourHexTo32(slicedInner[2]) + `</h4>
        <h4>Lining B: ` + colourHexTo32(slicedInner[3]) + `</h4>
    `;
}

// Converts hex colour val to within a range of 0 to 31.
function colourHexTo32(inputVal) {
    return Math.round((parseInt(inputVal, 16) / 255) * 31);
}