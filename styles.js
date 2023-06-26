
function getHeightByClass(className) {
    var element = document.getElementsByClassName(className)[0];
    var style = window.getComputedStyle(element);
    var width = style.getPropertyValue('height');

    return width;
}
function getValueFromCSSVariable(className, variableName) {
    var element = document.getElementsByClassName(className)[0];
    var styles = getComputedStyle(element);
    var value = styles.getPropertyValue(variableName);

    return value;
}

var width = getHeightByClass("popular-item__content");
var bottom = getValueFromCSSVariable("popular-item__content", "--bottom-position")
console.log(width);
console.log(bottom);


var marginBottom = parseFloat(width) + parseFloat(bottom);
console.log(marginBottom);

var elements = document.querySelectorAll(".popular-list__item");
console.log(elements)

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.marginBottom = marginBottom + "px";
}