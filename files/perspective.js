// Work by Lucas Hoskin

// Globals
var gl, program;
let frame_counter = 0;
let vertexBuffer, indexBuffer, colorBuffer;
let vPosition, vColor;
let uModelLoc, uCameraLoc, uPerspectiveLoc;

// Default params
const params_def = {
	scale_width: 0.01,
	scale_height: 0.01,
	zoom: 1.0,
	near_clipping: 1.5,
	far_clipping: 4,
	pan_x: 0.0,
	pan_y: 0.0
};

let params = { ...params_def };

// mouse
let isLeftDragging = false;
let lastX = 0;
let lastY = 0;

// GL program starts after HTML page is loaded
window.onload = function init() {
	let canvas = document.getElementById("gl-canvas");
	gl = initWebGL(canvas);
	if (!gl) {alert("WebGL isn't available")};

	// Clear display with background
	gl.clearColor(0.5, 0.5, 0.5, 1.0);
	gl.enable(gl.DEPTH_TEST);

	// Load shaders
	program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);

	// Get locations
	uModelLoc = gl.getUniformLocation(program, "uModel");
	uCameraLoc = gl.getUniformLocation(program, "uCamera");
	uPerspectiveLoc = gl.getUniformLocation(program, "uPerspective");

	setupMouseControls(canvas);
	setupKeyboard();
	setupSliders();

	updateUniforms();

	// Render
	render();
};

// pan (hold left click down and move) and zoom (middle mouse scroll)
function setupMouseControls(canvas) {
	canvas.addEventListener("contextmenu", e => e.preventDefault());

	canvas.addEventListener("mousedown", (e) => {
		if (e.button === 0) isLeftDragging = true;
		lastX = e.clientX;
		lastY = e.clientY;
	});

	canvas.addEventListener("mouseup", (e) => {
		if (e.button === 0) isLeftDragging = false;
	});

	canvas.addEventListener("mousemove", (e) => {
		const dx = e.clientX - lastX;
		const dy = e.clientY - lastY;
		lastX = e.clientX;
		lastY = e.clientY;

		if (isLeftDragging) {
			params.pan_x += dx * 0.01;
			params.pan_y -= dy * 0.01;
			updateUniforms();
		}
	});

	canvas.addEventListener("wheel", (e) => {
		e.preventDefault();
		params.zoom += e.deltaY * 0.001;
		params.zoom = Math.max(0.1, params.zoom);
		updateUniforms();
	});
}

// keyboard reset with r
function setupKeyboard() {
	window.addEventListener("keydown", (e) => {
		if (e.key === "r" || e.key === "R") {
			params = { ...params_def };
			updateUniforms();
		}
	});
}

// Transformations
function transform(scale_width, scale_height, zoom, pan_x, pan_y, near_clipping, far_clipping) {
	// model
	const scale = scale4x4(scale_width, scale_height, 0.01);
	const rotX = rotate4x4(0.0, 'y');
	const rotY = rotate4x4(0.5, 'x');
	const rotation = matMult(rotY, rotX);
	const model = matMult(rotation, scale);

	// camera
	const camera = translate4x4(pan_x, pan_y, -zoom * 2);

	// translation + clippings
	const left   = -2.0 * zoom;
	const right  =  2.0 * zoom;
	const bottom = -2.0 * zoom;
	const top    =  2.0 * zoom;
	const near   = near_clipping;
	const far    = far_clipping;

	const perspective = [
		[2 / (right - left), 0, 0, -(right + left) / (right - left)],
		[0, 2 / (top - bottom), 0, -(top + bottom) / (top - bottom)],
		[0, 0, -2 / (far - near), -(far + near) / (far - near)],
		[0, 0, 0, 1]
	];
	perspective.matrix = true;

	return { model, camera, perspective };
}

// Update uniforms
function updateUniforms() {
	let { model, camera, perspective } = transform(
		params.scale_width,
		params.scale_height,
		params.zoom,
		params.pan_x,
		params.pan_y,
		params.near_clipping,
		params.far_clipping
	);

	gl.uniformMatrix4fv(uModelLoc, false, flatten(model));
	gl.uniformMatrix4fv(uCameraLoc, false, flatten(camera));
	gl.uniformMatrix4fv(uPerspectiveLoc, false, flatten(perspective));
}

// Sliders for parameters
function setupSliders() {
	const ids = {
		scaleWidth: "scale_width",
		scaleHeight: "scale_height",
		nearClip: "near_clipping",
		farClip: "far_clipping"
	};

	for (let id in ids) {
		document.getElementById(id).addEventListener("input", (e) => {
			params[ids[id]] = parseFloat(e.target.value);
			updateUniforms();
		});
	}
}

// Create buffers to transfer data
function updateBuffers() {
	// Create vertex buffer
	vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(teapot_vertices), gl.STATIC_DRAW);
	vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);

	// Generate colors (used ChatGPT for this section because my version looked UGLY)
	let colors = [];
	for (let [x, y, z] of teapot_vertices) {
		let len = Math.sqrt(x * x + y * y + z * z);
		let nx = x / len, ny = y / len, nz = z / len;
		colors.push([0.5 * (nx + 1.0), 0.5 * (ny + 1.0), 0.5 * (nz + 1.0), 1.0]);
	}

	// Create color buffer
	colorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW);
	vColor = gl.getAttribLocation(program, "vColor");
	gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vColor);

	// Create index buffer
	indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(teapot_indices), gl.STATIC_DRAW);
}

// Render loop
function render() {
	// Clear display with background
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	updateBuffers();
	gl.drawElements(gl.TRIANGLES, teapot_indices.length, gl.UNSIGNED_SHORT, 0);
	requestAnimFrame(render);
}