/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	window.d3 = window.d3 || {};

	d3.canvas = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	exports.arc = __webpack_require__(2);
	exports.area = __webpack_require__(3);
	exports.area.radial = __webpack_require__(4);
	exports.line = __webpack_require__(5);
	exports.line.radial = __webpack_require__(6);
	exports.symbol = __webpack_require__(7);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var innerRadius = function(d) { return d.innerRadius; },
		    outerRadius = function(d) { return d.outerRadius; },
		    startAngle = function(d) { return d.startAngle; },
		    endAngle = function(d) { return d.endAngle; },
		    arcOffset = - Math.PI / 2,
		    strokeStyle = 'transparent',
		    fillStyle,
		    lineWidth,
		    lineCap,
		    lineJoin,
		    miterLimit,
		    translate;

		function arc(canvas, data) {
			canvas.each(function draw() {
				var ctx = this.getContext('2d'),
				    r0 = innerRadius(data),
				    r1 = outerRadius(data),
				    a0 = startAngle(data) + arcOffset,
				    a1 = endAngle(data) + arcOffset;

				ctx.strokeStyle = strokeStyle;
				ctx.fillStyle = fillStyle;
				ctx.lineWidth = lineWidth;
				ctx.lineCap = lineCap;
				ctx.lineJoin = lineJoin;
				ctx.miterLimit = miterLimit;
				ctx.translate.apply(ctx, translate);
				ctx.beginPath();

				ctx.moveTo.apply(ctx, ptoc(r0, a0));
				ctx.lineTo.apply(ctx, ptoc(r1, a0));
				ctx.arc(0, 0, r1, a0, a1);
				ctx.lineTo.apply(ctx, ptoc(r0, a1));
				ctx.arc(0, 0, r0, a1, a0, true);

				ctx.stroke();
				ctx.fill();
				ctx.closePath();
				ctx.restore();
			});

			function ptoc(r, a) {
				return [Math.cos(a) * r, Math.sin(a) * r];
			}
		}

		arc.innerRadius = function(_) {
			if (!arguments.length) return innerRadius;
			innerRadius = _;
			return arc;
		};

		arc.outerRadius = function(_) {
			if (!arguments.length) return outerRadius;
			outerRadius = _;
			return arc;
		};

		arc.startAngle = function(_) {
			if (!arguments.length) return startAngle;
			startAngle = _;
			return arc;
		};

		arc.endAngle = function(_) {
			if (!arguments.length) return endAngle;
			endAngle = _;
			return arc;
		};

		arc.centroid = function() {
			var r = (innerRadius.apply(this, arguments)
				+ outerRadius.apply(this, arguments)) / 2,
			    a = (startAngle.apply(this, arguments)
				+ endAngle.apply(this, arguments)) / 2 + arcOffset;
			return [Math.cos(a) * r, Math.sin(a) * r];
		};

		arc.strokeStyle = function(_) {
			if (!arguments.length) return strokeStyle;
			strokeStyle = _;
			return arc;
		};

		arc.fillStyle = function(_) {
			if (!arguments.length) return fillStyle;
			fillStyle = _;
			return arc;
		};

		arc.lineWidth = function(_) {
			if (!arguments.length) return lineWidth;
			lineWidth = _;
			return arc;
		};

		arc.lineCap = function(_) {
			if (!arguments.length) return lineCap;
			lineCap = _;
			return arc;
		};

		arc.lineJoin = function(_) {
			if (!arguments.length) return lineJoin;
			lineJoin = _;
			return arc;
		};

		arc.miterLimit = function(_) {
			if (!arguments.length) return miterLimit;
			miterLimit = _;
			return arc;
		};

		arc.translate = function(_) {
			if (!arguments.length) return translate;
			translate = _;
			return arc;
		};

		return arc;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var x0 = function(d) { return d[0]; },
		    x1 = function(d) { return d[0]; },
		    y0 = 0,
		    y1 = function(d) { return d[1]; },
		    strokeStyle = 'transparent',
		    fillStyle,
		    lineWidth,
		    lineCap,
		    lineJoin,
		    miterLimit;

		function area(canvas, data) {
			var n = data.length;

			canvas.each(function draw() {
				var ctx = this.getContext('2d'),
				    i = 0;

				ctx.strokeStyle = strokeStyle;
				ctx.fillStyle = fillStyle;
				ctx.lineWidth = lineWidth;
				ctx.lineCap = lineCap;
				ctx.lineJoin = lineJoin;
				ctx.miterLimit = miterLimit;
				ctx.beginPath();
				ctx.moveTo.apply(ctx, coords0(data[0], 0));
				while (++i < n) {
					ctx.lineTo.apply(ctx, coords0(data[i], i));
				}
				while (--i > -1) {
					ctx.lineTo.apply(ctx, coords1(data[i], i));
				}
				ctx.lineTo.apply(ctx, coords0(data[0], 0));
				ctx.stroke();
				ctx.fill();
				ctx.closePath();
			});

			function coords0() {
				return [+x0.apply(this, arguments), +y0.apply(this, arguments)];
			}

			function coords1() {
				return [+x1.apply(this, arguments), +y1.apply(this, arguments)];
			}
		}

		area.x = function(_) {
			if (!arguments.length) return x1;
			x0 = x1 = _;
			return area;
		};

		area.x0 = function(_) {
			if (!arguments.length) return x0;
			x0 = _;
			return area;
		};

		area.x1 = function(_) {
			if (!arguments.length) return x1;
			x1 = _;
			return area;
		};

		area.y = function(_) {
			if (!arguments.length) return y1;
			y0 = y1 = _;
			return area;
		};

		area.y0 = function(_) {
			if (!arguments.length) return y0;
			y0 = _;
			return area;
		};

		area.y1 = function(_) {
			if (!arguments.length) return y1;
			y1 = _;
			return area;
		};

		area.strokeStyle = function(_) {
			if (!arguments.length) return strokeStyle;
			strokeStyle = _;
			return area;
		};

		area.fillStyle = function(_) {
			if (!arguments.length) return fillStyle;
			fillStyle = _;
			return area;
		};

		area.lineWidth = function(_) {
			if (!arguments.length) return lineWidth;
			lineWidth = _;
			return area;
		};

		area.lineCap = function(_) {
			if (!arguments.length) return lineCap;
			lineCap = _;
			return area;
		};

		area.lineJoin = function(_) {
			if (!arguments.length) return lineJoin;
			lineJoin = _;
			return area;
		};

		area.miterLimit = function(_) {
			if (!arguments.length) return miterLimit;
			miterLimit = _;
			return area;
		};

		return area;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		// TODO: Rewrite to support projections
		var startAngle = function(d) { return d[0]; },
		    endAngle = function(d) { return d[0]; },
		    innerRadius = 0,
		    outerRadius = function(d) { return d[1]; },
		    strokeStyle = 'transparent',
		    fillstyle,
		    lineWidth,
		    lineCap,
		    lineJoin,
		    miterLimit,
		    angleOffset = - Math.PI / 2;

		function area(canvas, data) {
			var n = data.length;

			function coords0() {
				var r = +innerRadius.apply(this, arguments),
				    a = +startAngle.apply(this, arguments) + angleOffset;

				return [Math.cos(a) * r, Math.sin(a) * r];
			}

			function coords1() {
				var r = +outerRadius.apply(this, arguments),
				    a = +endAngle.apply(this, arguments) + angleOffset;

				return [Math.cos(a) * r, Math.sin(a) * r];
			}

			canvas.each(function draw() {
				var ctx = this.getContext('2d'),
				    i = 0;

				ctx.strokeStyle = strokeStyle;
				ctx.fillStyle = fillStyle;
				ctx.lineWidth = lineWidth;
				ctx.lineCap = lineCap;
				ctx.lineJoin = lineJoin;
				ctx.miterLimit = miterLimit;

				ctx.beginPath();
				ctx.moveTo.apply(ctx, coords0(data[0], 0));
				while (++i < n) {
					ctx.lineTo.apply(ctx, coords0(data[i], i));
				}
				while (--i > -1) {
					ctx.lineTo.apply(ctx, coords1(data[i], i));
				}
				ctx.lineTo.apply(ctx, coords0(data[0], 0));
				ctx.stroke();
				ctx.fill();
				ctx.closePath();
			});
		}

		area.angle = function(_) {
			if (!arguments.length) return endAngle;
			startAngle = endAngle = _;
			return area;
		};

		area.radius = function(_) {
			if (!arguments.length) return outerRadius;
			innerRadius = outerRadius = _;
			return area;
		};

		area.startAngle = function(_) {
			if (!arguments.length) return startAngle;
			startAngle = _;
			return area;
		};

		area.endAngle = function(_) {
			if (!arguments.length) return endAngle;
			endAngle = _;
			return area;
		};

		area.innerRadius = function(_) {
			if (!arguments.length) return innerRadius;
			innerRadius = _;
			return area;
		};

		area.outerRadius = function(_) {
			if (!arguments.length) return outerRadius;
			outerRadius = _;
			return area;
		};

		area.strokeStyle = function(_) {
			if (!arguments.length) return strokeStyle;
			strokeStyle = _;
			return area;
		};

		area.fillStyle = function(_) {
			if (!arguments.length) return fillStyle;
			fillStyle = _;
			return area;
		};

		area.lineWidth = function(_) {
			if (!arguments.length) return lineWidth;
			lineWidth = _;
			return area;
		};

		area.lineCap = function(_) {
			if (!arguments.length) return lineCap;
			lineCap = _;
			return area;
		};

		area.lineJoin = function(_) {
			if (!arguments.length) return lineJoin;
			lineJoin = _;
			return area;
		};

		area.miterLimit = function(_) {
			if (!arguments.length) return miterLimit;
			miterLimit = _;
			return area;
		};

		return area;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var x = function(d) { return d[0]; },
		    y = function(d) { return d[1]; },
		    strokeStyle,
		    lineWidth,
		    lineCap,
		    lineJoin,
		    miterLimit;

		function line(canvas, data) {
			var n = data.length;

			canvas.each(function draw() {
				var ctx = this.getContext('2d'),
				    i = 0;

				ctx.strokeStyle = strokeStyle;
				ctx.lineWidth = lineWidth;
				ctx.lineCap = lineCap;
				ctx.miterLimit = miterLimit;
				ctx.beginPath();
				ctx.moveTo.apply(ctx, coords(data[0], 0));
				while (++i < n) {
					ctx.lineTo.apply(ctx, coords(data[i], i));
				}
				ctx.stroke();
			});

			function coords() {
				return [+x.apply(this, arguments), +y.apply(this, arguments)];
			}
		}

		line.x = function(_) {
			if (!arguments.length) return x;
			x = _;
			return line;
		};

		line.y = function(_) {
			if (!arguments.length) return y;
			y = _;
			return line;
		};

		line.strokeStyle = function(_) {
			if (!arguments.length) return strokeStyle;
			strokeStyle = _;
			return line;
		};

		line.lineWidth = function(_) {
			if (!arguments.length) return lineWidth;
			lineWidth = _;
			return line;
		};

		line.lineCap = function(_) {
			if (!arguments.length) return lineCap;
			lineCap = _;
			return line;
		};

		line.lineJoin = function(_) {
			if (!arguments.length) return lineJoin;
			lineJoin = _;
			return line;
		};

		line.miterLimit = function(_) {
			if (!arguments.length) return miterLimit;
			miterLimit = _;
			return line;
		};

	return line;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		// TODO: Rewrite this and cartesian line to support projections
		var radius = function(d) { return d[1]; },
		    angle = function(d) { return d[0]; },
		    strokeStyle,
		    lineWidth,
		    lineCap,
		    lineJoin,
		    miterLimit,
		    translate,
		    angleOffset = -Math.PI / 2;

		function line(canvas, data) {
			var n = data.length;

			function coords() {
				var r = +radius.apply(this, arguments),
				    a = +angle.apply(this, arguments) + angleOffset;

				return [Math.cos(a) * r, Math.sin(a) * r];
			}

			canvas.each(function draw() {
				var ctx = this.getContext('2d'),
				    i = 0;

				ctx.strokeStyle = strokeStyle;
				ctx.lineWidth = lineWidth;
				ctx.lineCap = lineCap;
				ctx.miterLimit = miterLimit;

				ctx.beginPath();
				ctx.translate.apply(ctx, translate);
				ctx.moveTo.apply(ctx, coords(data[0], 0));
				while (++i < n) {
					ctx.lineTo.apply(ctx, coords(data[i], i));
				}
				ctx.stroke();
				ctx.closePath();
			});
		}

		line.radius = function(_) {
			if (!arguments.length) return radius;
			radius = _;
			return line;
		};

		line.angle = function(_) {
			if (!arguments.length) return angle;
			angle = _;
			return line;
		};

		line.strokeStyle = function(_) {
			if (!arguments.length) return strokeStyle;
			strokeStyle = _;
			return line;
		};

		line.lineWidth = function(_) {
			if (!arguments.length) return lineWidth;
			lineWidth = _;
			return line;
		};

		line.lineCap = function(_) {
			if (!arguments.length) return lineCap;
			lineCap = _;
			return line;
		};

		line.lineJoin = function(_) {
			if (!arguments.length) return lineJoin;
			lineJoin = _;
			return line;
		};

		line.miterLimit = function(_) {
			if (!arguments.length) return miterLimit;
			miterLimit = _;
			return line;
		};

		line.translate = function(_) {
			if (!arguments.length) return translate;
			translate = _;
			return line;
		};

	return line;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	function d3_canvas_symbolSize() {
		return 64;
	}

	function d3_svg_symbolType() {
		return 'circle';
	}

	function d3_canvas_symbol() {
		var type = function() { return 64; },
		    size = function() { return 'circle'; };

		function symbol() {
			var s = symbols[type.apply(this, arguments)] || circle;

			return s.call(this, size.apply(this, arguments));
		}

		symbol.type = function(_) {
			if (!arguments.length) return type;
			type = _;
			return symbol;
		};

		symbol.size = function(_) {
			if (!arguments.length) return size;
			size = _;
			return symbol;
		};

		return symbol;
	};

	d3_canvas_symbol.circle = function circle(size) {
		var ctx = this.getContext('2d'),
		    r = Math.sqrt(size / Math.PI);

		ctx.beginPath();
		ctx.arc(0, 0, r, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.endPath();
	};

	module.exports = d3_canvas_symbol;


/***/ }
/******/ ]);