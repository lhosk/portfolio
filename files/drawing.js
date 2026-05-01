// some globals
var gl;
var program;

var vBuffer;
var cBuffer;
var vPosition;
var vColor;

let vertices = [];
let colors = [];
let mode = ""; // used for eraser and drawer (made none so "draw" must be clicked to draw)
let lastBufferUpdate = 0; // used to only update buffer every 25 ms

const alpha = 1.0; // makes colors completely solid
var frame_counter = 0; // frame counter

let isDrawing = false; // state changer

// Your GL program starts after the HTML page is loaded, indicatedby the onload event
window.onload = function init() {
	// get the canvas handle from the document's DOM
    let canvas = document.getElementById("gl-canvas");
    
	// initialize webgl
	gl = initWebGL(canvas);

	// check for errors
    if ( !gl ) { 
		alert( "WebGL isn't available" ); 
	}

	// clear the display with a background color 
    gl.clearColor(0.5, 0.5, 0.5, 1.0);

    //  Initialize and load shaders -- all work done in init_shaders.js
    program = initShaders( gl, "vertex-shader", "fragment-shader" );

	// make this the current shader program
    gl.useProgram( program );

	// create a vertex buffer - this will hold all vertices
    vBuffer = gl.createBuffer();
	cBuffer = gl.createBuffer();

	// allocate space
	gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, 20000, gl.STATIC_DRAW);
	gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, 30000, gl.STATIC_DRAW);


	// get locations
	vPosition = gl.getAttribLocation(program, "vPosition");
	vColor = gl.getAttribLocation(program, "vColor");

	// call the mouse
	mouse(canvas);

	// render the drawings
    render();
};

// add point to the buffer
function addPoint(x, y, r, g, b, alpha) {
	let bytes = vertices.length / 2;
	vertices.push(x,y);
	colors.push(r, g, b, alpha);

	// update buffers
	gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
	gl.bufferSubData(gl.ARRAY_BUFFER, bytes*8, new Float32Array([x, y]));

	gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
	gl.bufferSubData(gl.ARRAY_BUFFER, bytes*16, new Float32Array([r, g, b, alpha]));
	
	// log the changes to the arrays
	console.log("Length of vertices:", vertices.length, "   Length of colors:", colors.length);
}

// converts mouse coords to canvas coords
function coordinatesToCanvas(eventx, canvas){
	let ijk = canvas.getBoundingClientRect();
	let x = (eventx.clientX - ijk.left) / ijk.width * 2 - 1;
	let y = (ijk.height - (eventx.clientY - ijk.top)) / ijk.height * 2 - 1;
	return {x, y};
}

// deletes point(s) from the buffer (acts as the eraser)
function deletePoint(x, y) {

	const eraserRadius = 0.1;

	// calculates distance from eraser point to check if vertices are within that distance (if so: delete
	for (let i = (vertices.length/2) - 1; i >= 0; i--)  {
		let del_x = vertices[i*2];
		let del_y = vertices[i*2 + 1];

		let dist_from_click = Math.sqrt((del_x-x)**2 + (del_y-y)**2)

		if (dist_from_click < eraserRadius) {
			vertices.splice(i*2, 2);
			colors.splice(i*4, 4)
		}
	}

	let now = Date.now();
	if (now - lastBufferUpdate > 25) { // updates the buffers every 25 ms
	lastBufferUpdate = now;

	gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
	gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(vertices));

	gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
	gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(colors));

	console.log("Update Buffer")
	}
	// log the changes to the arrays
	console.log("Length of vertices:", vertices.length, "   Length of colors:", colors.length);
}

// Draw with the mouse if button is down and mouse is moving
function mouse(canvas){
	canvas.addEventListener("mousedown", () => isDrawing = true)
	canvas.addEventListener("mouseup", () => isDrawing = false)
	canvas.addEventListener("mousemove", function (event) {
		if (isDrawing && mode == "draw") { // converts to coordinate system and pushes position and random color
			// console.log("getNDC:", typeof getNDC);
			let {x,y} = coordinatesToCanvas(event, canvas);
			addPoint(x, y, Math.random(), Math.random(), Math.random(), alpha);
		} 
		if (isDrawing && mode == "erase") { // converts to coordinate system and deletes previous position and colors
			let {x,y} = coordinatesToCanvas(event, canvas);
			deletePoint(x, y);
		}
	});
};

// render loop
function render() {
	// clear the display with the background color
    gl.clear( gl.COLOR_BUFFER_BIT );

	frame_counter++;

	updateBuffers(vertices, colors);
	gl.drawArrays(gl.POINTS, 0, vertices.length /2);

	// render with specified delay
	let delay = 100   // in ms
	setTimeout(
		function (){requestAnimFrame(render);}, delay
    );
}

// changes mode between draw and erase
function changeMode(newMode){
	mode = newMode;
	// console.log("Mode:", mode);
}

// makes GL calls to transfer vertices
function updateBuffers(vertices, colors) {

	// position
	// bind the buffer, i.e. this becomes the current buffer
	gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
	// gl.bufferData(gl.ARRAY_BUFFER, 20000, gl.STATIC_DRAW)
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);

	// color
	// bind the buffer, i.e. this becomes the current buffer
	gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
	// gl.bufferData(gl.ARRAY_BUFFER, 30000, gl.STATIC_DRAW)
	gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vColor);

}