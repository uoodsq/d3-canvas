d3.js Canvas
============
A plugin for d3.js for rendering to HTML5 canvas.

Usage
-----
D3 is all about binding data to elements.  However, unlike SVG, canvas is driven by a JavaScript API, and not DOM elements.

### d3.canvas.line (and radial)
```javascript
var data = [[0, 1], [1, 1], [2, 2], [3, 3], [4, 5]], line;

// the svg way
line = d3.svg.line();
d3.select('path').datum(data).attr('d', line);

// using d3.canvas
line = d3.canvas.line();
d3.select('canvas').call(line, data);
```

### d3.canvas.area
```javascript
var data = [{x: 0, y0: 5, y1: 10}, ...], area;

// the svg way
area = d3.svg.area()
  .x(function(d) { return d.x; })
  .y0(function(d) { return d.y0; })
  .y1(function(d) { return d.y1; });
d3.select('path').datum(data).attr('d', area);

// d3.canvas
area = d3.canvas.area()
  .x(function(d) { return d.x; })
  .y0(function(d) { return d.y0; })
  .y1(function(d) { return d.y1; });
d3.select('canvas').call(area, data);
```

### d3.canvas.arc
```javascript
var d = {
	innerRadius: 10,
	outerRadius: 20,
	startAngle: Math.PI / 3,
	endAngle: 5 * Math.PI / 3
};

// svg
var arc = d3.svg.arc();
d3.select('path').datum(d).attr('d', arc);

// canvas
var arc = d3.canvas.arc()
	.translate([30, 30]);
d3.select('canvas').call(arc, d);
```

Todo
----
- [d3.svg.symbolTypes](https://github.com/mbostock/d3/wiki/SVG-Shapes#symbolTypes)
- [d3.svg.chord](https://github.com/mbostock/d3/wiki/SVG-Shapes#chord)
- [d3.svg.diagonal](https://github.com/mbostock/d3/wiki/SVG-Shapes#diagonal)
- [d3.svg.diagonal.radial](https://github.com/mbostock/d3/wiki/SVG-Shapes#diagonal_radial)
- [Axes](https://github.com/mbostock/d3/wiki/SVG-Axes)
- [Controls](https://github.com/mbostock/d3/wiki/SVG-Controls)
- More testing (mock the canvas API!)
- Latest APIs?  Haven't touched this in probably several versions of d3!
