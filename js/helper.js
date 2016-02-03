function changeSVGImage(newPath, elementId, svgId) {
  var svgdoc = document.getElementById(svgId).getSVGDocument();
  var element = svgdoc.getElementById(elementId);
  element.href.baseVal = newPath;
}

function updateSVGText(newText, elementId, svgId) {
  var svgdoc = document.getElementById(svgId).getSVGDocument();
  var element = svgdoc.getElementById(elementId);
  element.textContent = newText;
}

function getSVGText(elementId, svgId) {
  var svgdoc = document.getElementById(svgId).getSVGDocument();
  return svgdoc.getElementById(elementId).textContent;
}

function getSVGImagePath(elementId, svgId) {
  var svgdoc = document.getElementById(svgId).getSVGDocument();
  return svgdoc.getElementById(elementId).href.baseVal;
}
