// Work by Lucas Hoskin

// Globals
var gl;
var program;
let frame_counter = 0;
let allBuffer;
let allParticles = [];
let allArray;

let vx;
let vy;
let ay;
let particleColor;

let simulationFlag = false;


// GL program starts after HTML page is loaded
window.onload = function init() {
    let canvas = document.getElementById("gl-canvas");
	gl = initWebGL(canvas);
    if (!gl) {alert("WebGL isn't available")};

	// Background 
    gl.clearColor(0.9, 0.9, 0.9, 1.0);

	// Set viewport to match canvas
	gl.viewport(0, 0, canvas.width, canvas.height);

    // Load shaders
    program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    render();
};


// World to NDC 
	// World coordinates
	const worldBounds = {
		xmin: 0,
		xmax: 10,
		ymin: 0,
		ymax: 15
	}

	// World to NDC conversion (NDC: [-1, 1] in both x and y)
	function worldToNDC(xw, yw) {
		let x_ndc = 2 * (xw - worldBounds.xmin) / (worldBounds.xmax - worldBounds.xmin) - 1;
		let y_ndc = 2 * (yw - worldBounds.ymin) / (worldBounds.ymax - worldBounds.ymin) - 1;
		return [x_ndc, y_ndc];
	}


// Making the volcano and combine data
	// Make all the colors of the volcano the same 
	const brown_color = [0.5, 0.4, 0.3, 1.0];

	// Make a volcano using triangle_fan with four points
	let volcanoDataWorld = [
		[0, 0, ...brown_color],
		[10,0, ...brown_color],
		[5.7, 6.16, ...brown_color],
		[4.3, 6.16, ...brown_color],
		[3.5, 2.0, ...brown_color]
	];

	let volcanoDataNDC = volcanoDataWorld.flatMap(([x, y, r, g, b, a]) => {
		const [xn, yn] = worldToNDC(x, y);
		return [
			xn, yn, r, g, b, a,
			0, 0, 0, 0, 0, 0, -1
		];
	});

	// Function to combine data and for gpu motion calculations
	function dataToNDC() {
		const volcanoCount = volcanoDataNDC.length / 13;

		const particleData = allParticles.flatMap(p => {
			const [xn, yn] = worldToNDC(p.startX, p.startY);
			return [
				0, 0,
				p.particleColor[0], p.particleColor[1], p.particleColor[2], p.particleColor[3],
				p.startX, p.startY,
				p.vx, p.vy,
				p.ax, p.ay,
				p.startFrame
			];
		});

		allArray = [...volcanoDataNDC, ...particleData];
		return volcanoCount;
	}


// Making the volcano's particles
function makeParticles(huge = false) {
	// initial position
	const startX = 4.4 + Math.random() * 1.2;
	const startY = 6.2;
	// acceleration
	const ax = 0;

	if (Math.floor(allParticles.length / 20) % 2 === 0) {
		if (!huge) {
			// ballistic particle
			ay = -0.02;
			particleColor = [1, Math.random()*0.5, Math.random()*0.2, 0.9];
			vx = (Math.random() - 0.5) * 0.4;
			vy = 0.1 + Math.random() * 0.35;
		} else {
			// ballistic particle
			ay = -0.02;
			if (Math.random() < 0.5) {
				particleColor = [0.4 + Math.random()*0.6, Math.random()*0.4, Math.random()*0.2, 1.0];
				// particleColor = [0, 1, 0, 0]
			} else {
				particleColor = [1, Math.random()*0.9, Math.random()*0.6, 1.0];
				// particleColor = [0, 0, 0, 0]
			}
			vx = (Math.random() - 0.5) * 1;
			vy = 0.2 + Math.random() * 0.5;
		}
    } else { 
		// floating particle
        ay = 0.0;
		particleColor = [0.7, 0.7, 0.7, 0.9];
		vx = (Math.random() - 0.5) * 0.1;
		vy = 0.1 + Math.random() * 0.2;
    }
	const startFrame = frame_counter;

	return {startX, startY, vx, vy, ax, ay, particleColor, startFrame};
}


