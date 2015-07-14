// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var JSON = "";

	if(typeof obj === "boolean" || "number") {
		JSON =  '' + obj;

	}
	if(typeof obj === "string") {
		JSON = "\"" + obj + "\"";

	}
	if(obj === undefined) {
		return "";
	}
	if(Array.isArray(obj)) {
		JSON = "[";
		var s = ""; 
		_.each(obj, function (value, index) {
			if(index > 0) {s += ",";}
			s += stringifyJSON(value);
			
		});
		JSON += s + "]";
	}
	if({}.toString.call(obj) === "[object Object]") {

		var size = Object.keys(obj).length;
		var prog = 0;
		var s = "";
		s += "{";
		_.each(obj, function (value, key) {
			if(key !== "functions" && key !== "undefined"){
			prog++;
			s += stringifyJSON(key);
			s += ":"
			s += stringifyJSON(value);
			if(prog < size) {s += ",";}
		}
			

			
		});
		s += "}";
		JSON = s;
	}

	return JSON;

  // your code goes here
};
