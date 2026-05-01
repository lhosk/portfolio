// Globals
var gl;
var program;
let frame_counter = 0;
let vertexBuffer, indexBuffer, colorBuffer;
let vColor, vPosition;
let uModelToWorldLoc, uColorLoc, uWorldToNDCLoc;
let aliveCubes = [];

// Flag to start and stop simulations
let mode = false;
function allowCubes(TrueOrFalse) {mode = TrueOrFalse};

// World to NDC tranformation
const worldToNDC = [
    1/1.2, 0.0  , 0.0  , 0.0,
    0.0,   1/1.2, 0.0  , 0.0,
    0.0,   0.0  , 1/1.2, 0.0,
    0.0,   0.0  , 0.0  , 1.0
];

// Create base cube model
// Cube vertices
const vertices = new Float32Array([
    -0.5, -0.5,  0.5,
     0.5, -0.5,  0.5,
     0.5,  0.5,  0.5,
    -0.5,  0.5,  0.5,
    -0.5, -0.5, -0.5,
     0.5, -0.5, -0.5,
     0.5,  0.5, -0.5,
    -0.5,  0.5, -0.5
]);
// Making the faces via triangles
const indices = new Uint16Array([
    0, 1, 2, 0, 2, 3,
    4, 5, 6, 4, 7, 6,
    0, 1, 4, 5, 1, 4,
    3, 2, 7, 6, 2, 7,
    1, 5, 6, 1, 2, 6,
    0, 4, 7, 0, 3, 7
]);
// Cube colors (Used an extra buffer for this)
const colors = new Float32Array([
    1.0, 0.0, 0.0, 1.0,
    1.0, 1.0, 0.0, 1.0,
    1.0, 1.0, 1.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    0.3, 0.3, 0.3, 1.0,
    0.0, 0.0, 1.0, 1.0,
    0.0, 0.0, 0.0, 1.0,
    0.3, 0.7, 0.3, 1.0
]);

// GL program starts after HTML page is loaded
window.onload = function init() {
    let canvas = document.getElementById("gl-canvas");
	gl = initWebGL(canvas);
    if ( !gl ) {alert( "WebGL isn't available" )};

	// Clear display with background 
    gl.clearColor(0.5, 0.5, 0.5, 1.0);
	gl.enable(gl.DEPTH_TEST)

    //  Load shaders
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

	// Get locations
	uModelToWorldLoc = gl.getUniformLocation(program, "uModelToWorld");
    uWorldToNDCLoc = gl.getUniformLocation(program, "uWorldToNDC");
	uColorLoc = gl.getUniformLocation(program, "uColor");

    gl.uniformMatrix4fv(uWorldToNDCLoc, false, flatten(worldToNDC));

	//  Render
    render();
};

// Create buffers to transfer data
function updateBuffers() {
	// Create vertex buffer
	vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
	vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);

    // Create index buffer
	indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

	// Create color buffer
	colorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
	vColor = gl.getAttribLocation(program, "vColor");
	gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vColor);
}

// Static transformation
const staticTransform = (() => {
    let rotX = rotate4x4(-0.5, 'x');
    let rotY = rotate4x4(2.5, 'y');
    let rot = matMult(rotY, rotX);
    let scale = scale4x4(0.25, 0.25, 0.25);
    return matMult(scale, rot);
})();

// Create x number of cubes in a random direction with a random rotation speed and push them to "activeCubes"
function createCubes(count = 1) {
    for (let i = 0; i < count; i++) {
        let dir = normalize([(Math.random() - 0.5), (Math.random() - 0.5),(Math.random() - 0.5) ]); // Direction
        let rotSpeed = [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10]; // Rotation Speed
        aliveCubes.push({dir: dir, timeInitial: frame_counter, rotSpeed: rotSpeed});
    }
}

// Update information about each cube, else delete if they have lived for 200ms
function updateMovingCubes(baseRot) {
	// Temporary cube holder to update info
    let newCubes = [];
    for (let i = 0; i < aliveCubes.length; i++) {
        let currentCubes = aliveCubes[i];
        let timeAlive = frame_counter - currentCubes.timeInitial;
        if (timeAlive < 200) {
            let dist = timeAlive * 0.01;

			// Translation + Scalar
            let translate = translate4x4(currentCubes.dir[0] * dist, currentCubes.dir[1] * dist, currentCubes.dir[2] * dist);
            let scale = scale4x4(0.06, 0.06, 0.06);            
			
			// Rotation
            let angle = timeAlive * 0.02;
            let rotX = rotate4x4(angle * currentCubes.rotSpeed[0], 'x');
            let rotY = rotate4x4(angle * currentCubes.rotSpeed[1], 'y');
            let rotZ = rotate4x4(angle * currentCubes.rotSpeed[2], 'z');
            let cubeRot = matMult(rotZ, matMult(rotY, rotX));
            
			// Total transformation + Draw
            let transform = matMult(translate, matMult(cubeRot, scale));
            gl.uniformMatrix4fv(uModelToWorldLoc, false, flatten(transform));
            gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
            newCubes.push(currentCubes);
        }
    }
    aliveCubes = newCubes;
}

// Render loop
function render() {
    // Clear display with background
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    frame_counter++;
    updateBuffers();
    
	// Updates and draws the moving cubes
	updateMovingCubes();

	// Only add (and draw static) cubes if simulation is on
	if (mode == true) {
	    gl.uniformMatrix4fv(uModelToWorldLoc, false, flatten(staticTransform));
		gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
        
		if (frame_counter % 20 === 0) createCubes(7);	
	}

	// Render 
    setTimeout(function (){requestAnimFrame(render);}, 10);
}