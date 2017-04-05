function changePic(whichPic) {
	if (!document.getElementById("placeholder")) return false;
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

function prepareclick() {
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementById("purchases")) {
		return false;
	}
	var list = document.getElementById("purchases");
	var a = list.getElementsByTagName("a");
	for(var i = 0; i < a.length; i++) {
		a[i].onclick = function() {
			return !changePic(this);
		}
		a[i].onkeypress = a[i].onclick
	}

	var para = document.createElement("p");
	var text = document.createTextNode("插入结点");
	para.appendChild(text);
	if (document.getElementById("testdiv")) {
		var testdiv = document.getElementById("testdiv");
		testdiv.appendChild(para);
	}

}


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}


function preparePlaceholder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.insertBefore) return false;	
	if (!document.getElementById("purchases")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.jpg");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var disctext = document.createTextNode("描述文字");
	description.appendChild(disctext);
	var purchases = document.getElementById("purchases");
	insertAfter(placeholder, purchases);
	insertAfter(description, purchases);
}


function positionMessage() {
	if (!document.getElementById) return false;
	if (!document.getElementById("message")) return false;
	var message = document.getElementById("message");
	message.style.position = "absolute";
	message.style.left = "250px";
	message.style.top = "50px";
	moveElement("message", 0, 100, 10);
}

function moveElement(elemId, toppos, leftpos, inter) {
	if (!document.getElementById) return false;
	if (!document.getElementById(elemId)) return false;
	var elem = document.getElementById(elemId);
	var top = parseInt(elem.style.top);
	var left = parseInt(elem.style.left);
	if (top == toppos && left == leftpos) {
		return true;
	}
	if (top < toppos) {
		top++;
	}
	if (top > toppos) {
		top--;
	}
	if (left < leftpos) {
		left++;
	}
	if (left > leftpos) {
		left--;
	}
	elem.style.top = top + "px";
	elem.style.left = left + "px";
	var repeat = "moveElement('" + elemId + "'," + toppos + "," + leftpos + "," + inter + ")";
	movement = setTimeout(repeat, inter);
}


addLoadEvent(prepareclick);
addLoadEvent(preparePlaceholder);
addLoadEvent(positionMessage);