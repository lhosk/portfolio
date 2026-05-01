// some globals
var gl;

// Updated: added two starting thetas (one for each square)
var theta1 = 0;
var theta2 = Math.PI;
var thetaLoc, colorLoc; 

var direction = true;
var vBuffer;
var program;

var num_triangles = 0;
let vertices = [];

// Your GL program starts after the HTML page is loaded, indicated by the onload event
window.onload = function init() {
	// get the canvas handle from the document's DOM
    let canvas = document.getElementById("gl-canvas");
    
	// initialize webgl
	gl = initWebGL(canvas)

	// check for errors
    if ( !gl ) { 
		alert( "WebGL isn't available" ); 
	}

    // specify viewing surface geometry to display your drawings
    gl.viewport(0, 0, canvas.width, canvas.height);

	// clear the display with a background color specified as R,G,B triplet in 0-1.0 range
    gl.clearColor(79/255, 79/255, 79/255, 1.0);

    //  Initialize and load shaders -- all work done in init_shaders.js
    program = initShaders( gl, "vertex-shader", "fragment-shader" );

	// make this the current shader program
    gl.useProgram( program );

	// Get a handle to theta  - this is a uniform variable defined 
	// by the user in the vertex shader, the second parameter should match
	// exactly the name of the shader variable
    thetaLoc = gl.getUniformLocation(program, "theta");

	// we are also going manipulate the vertex color, so get its location
	colorLoc = gl.getUniformLocation(program, "vertColor");

	// set an initial color for all vertices
	gl.uniform4fv (colorLoc, [1., 0., 0., 1.])

	// create a vertex buffer - this will hold all vertices
    vBuffer = gl.createBuffer();

	// get the vertices to generate a square shape
	vertices = getSquareVertices([0., 0.], 0.8);
	
	// Updated: Add the second square to vertices array
	getSquareVertices([0.7, 0.], 0.5);

	// buffer calls to send vertex data to the shader
	updateBuffers(vertices);

	// render the square
    render();
};


function getSquareVertices(center, width) {
	let s = width/5.;

	// Square 1
		// triangle 1
		vertices.push([center[0], center[1] + s])
		vertices.push([center[0]-s, center[1]])
		vertices.push([center[0], center[1]-s])

		// triangle 2
		vertices.push([center[0], center[1] + s])
		vertices.push([center[0], center[1]-s])
		vertices.push([center[0]+s, center[1]])

	num_triangles +=2;

	return vertices;
}

// this function makes the needed GL calls to transfer vertices
function updateBuffers(vertices) {

	// bind the buffer, i.e. this becomes the current buffer
	gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);

	// transfer the data -- this is actually pretty inefficient!
	// flatten() function is defined in utils.js - this simply creates 
	// a flat vertex coordinate data array - all other metadata in Javascript
	// arrays should not be in the vertex buffer.
	gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);
	
	// Associate out shader variables with our data buffer
	// note: "vposition" is a named variable used in the vertex shader and is
	// associated with vPosition here
	let vPosition = gl.getAttribLocation(program, "vPosition");

	// specify the format of the vertex data - here it is a float with
	// 2 coordinates per vertex - these are its attributes
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);

	// enable the vertex attribute array 
	gl.enableVertexAttribArray(vPosition);

	// Note: we will use a single color for all primitives and so we will directly set
	// the color in the GPU's fragment shader. If you do need to set individual
	// colors for each vertex, then you will need to send a color buffer, 
	// similar to the vertex buffer, with associated shader variables for color.
}

var frame_counter = 0;
let color_vals = [Math.random(), Math.random(), Math.random(), 1.];

// render loop
function render() {
	// clear the display with the background color
    gl.clear( gl.COLOR_BUFFER_BIT );

	// rotate the square by a small angle
	theta1 += 0.02;   // in radians!
	theta2 += 0.1;   // Updated: add second theta!
	frame_counter++;

	// Updated: Moved all lines to one section
	gl.uniform1f(thetaLoc, theta1);
	gl.uniform4fv (colorLoc, color_vals)
	gl.drawArrays(gl.TRIANGLES, 0, 6);

	// Updated; Make a constant color for the second square
	const color_vals2 = [1., 0.5, 0., 1];

	// Updated: Changing theta and color
	gl.uniform1f(thetaLoc, theta2);
	gl.uniform4fv (colorLoc, color_vals2)
	gl.drawArrays(gl.TRIANGLES, 6, 6);

	// set the color to change it every 10 frames -- we are using a random color
	frame_counter++;
	if (frame_counter%10 == 0) {
		color_vals = [Math.random(), Math.random(), Math.random(), 1.];
	}

	// render with specified delay
	let delay = 100   // in ms
	setTimeout(
		function (){requestAnimFrame(render);}, delay
    );
}
