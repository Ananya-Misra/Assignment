const quantity_plus = document.getElementsByClassName("quantity__plus");
const input = document.getElementsByClassName("quantity__input");
const quantity_minus = document.getElementsByClassName("quantity__minus");

// setting the default values from local storage by iterating through array of object
for (var i = 0; i < input.length; i++) {
  const color = input[i].attributes[0].value;
  const extract_color = color.substring(0, color.indexOf("_"));
  const color_value = localStorage.getItem(extract_color) | 0;
  document.getElementById(color).innerHTML = color_value;
}
// finding the color that is incremented or decremented
function which_color(e) {
  const color = e.currentTarget.attributes[0].value;
  const founded_color = color.substring(0, color.indexOf("_"));
  return founded_color;
}
//increment
function increment(color) {
  const old_value = localStorage.getItem(color) | 0;
  const new_value = old_value + 1;
  localStorage.setItem(color, new_value);
  document.getElementById(color + "_count_display").innerHTML = new_value;
}
//decrement
function decrement(color) {
  const old_value = localStorage.getItem(color) | 0;
  var new_value = Math.max(0, old_value - 1);
  localStorage.setItem(color, new_value);
  document.getElementById(color + "_count_display").innerHTML = new_value;
}

for (var i = 0; i < quantity_plus.length; i++) {
  quantity_plus[i].onclick = function (e) {
    increment(which_color(e));
  };
}
for (var i = 0; i < quantity_plus.length; i++) {
  quantity_minus[i].onclick = function (e) {
    decrement(which_color(e));
  };
}
