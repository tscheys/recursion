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
	return JSON;

  // your code goes here
};
