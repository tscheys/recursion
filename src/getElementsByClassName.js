// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

	var body = document.body;
	var children = body.childNodes;
	var elements = [];
	//basecase
	if(body.classList.contains(className)) {
		elements.push(body);
	}

	if(arguments.length === 3) {
		elements = arguments[2];
		children = arguments[1].childNodes;
	}

	_.each(children, function (childNode) {
		if(childNode.nodeName!== "#text" && childNode.classList.contains(className)) {
			elements.push(childNode);
		}
		if(childNode.childNodes.length > 0) {
			getElementsByClassName(className, childNode, elements);
		}
	});

	return elements;






	









	//Basecase
	/*if(arguments.length === 1) {
	var parentNode = document.body;
	var elements = [];
}
	else {
		var parentNode = arguments[1];
		var elements = arguments[2];
	}
	var childNodes = parentNode.childNodes;

		_.each(childNodes, function (childNode) {
			var t = childNode;
			var x = childNode.nodeName;
			if(x !== "#text") {
				if(childNode.classList.contains(className))
				{
					elements.push(childNode);
				}
			}
			if(childNode.childNodes.length !== 0) {
			    getElementsByClassName(className, childNode,elements);
		}
	});*/




	/*_.each(childNodes, function (childNode) {
		if(childNode.classList.contains(className))
		{
			elements.push(childNode);
		}
		if(childNode.childNodes.length !== 0) {
			getElementsByClassName(className, childNode, elements);*/
 
};
