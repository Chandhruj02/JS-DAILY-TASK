var ColorChange1 = () =>{
  var spancontent = document.getElementById('selectedColorHexCode');
  spancontent.innerHTML="Selected Background Color:#e0e0e0"
  var bgcolor = document.getElementById('colorPickerContainer');
  bgcolor.style.backgroundColor="#e0e0e0";
}

var ColorChange2 = () =>{
  var spancontent = document.getElementById('selectedColorHexCode');
  spancontent.innerHTML="Selected Background Color:#6fcf97"
  var bgcolor = document.getElementById('colorPickerContainer');
  bgcolor.style.backgroundColor="#6fcf97";
}

var ColorChange3 = () =>{
  var spancontent = document.getElementById('selectedColorHexCode');
  spancontent.innerHTML="Selected Background Color:#56ccf2"
  var bgcolor = document.getElementById('colorPickerContainer');
  bgcolor.style.backgroundColor="#56ccf2";
}

var ColorChange4 = () =>{
  var spancontent = document.getElementById('selectedColorHexCode');
  spancontent.innerHTML="Selected Background Color:#bb6bd9"
  var bgcolor = document.getElementById('colorPickerContainer');
  bgcolor.style.backgroundColor="#bb6bd9";
}

function turnOn() {
  document.getElementById("Bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("Cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
}

function turnOff() {
  document.getElementById("Bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("Cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
}