// Remove out of bounds particles
function removeOutOfBoundsParticles() {
    allParticles = allParticles.filter(p => {
		const t = frame_counter - p.startFrame;
		const currentX = p.startX + p.vx * t + 0.5 * p.ax * t * t;
		const currentY = p.startY + p.vy * t + 0.5 * p.ay * t * t;
		return (
			currentX >= worldBounds.xmin &&
			currentX <= worldBounds.xmax &&
			currentY >= worldBounds.ymin &&
			currentY <= worldBounds.ymax
		);
    });
}


// Update buffer
function updateBuffers() {
	allBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, allBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(allArray), gl.STATIC_DRAW);

	const bpv = 6*4; // bytes per vertex (2 for position, 4 for color, each float is 4 bytes)
	const bpv_2 = 13*4; // bytes per vertex (2 for position, 4 for color, 2 for start pos, 2 for velocity, 2 for acceleration, 1 for start frame, each float is 4 bytes)

	// Volcano data
		// Position
		gl.vertexAttribPointer(gl.getAttribLocation(program, "vPosition"), 2, gl.FLOAT, false, bpv_2, 0);
		gl.enableVertexAttribArray(gl.getAttribLocation(program, "vPosition"));

		// Color
		gl.vertexAttribPointer(gl.getAttribLocation(program, "vColor"), 4, gl.FLOAT, false, bpv_2, 2*4);
		gl.enableVertexAttribArray(gl.getAttribLocation(program, "vColor"));

	// Particle data
		// Position
		gl.vertexAttribPointer(gl.getAttribLocation(program, "pPosition"), 2, gl.FLOAT, false, bpv_2, 6*4);
		gl.enableVertexAttribArray(gl.getAttribLocation(program, "pPosition"));

		// Velocity
		gl.vertexAttribPointer(gl.getAttribLocation(program, "pVelocity"), 2, gl.FLOAT, false, bpv_2, 8*4);
		gl.enableVertexAttribArray(gl.getAttribLocation(program, "pVelocity"));

		// Acceleration
		gl.vertexAttribPointer(gl.getAttribLocation(program, "pAcceleration"), 2, gl.FLOAT, false, bpv_2, 10*4);
		gl.enableVertexAttribArray(gl.getAttribLocation(program, "pAcceleration"));

		// Start Frame
		gl.vertexAttribPointer(gl.getAttribLocation(program, "pStartFrame"), 1, gl.FLOAT, false, bpv_2, 12*4);
		gl.enableVertexAttribArray(gl.getAttribLocation(program, "pStartFrame"));
}

// Render loop
function render() {
	// Clear the display with background
    gl.clear( gl.COLOR_BUFFER_BIT );

	frame_counter++;

	if (simulationFlag && frame_counter % 3 === 0) {
		for (let i = 0; i < 40; i++) allParticles.push(makeParticles());
	}

	if (simulationFlag && frame_counter % 70 === 0) {
		for (let i = 0; i < 400; i++) allParticles.push(makeParticles(true));
	}

	removeOutOfBoundsParticles();

	const volcanoCount = dataToNDC();

	updateBuffers();

	const uFrame = gl.getUniformLocation(program, "uFrame");
	gl.uniform1f(uFrame, frame_counter);

	// Draw Volcano
	gl.drawArrays(gl.TRIANGLE_FAN, 0, volcanoCount);

	// Draw Particles
	if (allParticles.length > 0) {
		gl.drawArrays(gl.POINTS, volcanoCount, allParticles.length);
	}

	// Render
	let delay = 50   // in ms
	setTimeout(() => {requestAnimFrame(render);}, delay);
};

// Add button for simulation flag
document.addEventListener('DOMContentLoaded', (event) => {
	const toggleButton = document.getElementById('toggle-simulation');
	toggleButton.addEventListener('click', () => {
		simulationFlag = !simulationFlag;
		toggleButton.textContent = simulationFlag ? 'Stop Simulation' : 'Start Simulation';
	});
});