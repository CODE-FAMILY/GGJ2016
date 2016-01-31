function changeSVGImage( newPath, elementId ) {
	var element = document.getElementById(elementId);
	element.href = newPath;
}

function updateSVGText( newText, elementId ) {
	var element = document.getElementById( elementId );
	element.textContent = newText;
}

function getSVGText( elementId ) {
	return document.getElementById( elementId ).textContent;
}

function getSVGImagePath( elementId ) {
	return document.getElementById( elementId ).href.baseVal;
}
