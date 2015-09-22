/*global BABYLON*/
class ImageTexture extends BABYLON.Texture {
  constructor (img, scene) {
    super(null, scene);

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

  setImage (img) {
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
}

export default ImageTexture;
