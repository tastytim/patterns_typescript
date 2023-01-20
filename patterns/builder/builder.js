var ImageFormat;
(function (ImageFormat) {
    ImageFormat["Png"] = "png";
    ImageFormat["Jpeg"] = "jpeg";
})(ImageFormat || (ImageFormat = {}));
var ImageBuilder = /** @class */ (function () {
    function ImageBuilder() {
        this.formats = [];
        this.resolutions = [];
    }
    ImageBuilder.prototype.addPng = function () {
        if (this.formats.includes(ImageFormat.Png)) {
            return this;
        }
        this.formats.push(ImageFormat.Png);
        return this;
    };
    ImageBuilder.prototype.addJpeg = function () {
        if (this.formats.includes(ImageFormat.Jpeg)) {
            return this;
        }
        this.formats.push(ImageFormat.Jpeg);
        return this;
    };
    ImageBuilder.prototype.addResolution = function (width, height) {
        this.resolutions.push({ width: width, height: height });
        return this;
    };
    ImageBuilder.prototype.build = function () {
        var res = [];
        for (var _i = 0, _a = this.resolutions; _i < _a.length; _i++) {
            var r = _a[_i];
            for (var _b = 0, _c = this.formats; _b < _c.length; _b++) {
                var f = _c[_b];
                res.push({
                    width: r.width,
                    height: r.height,
                    format: f
                });
            }
        }
        return res;
    };
    return ImageBuilder;
}());
var builder = new ImageBuilder();
builder.addJpeg().addPng().addResolution(120, 580).addResolution(350, 750).build();
console.log(builder);
