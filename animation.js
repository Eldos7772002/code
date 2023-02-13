var qrcode = new QRCode(document.getElementById("qrcode"), {
  width: 200,
  height: 200
});

var opacity = 0;
var qrOpacity = setInterval(function() {
  qrcode.style.opacity = opacity;
  opacity += 0.01;
  if (opacity >= 1) {
    clearInterval(qrOpacity);
  }
}, 10);

// Generate a specific QR code
qrcode.makeCode("KvIZQJO-3857435-0-1248433");
