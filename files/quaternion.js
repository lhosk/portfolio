// Globals
var gl;
var program;
let vertexBuffer, normalBuffer;
let teapotVertices = [];
let teapotNormals = [];

// Quaternion rotation
let quatRotation = [0, 0, 0, 1];
let lastQuat = [0, 0, 0, 1];
let isDragging = false;
let lastVec = [0, 0, 1];

// Light defaults
let lightPosition = vec4(0, 0, 100, 1);
let lightDiffuseIntensity = 1.0;
let lightSpecularIntensity = 1.0;

// Material defaults
let materialAmbient  = vec4(0.5, 0.5, 0.5, 1.0);
let materialDiffuse  = vec4(0.5, 0.5, 0.5, 1.0);
let materialSpecular = vec4(0.5, 0.5, 0.5, 1.0);
let shininessValue   = 25.0;

// Light colors (base)
const lightAmbientColor  = vec4(0.5, 0.5, 0.5, 1.0);
const lightDiffuseColor  = vec4(0.5, 0.5, 0.5, 1.0);
const lightSpecularColor = vec4(0.5, 0.5, 0.5, 1.0);

// Multiply two vec4s**
function vec4Product(a, b) {
	return vec4(a[0]*b[0], a[1]*b[1], a[2]*b[2], 1.0);
}

// Quaternion multiply
function quatMultiply(a, b) {
	return [
		a[3]*b[0] + a[0]*b[3] + a[1]*b[2] - a[2]*b[1],
		a[3]*b[1] - a[0]*b[2] + a[1]*b[3] + a[2]*b[0],
		a[3]*b[2] + a[0]*b[1] - a[1]*b[0] + a[2]*b[3],
		a[3]*b[3] - a[0]*b[0] - a[1]*b[1] - a[2]*b[2]
	];
}

// Quaternion to 4x4 matrix
function quatToMat4(q) {
	let x = q[0];
	let y = q[1];
	let z = q[2];
	let w = q[3];

	return [
		[1 - 2*(y*y + z*z), 2*(x*y - z*w),     2*(x*z + y*w),     0],
		[2*(x*y + z*w),     1 - 2*(x*x + z*z), 2*(y*z - x*w),     0],
		[2*(x*z - y*w),     2*(y*z + x*w),     1 - 2*(x*x + y*y), 0],
		[0,                  0,                0,                 1]
	];
}

// Canvas (x, y) to Trackball sphere)
function canvasToSphere(px, py, canvas) {
	let rect = canvas.getBoundingClientRect();

	let x = ((px - rect.left) / rect.width) * 2 - 1;
	let y = ((rect.bottom - py) / rect.height) * 2 - 1;

	let d = x*x + y*y;
	let r = 1.0;
	let z;

	if (d <= r*r*0.5) {z = Math.sqrt(r*r - d);} else {z = (r*r) / (2 * Math.sqrt(d));}

	return normalize(vec3(x, y, z));
}

// Trackball
function setupMouse(canvas) {
	canvas.addEventListener("mousedown", function (e) { // Left button down: Allows to move viewing
		if (e.button === 0) {
			isDragging = true;
			lastVec = canvasToSphere(e.clientX, e.clientY, canvas);
			lastQuat = quatRotation.slice();
		}
	});

	window.addEventListener("mouseup", function () {isDragging = false;}); // Left button up: Stop moving

	canvas.addEventListener("mousemove", function (e) { // Mouse move: Updates viewing if dragging
		if (!isDragging) return;

		let currentVec = canvasToSphere(e.clientX, e.clientY, canvas);
		let axis = cross_product(lastVec, currentVec);

		axis = normalize(axis);

		let dotVal = Math.max(-1, Math.min(1, dot_product(lastVec, currentVec)));
		let angle = Math.acos(dotVal);
		let s = Math.sin(angle / 2);

		let q = [axis[0]*s, axis[1]*s, axis[2]*s, Math.cos(angle / 2)];
		quatRotation = quatMultiply(q, lastQuat);

		updateUniforms();
	});
}

// Compute projection + viewing matrices
function computeTransforms() {
    // Transforms + Viewpoint
	let scaleMat = scale4x4(1.6, 1.6, 1.6);
	let rotMat = quatToMat4(quatRotation);
	let modelMat = matMult(rotMat, scaleMat);
	let viewMat = translate4x4(0.0, -1.5, -8.0);
	let modelView = matMult(viewMat, modelMat);
    // Perspective projection (basically taken from project 2)
	let near = 1.0;
	let far  = 50.0;
	let left   = -1.0;
	let right  =  1.0;
	let bottom = -1.0;
	let top    =  1.0;

	let projection = [
		[2*near/(right-left), 0, (right+left)/(right-left), 0],
		[0, 2*near/(top-bottom), (top+bottom)/(top-bottom), 0],
		[0, 0, -(far+near)/(far-near), -2*far*near/(far-near)],
		[0, 0, -1, 0]
	];

	return { modelView: modelView, projection: projection };
}

// Create buffers and send data
function initBuffers() {
	// Vertex positions
	vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(teapotVertices), gl.STATIC_DRAW);
	let vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);

	// Vertex normals
	normalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(teapotNormals), gl.STATIC_DRAW);
	let vNormal = gl.getAttribLocation(program, "vNormal");
	gl.vertexAttribPointer(vNormal, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vNormal);
}

