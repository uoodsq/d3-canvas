d3.js Canvas
============
A plugin for d3.js for rendering to HTML5 canvas.

Usage
-----
D3 is all about binding data to elements.  However, unlike SVG, canvas is driven by a JavaScript API, and not DOM elements.

### d3.canvas.line
```javascript
var data = [[0, 1], [1, 1], [2, 2], [3, 3], [4, 5]], line;

// the svg way
line = d3.svg.line();
d3.select('path').datum(data).attr('d', line);

// using d3.canvas
line = d3.canvas.line();
d3.select('canvas').call(line(data));
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
d3.select('canvas').call(area(data));
```
