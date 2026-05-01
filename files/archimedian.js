// Globals
var gl;
var program;
let frameCounter = 1;

let vPosition, vColor;
let mmodelToWorld = null;
let mworldToNDC = null;
let spiralClicked = false;
let squaresClicked = false;

let num_drawing_points = 0;
let spiralPoints = 0;

let allBuffer;
let ndcBounds = [];
let bufferArray = [];
let spiralArray = [];
let squareArray = [];
let movingSquares = [];

// GL program starts after HTML page is loaded
window.onload = function init() {
    let canvas = document.getElementById("gl-canvas");
	gl = initWebGL(canvas);
    if ( !gl ) {alert( "WebGL isn't available" )};

	// Clear display with background 
    gl.clearColor(0.5, 0.5, 0.5, 1.0);

    // Load shaders -- all work done in init_shaders.js
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram(program);

	// Create one buffer
	allBuffer = gl.createBuffer();

	// Get Locations
	vPosition = gl.getAttribLocation(program, "vPosition");
	vColor = gl.getAttribLocation(program, "vColor");
	mmodelToWorld = gl.getUniformLocation(program, "mmodelToWorld");
	mworldToNDC = gl.getUniformLocation(program, "mworldToNDC")

    render();
};

// Add squares to the point (x,y)
function addSquares(x, y, angle, color) {
	const size = 0.02;
  	const cosA = Math.cos(angle);
  	const sinA = Math.sin(angle);

	// Make the model of a square
	const originalSquare = [
		[-size, -size],
		[-size,  size],
		[ size,  size],
		[ size, -size]
	];

	// Rotate each corner and shift, storing the changes
	for (let i = 0; i < 4; i++) {
    	const ix = originalSquare[i][0], iy = originalSquare[i][1];

    	// Rotate and Translate functions
    	const rx = ix * cosA - iy * sinA;
    	const ry = ix * sinA + iy * cosA;
    	const tx = rx + x;
    	const ty = ry + y;

		squareArray.push(tx, ty, 0.0, 1.0);
		squareArray.push(color[0], color[1], color[2], 1.0);
  }
}

// Make all the points for the archimedian spiral (send to array: positions and array: colors)
function makeSpiral(num_pts) {
	let b = 0.025;

	// Arbitrary scalar and transformation values that I used
	const scaleX = 2.0;
	const scaleY = 0.5;
	const translationX = 0.5
	const translationY = -0.25

	// Determine min and max values for worldToNDC conversion
	let minX = Infinity
	let maxX = -Infinity
	let minY = Infinity
	let maxY = -Infinity	

	// Make spiral, convert to world, and determine bounds
	for (let k = 0; k < num_pts; k++) {
		let theta = k * 0.1 ;
		let r = b * theta;
		let x = r * Math.cos(theta);
		let y = r * Math.sin(theta);

		// define data in model coords
		spiralArray.push(x, y, 0.0, 1.0);
		spiralArray.push(1.0, 1.0, 0.0, 1.0);

		// determine bounds for worldToNDC conversion
		const xw = scaleX * x + translationX;
        const yw = scaleY * y + translationY;
        if (xw < minX) minX = xw;
        if (xw > maxX) maxX = xw;
        if (yw < minY) minY = yw;
        if (yw > maxY) maxY = yw;
	}

	const matrixModelToWorld = modelToWorld(scaleX, scaleY, translationX, translationY);
    ndcBounds = worldToNDC(minX, maxX, minY, maxY);

	gl.uniformMatrix4fv(mmodelToWorld, false, flatten(matrixModelToWorld));
	gl.uniformMatrix4fv(mworldToNDC,   false, flatten(ndcBounds));

	// Use to draw number of points later
	num_drawing_points = num_pts;
	spiralPoints = num_pts;

	// Upload to buffer
	bufferArray = [...spiralArray]
	gl.bindBuffer(gl.ARRAY_BUFFER, allBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferArray), gl.STATIC_DRAW);
	
	// Now that the spiral has been drawn, allow the squares to be drawn
	spiralClicked = true;

	// Disable the button
	document.querySelectorAll("button")[0].disabled = true
}

// Converts values from model to world
function modelToWorld(scaleX, scaleY, translationX, translationY) {
	let scale = scale4x4(scaleX, scaleY, 1);
	let translation = translate4x4(translationX, translationY, 0);
	return matMult(translation, scale)
}

// Convert values from world to NDC
function worldToNDC(minX, maxX, minY, maxY) {
	let translation1 = translate4x4(-minX, -minY, 0);
	let translation2 = translate4x4(-1, -1, 0);
	let scale1= 2/(maxX - minX);
	let scale2= 2/(maxY - minY);
	let scale = scale4x4(scale1, scale2, 1);
	return matMult(translation2, matMult(scale, translation1));
}

// Makes GL calls to transfer vertices
function updateBuffers() {
	gl.bindBuffer(gl.ARRAY_BUFFER, allBuffer);

	let bpv = 8 * 4; // bytes per vertex

	// Positions
	gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, bpv, 0);
	gl.enableVertexAttribArray(vPosition);

	// Colors
	gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, bpv, 16);
	gl.enableVertexAttribArray(vColor);
}

// Starts activating the squares
function activateSquares() {
	if (!spiralClicked) return; 
	squaresClicked = true;

	// Disable the button
	document.querySelectorAll("button")[1].disabled = true
}

// Updates everything about the squares! (position, color, adds squares, updates buffer)
function updateMovingSquares() {
	// Move each movingSquare forward every 5 frames and stop using the squares that have reached the end
	// The reason I had to add this is because the squares that reached the end would start again in the middle
	if (frameCounter % 5 == 0) {
		for (let ms of movingSquares) {

			// If the movingSquare has not reached the end, move it up an index to the next point on the spiral
			if (!ms.done) {
				ms.idx += 1;
				
				// Turn the movingSquare off if it has reached the end
				if (ms.idx >= spiralPoints - 1) {
					ms.idx = spiralPoints -1;
					ms.done = true;
				}
			}
		}
		// Delete the movingSquare that has reached the end of the sprial
		movingSquares = movingSquares.filter(ms => !ms.done)
	}

  // Add a Square with a random color every 75 frames
  if (squaresClicked && frameCounter % 75 === 0) {
    movingSquares.push({idx: 0, color: [Math.random(), Math.random(), Math.random()], done: false})
  }

  // Update squareArray with current position
  squareArray = [];
  const angle = frameCounter * 0.05; // global spin
  for (let ms of movingSquares) {
    x = spiralArray[ms.idx * 8];
    y = spiralArray[ms.idx * 8 + 1];
    addSquares(x, y, angle, ms.color);
  }

  // Update buffer with new squares + new positions
  bufferArray = [...spiralArray, ...squareArray];
  num_drawing_points = spiralPoints + (squareArray.length / 8);

  gl.bindBuffer(gl.ARRAY_BUFFER, allBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferArray), gl.STATIC_DRAW);
}

// Render loop
function render() {
	// Clear the display with the background color
    gl.clear( gl.COLOR_BUFFER_BIT );

	frameCounter++;

	updateMovingSquares();
	updateBuffers();

	// draws the spirals
	gl.drawArrays(gl.POINTS, 0, spiralPoints)

	// draws the moving squares
	for (let i = spiralPoints; i + 3 < num_drawing_points; i += 4) {
			gl.drawArrays(gl.TRIANGLE_FAN, i, 4);
	}

	// Render
	let delay = 10   // in ms
	setTimeout(
		function (){requestAnimFrame(render);}, delay
    );
}