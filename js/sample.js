function changePic(whichPic) {
	if (!document.getElementById("placeholder")) return false
    var source = whichPic.getAttribute("href");
    var target = document.getElementById("placeholder");
    target.setAttribute("src", source);
   	if (document.getElementById("description")) {
   		var text = whichPic.getAttribute("title");
    	var description = document.getElementById("description");
    	description.firstChild.nodeValue = text;	
   	}
   	return true
}

// function countChildren() {
// 	var body_elements = document.getElementsByTagName("body")[0].childNodes;
// 	for (var i = 0; i < body_elements.length;i ++) {
// 		console.log(body_elements[i].nodeType);
// 	}
// }

// window.onload = countChildren;
// alert(typeof document.getElementById("purchases"));
// var p = document.getElementsByTagName("p");
// for (var i = 0; i < p.length; i++) {
//     var attri = p[i].getAttribute("title");
//     if (attri) {
//         alert(attri);
//     } else {
//         alert(attri);
//     }
// }

function popup(which) {
	window.open(which, "popup", "width=320, height=480");
}

window.onload = load;

function load() {
	if (!document.getElementsByTagName) {
		return false
	}
	if (!document.getElementById) {
		return false
	}
	if (!document.getElementById("purchases")) {
		return false
	}
	var list = document.getElementById("purchases");
	var a = list.getElementsByTagName("a");
	for(var i = 0; i < a.length; i++) {
		a[i].onclick = function() {
			return !changePic(this);
		}
		a[i].onkeypress = a[i].onclick
	}
}