// Update uniforms (matrices, light, material)
function updateUniforms() {
    // Matrices
	let transforms = computeTransforms();
	let modelView  = transforms.modelView;
	let projection = transforms.projection;
	gl.uniformMatrix4fv(gl.getUniformLocation(program, "uModelView"), false, flatten(modelView));
	gl.uniformMatrix4fv(gl.getUniformLocation(program, "uProjection"), false, flatten(projection));
	gl.uniform4fv(gl.getUniformLocation(program, "uLightPosition"), flatten(lightPosition));

    // Light and material shaders
	let diffuseLight = vec4(lightDiffuseColor[0] * lightDiffuseIntensity, lightDiffuseColor[1] * lightDiffuseIntensity, lightDiffuseColor[2] * lightDiffuseIntensity, 1.0);
	let specularLight = vec4( lightSpecularColor[0] * lightSpecularIntensity, lightSpecularColor[1] * lightSpecularIntensity, lightSpecularColor[2] * lightSpecularIntensity, 1.0);
	let ambientProduct  = vec4Product(lightAmbientColor,  materialAmbient);
	let diffuseProduct  = vec4Product(diffuseLight,       materialDiffuse);
	let specularProduct = vec4Product(specularLight,      materialSpecular);
	gl.uniform4fv(gl.getUniformLocation(program, "uAmbientProduct"),  flatten(ambientProduct));
	gl.uniform4fv(gl.getUniformLocation(program, "uDiffuseProduct"),  flatten(diffuseProduct));
	gl.uniform4fv(gl.getUniformLocation(program, "uSpecularProduct"), flatten(specularProduct));
	gl.uniform1f(gl.getUniformLocation(program, "uShininess"), shininessValue);
}

// Slider setup and callbacks (update uniforms in included in each line to show changes real time :/ )
function setupSliders() {
	// Setting up Sliders
	document.getElementById("lightX").addEventListener("input", function(e) {lightPosition[0] = Number(e.target.value); updateUniforms();});
	document.getElementById("lightY").addEventListener("input", function(e) {lightPosition[1] = Number(e.target.value); updateUniforms();});
	document.getElementById("lightZ").addEventListener("input", function(e) {lightPosition[2] = Number(e.target.value); updateUniforms();});
	document.getElementById("lightDiffuseIntensity").addEventListener("input", function(e) {lightDiffuseIntensity = Number(e.target.value); updateUniforms();});
	document.getElementById("lightSpecularIntensity").addEventListener("input", function(e) {lightSpecularIntensity = Number(e.target.value); updateUniforms();});
	document.getElementById("ambientRed").addEventListener("input", function(e) {materialAmbient[0] = Number(e.target.value); updateUniforms();});
	document.getElementById("ambientGreen").addEventListener("input", function(e) {materialAmbient[1] = Number(e.target.value); updateUniforms();});
	document.getElementById("ambientBlue").addEventListener("input", function(e) {materialAmbient[2] = Number(e.target.value); updateUniforms();});
	document.getElementById("diffuseRed").addEventListener("input", function(e) {materialDiffuse[0] = Number(e.target.value); updateUniforms();});
	document.getElementById("diffuseGreen").addEventListener("input", function(e) {materialDiffuse[1] = Number(e.target.value); updateUniforms();});
	document.getElementById("diffuseBlue").addEventListener("input", function(e) {materialDiffuse[2] = Number(e.target.value); updateUniforms();});
	document.getElementById("specularRed").addEventListener("input", function(e) {materialSpecular[0] = Number(e.target.value); updateUniforms();});
	document.getElementById("specularGreen").addEventListener("input", function(e) {materialSpecular[1] = Number(e.target.value); updateUniforms();});
	document.getElementById("specularBlue").addEventListener("input", function(e) {materialSpecular[2] = Number(e.target.value); updateUniforms();});
	document.getElementById("shininessSlider").addEventListener("input", function(e) {shininessValue = Number(e.target.value); updateUniforms();});

	// Reset values
	document.getElementById("resetBtn").addEventListener("click", function() {
        // resert sliders
		document.getElementById("lightX").value = 0;
		document.getElementById("lightY").value = 0;
		document.getElementById("lightZ").value = 100;
		document.getElementById("lightDiffuseIntensity").value  = 1.0;
		document.getElementById("lightSpecularIntensity").value = 1.0;
		document.getElementById("ambientRed").value   = 0.5;
		document.getElementById("ambientGreen").value = 0.5;
		document.getElementById("ambientBlue").value  = 0.5;
		document.getElementById("diffuseRed").value   = 0.5;
		document.getElementById("diffuseGreen").value = 0.5;
		document.getElementById("diffuseBlue").value  = 0.5;
		document.getElementById("specularRed").value   = 0.5;
		document.getElementById("specularGreen").value = 0.5;
		document.getElementById("specularBlue").value  = 0.5;
		document.getElementById("shininessSlider").value = 25;
        // reset variables
        lightPosition = vec4(0, 0, 100, 1);
        lightDiffuseIntensity  = 1.0;
        lightSpecularIntensity = 1.0;
        materialAmbient  = vec4(0.5,0.5,0.5,1.0);
        materialDiffuse  = vec4(0.5,0.5,0.5,1.0);
        materialSpecular = vec4(0.5,0.5,0.5,1.0);
        shininessValue   = 25.0;
		updateUniforms();
	});
}

// Render loop
function render() {
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 0, teapotVertices.length);
	requestAnimFrame(render);
}

// GL program starts after HTML page is loaded
window.onload = function init() {
	let canvas = document.getElementById("gl-canvas");
	gl = initWebGL(canvas);
	if (!gl) {alert("WebGL isn't available"); }

	// Clear background
	gl.clearColor(0.2, 0.2, 0.2, 1.0);
	gl.enable(gl.DEPTH_TEST);

	// Load shaders
	program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);

	// Create teapot geometry (resolution = 8)
	let teapotData = createTeapotGeometry(8);
	teapotVertices = teapotData[0];
	teapotNormals  = teapotData[1];

	// Setup everything
	setupMouse(canvas);
	setupSliders();
	initBuffers();
	updateUniforms();
	render();
};