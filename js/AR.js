"use strict";
exports.__esModule = true;
var resolutions = require('../data/resolutions.json');
var AR = (function () {
    function AR(width, height) {
        this.setDimensions(width, height);
    }
    AR.prototype.setDimensions = function (width, height) {
        this.width = width;
        this.height = height;
        this.aspectRatio = width / height;
        this.aspectRatioStr = '';
        this.calcARstring();
    };
    AR.prototype.getAR = function () {
        return this.aspectRatio;
    };
    AR.prototype.getARString = function () {
        return this.aspectRatioStr;
    };
    AR.prototype.getWidth = function () {
        return this.width;
    };
    AR.prototype.getHeight = function () {
        return this.height;
    };
    AR.prototype.toString = function () {
        return 'Aspect Ratio Object:\nWidth: ' + this.width + '\nHeight: ' + this.height + '\nAspect Ratio: ' + this.aspectRatio + ' (' + this.aspectRatioStr + ')\n';
    };
    AR.prototype.calcARstring = function () {
        var queryRes = resolutions[this.width.toString()][this.height.toString()];
        if (queryRes) {
            this.aspectRatioStr = queryRes;
            return;
        }
        this.LCF = this.getLCF();
        this.LCnumerator = this.getLCnumerator();
        this.LCdenominator = this.getLCdenominator();
        this.aspectRatioStr = this.LCnumerator + ':' + this.LCdenominator;
    };
    AR.prototype.getLCF = function (val1, val2) {
        if (val1 === void 0) { val1 = this.width; }
        if (val2 === void 0) { val2 = this.height; }
        val1 = 2 * Math.round(val1 / 2);
        val2 = 2 * Math.round(val2 / 2);
        var largestVal = val1 > val2 ? val1 : val2;
        var LCF = 1;
        for (var i = 2; i < largestVal; i++) {
            if (val1 % i == 0 && val2 % i == 0) {
                LCF = i;
            }
        }
        return LCF;
    };
    AR.prototype.getLCnumerator = function (width, LCF) {
        if (width === void 0) { width = this.width; }
        if (LCF === void 0) { LCF = this.LCF; }
        return width / LCF;
    };
    AR.prototype.getLCdenominator = function (height, LCF) {
        if (height === void 0) { height = this.height; }
        if (LCF === void 0) { LCF = this.LCF; }
        return height / LCF;
    };
    AR.prototype.scaleHeight = function (newWidth) {
        this.height = newWidth / this.aspectRatio;
    };
    AR.prototype.getScaledWidth = function (newHeight) {
        this.width = newHeight * this.aspectRatio;
    };
    AR.prototype.scaleDimensions = function (scaleRatio) {
        this.setDimensions(this.width * scaleRatio, this.height * scaleRatio);
    };
    AR.prototype.scaleArea = function (scaleRatio) {
        var newArea = this.width * this.height * 2;
        var newHeight = Math.sqrt(newArea / this.aspectRatio);
        var newWidth = newHeight * this.aspectRatio;
        this.width = newWidth;
        this.height = newHeight;
    };
    return AR;
}());
exports.AR = AR;
//# sourceMappingURL=AR.js.map