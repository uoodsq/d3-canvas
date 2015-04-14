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
