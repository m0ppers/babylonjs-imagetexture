/*global BABYLON*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageTexture = (function (_BABYLON$Texture) {
  _inherits(ImageTexture, _BABYLON$Texture);

  function ImageTexture(img, scene) {
    _classCallCheck(this, ImageTexture);

    _get(Object.getPrototypeOf(ImageTexture.prototype), "constructor", this).call(this, null, scene);

    var texture = scene.getEngine()._gl.createTexture();
    texture._baseWidth = img.width;
    texture._baseHeight = img.height;
    texture._width = img.width;
    texture._height = img.height;

    texture.references = 1;
    texture.samplingMode = BABYLON.Texture.TRILINEAR_SAMPLINGMODE;
    this._texture = texture;
    this._texture.isReady = false;

    this.setImage(img);
  }

  _createClass(ImageTexture, [{
    key: "setImage",
    value: function setImage(img) {
      var gl = this.getScene().getEngine()._gl;
      gl.bindTexture(gl.TEXTURE_2D, this._texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

      // mop: it is the first call
      if (!this._texture.isReady) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      } else {
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, img);
      }
      gl.bindTexture(gl.TEXTURE_2D, null);
      this._texture.isReady = true;
    }
  }]);

  return ImageTexture;
})(BABYLON.Texture);

exports["default"] = ImageTexture;
module.exports = exports["default"];
//# sourceMappingURL=ImageTexture.js.map