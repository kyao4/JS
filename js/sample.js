function changePic(whichPic) {
    var source = whichPic.getAttribute("href");
    var target = document.getElementById("placeholder");
    target.setAttribute("src", source);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
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
