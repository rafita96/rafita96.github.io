var width = 1920;
var height = 270;

var colors = ['#ff0066', '#FFE919', '#B31252', '#19D7FF', '#0995B3'];
var size = 20;
var mainColor = colors[Math.floor(Math.random() * colors.length)];

// const lerp = (x, y, a) => x * (1 - a) + y * a;

var pt = draw.node.createSVGPoint();
var cursor = pt;

function getRandomCircle() {
	let cx = Math.floor(Math.random() * (width - size));
	let cy = Math.floor(Math.random() * height);
	let fill = colors[Math.floor(Math.random() * colors.length)];

	return { cx, cy, fill };
}


function buildDots(draw, number) {
	let dots = [];
	for (let i = 0; i < number; i++) {
		let dot = draw.circle(size).attr(getRandomCircle());

		dots.push(dot);
	}

	return dots;
}

function init() {
	let draw = SVG().addTo('#game').viewbox(0, 0, width, height);
	let dots = buildDots(draw, 100);

	// let runners = dots.map((dot) => {
	// 	console.log();
	// 	return dot.animate();
	// });

	// let runners = dots
	// 				// .filter(dot => dot.node.getAttribute('fill').toLowerCase() === mainColor.toLowerCase())
	// 				.map(dot => {
	// 					dot.animate(100, '<>').during(function(pos, morph, eased){
	// 					    dot.dmove(0, 1);
	// 					    if (dot.node.cy > height + size) {
	// 					    	dot.move(dot.node.cx, 0);
	// 					    }
	// 					}).loop()
	// 				});

	// Create an SVGPoint for future math
	

	// console.log(dots);
	fall(dots);

	// Get point in global SVG space
	function cursorPoint(evt){
		pt.x = evt.clientX; pt.y = evt.clientY;
		return pt.matrixTransform(draw.node.getScreenCTM().inverse());
	}

	document.addEventListener('mousemove', function(e) {
		cursor = cursorPoint(e);
	});
}

function follow(runner, p) {
	let dx = lerp(runner.node.cx, p.x, 0);
	let dy = lerp(runner.node.cy, p.y, 0);
    // var p = path.pointAt(eased * length)
    runner.move(dx, dy);
}

function fall (dots) {

	dots.forEach(dot => {
		
		dot.dmove((dot.cx() - cursor.x)/0.01, (dot.cy() - cursor.y)/0.01);
		// if (dot.cy() > height + size) {
		// 	dot.move(Math.floor(Math.random() * (width - size)), -(size*2));
		// }		
	});
    setTimeout(() => fall(dots), 16.7); // callback
}

window.onload = init;