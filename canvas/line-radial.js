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
