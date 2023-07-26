var swinger = $(".swinger");

// Insert DOM
for (var i = 0; i < 15; i++) {
  var stringContainer = document.createElement('li');
  var string          = document.createElement('span');
  var ball            = document.createElement('span');
  stringContainer.className = 'no' + i;
  string.className          = "string";
  ball.className            = "ball";
  swinger.append(stringContainer);
  $(stringContainer).append(string, ball); 
}

var g        = 9.8; // gravity
var maxOsc  = 15;   // number of oscillations the longest pendulum performs in the cycle
var duration = 240; // duration of one cycle in seconds

// Calculate string heights
var height = [];
for (var j = 0; j < 15; j++) {
  var length   = g * duration / Math.pow((2 * Math.PI * (maxOsc + j)), 2); // equation to calculate string lengths for harmonic wave pendulum
  height.push(length);
}
height.reverse();
 
var sizeCoeff = 150;
// Use harmonic pendulum equation to animate
var elements = $("li");
for (var k = 0; k < 15; k++) {
  var that = elements[k];
  var time = 2 * Math.PI * Math.sqrt(height[k] / g); // harmonic wave pendulum equation
  var size = sizeCoeff * height[k];
  $(".string", that).height(size * 10); // magic numbers for string length in px
  $(".ball", that)
    .height(size)
    .width(size)
    .css('left', (-1/2) * size);
  $(that).attr("style", "animation-duration: " + time + "s;");
};