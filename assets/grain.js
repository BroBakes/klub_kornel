// 128×128 tiled film-grain noise, generated once and reused as a data URI.
(function () {
  'use strict';
  if (window.KKGrain) return;
  var size = 128;
  var c = document.createElement('canvas');
  c.width = c.height = size;
  var ctx = c.getContext('2d');
  var img = ctx.createImageData(size, size);
  for (var i = 0; i < img.data.length; i += 4) {
    var v = 120 + Math.random() * 135;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  window.KKGrain = c.toDataURL('image/png');
})();
