var ele = document.getElementsByClassName ("draggable");
for (var i = 0; i < ele.length; i++) {
    ele[i].addEventListener ("mousedown" , eleMouseDown , false);
    ele[i].style.position="absolute";
    ele[i].style.cursor="move";
}
var pX = 0;
var pY = 0;
var elem = document.elementFromPoint(parseInt(event.clientX,10), parseInt(event.clientY,10));

function eleMouseDown () {
		pX = parseInt(event.clientX,10);
		pY = parseInt(event.clientY,10);
    stateMouseDown = true;
    elem = document.elementFromPoint(pX, pY);
    document.addEventListener ("mousemove" , eleMouseMove , false);
}

function eleMouseMove (ev) {
    var mX = parseInt(ev.pageX,10);
    var mY = parseInt(ev.pageY,10);
    var rect = elem.getBoundingClientRect();
    var dX = pX - mX;
    var dY = pY - mY;
    elem.style.left = (parseInt(elem.style.left) - dX) + "px";
    elem.style.top = (parseInt(elem.style.top) - dY) + "px";
    pX = mX;
    pY = mY;
    document.addEventListener ("mouseup" , eleMouseUp , false);
}

function eleMouseUp () {
    document.removeEventListener ("mousemove" , eleMouseMove , false);
    document.removeEventListener ("mouseup" , eleMouseUp , false);
}