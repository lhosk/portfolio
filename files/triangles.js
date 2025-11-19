// Work by Lucas Hoskin

// the array and buffer looks like:
// [48 values (global box), 18 values (first three points), 48 values (first individual box), 18 values (second three points), 48 values (second individual box), and so on...]
// I should also clarify: I added a bit of extra space to the global box, just so the global doesn't overlap with parts on individual boxes. This can be seen in Lines 90:93

// Globals
var gl;
var program;

var allBuffer;
var vPosition;
var vColor;

let frame_counter = 0;

let globalBox = [Infinity, -Infinity, Infinity, -Infinity];
let individualBox = [Infinity, -Infinity, Infinity, -Infinity];

let alpha = 1.0;
let redColor = [1.0, 0.0, 0.0, alpha];
let greenColor = [0.0, 1.0, 0.0, alpha];
let numPoints = 0;
let numTriangles = 0;

let bpv = 6*4; // Bytes per vertex
let allData = makeBox(globalBox, greenColor);

// Your GL program starts after the HTML page is loaded, indicatedby the onload event
window.onload = function init() {
    let canvas = document.getElementById("gl-canvas");
	gl = initWebGL(canvas);
    if ( !gl ) {alert( "WebGL isn't available" )};

	// Clear the display with a background color 
    gl.clearColor(0.5, 0.5, 0.5, 1.0);

    //  Initialize and load shaders -- all work done in init_shaders.js
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

	// Create one buffer  
	allBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, allBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, 50000, gl.STATIC_DRAW);

	// Get locations
	vPosition = gl.getAttribLocation(program, "vPosition");
	vColor = gl.getAttribLocation(program, "vColor");

	// call the mouse and render drawings
	mouse(canvas);
    render();
};

// Draw one point when mouse is clicked
function mouse(canvas){
    canvas.addEventListener("mouseup", function (event) {
        let {x, y} = coordinatesToCanvas(event, canvas);
        addPoint(x, y, Math.random(), Math.random(), Math.random(), alpha);
    });
}

// Converts mouse coords to canvas coords
function coordinatesToCanvas(eventx, canvas){
	let ijk = canvas.getBoundingClientRect();
	let x = (eventx.clientX - ijk.left) / ijk.width * 2 - 1;
	let y = (ijk.height - (eventx.clientY - ijk.top)) / ijk.height * 2 - 1;
	return {x, y};
}

// Adds points and full boxes to the array
function addPoint(x, y) {
    numPoints++;
    // Add point and color to array
    randomColor = [Math.random(), Math.random(), Math.random(), alpha]
    allData.push(x, y, ...randomColor);

    // Update individual box (but doesn't add to array)
    if (x < individualBox[0]) individualBox[0] = x;
    if (x > individualBox[1]) individualBox[1] = x;
	if (y < individualBox[2]) individualBox[2] = y;
    if (y > individualBox[3]) individualBox[3] = y;

    if (numPoints == 3) {
        // Add individual box to array
        allData.push(...makeBox(individualBox, redColor));

        // Update global box and array (I am adding a tiny border to the global box for better visibility)
        globalBox[0] = Math.min(globalBox[0], individualBox[0]-0.005);
        globalBox[1] = Math.max(globalBox[1], individualBox[1]+0.005);
        globalBox[2] = Math.min(globalBox[2], individualBox[2]-0.005);
        globalBox[3] = Math.max(globalBox[3], individualBox[3]+0.005);
        allData.splice(0, 48, ...makeBox(globalBox, greenColor));

        // Reset numPoints and individualBox
        numPoints = 0;
        numTriangles++;
        individualBox = [Infinity, -Infinity, Infinity, -Infinity];
    }
}

// Makes the global and individual boxes
function makeBox(box, color) {
    let minX = box[0];
    let maxX = box[1];
    let minY = box[2];
    let maxY = box[3];

    return [
        minX, minY, ...color,
        maxX, minY, ...color,
        maxX, minY, ...color,
        maxX, maxY, ...color,
        maxX, maxY, ...color,
        minX, maxY, ...color,
        minX, maxY, ...color,
        minX, minY, ...color
    ];
}

// Makes GL calls to transfer vertices
function updateBuffers() {
	gl.bindBuffer(gl.ARRAY_BUFFER, allBuffer);
	
	// Positions
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, bpv, 0);
	gl.enableVertexAttribArray(vPosition);

	// Colors
	gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, bpv, 8);
	gl.enableVertexAttribArray(vColor);
}

// Render loop
function render() {
	// Clear the display with the background color
    gl.clear( gl.COLOR_BUFFER_BIT );

	frame_counter++;

    // Send data to GPU
    gl.bindBuffer(gl.ARRAY_BUFFER, allBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(allData));

	updateBuffers();

    let offset = 0;

    // Draws global box
    gl.drawArrays(gl.LINES, offset, 8);
    offset += 8;

    // Loops data array until done
    while (offset < allData.length / 6) {
        let remaining = (allData.length / 6) - offset;

        // Draw remaining number of points
        gl.drawArrays(gl.POINTS, offset, Math.min(3, remaining));

        // Draw full triangles
        if (remaining >= 3) gl.drawArrays(gl.TRIANGLES, offset, 3);
        offset += 3;

        // Draw individual boxes
        gl.drawArrays(gl.LINES, offset, 8);
        offset += 8;
    }

	// Render
	let delay = 100   // in ms
	setTimeout(
		function (){requestAnimFrame(render);}, delay
    );
}