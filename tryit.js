var basic = require("./basicCard.js");
var cloze = require("./clozeCard.js");

var test = new basic("George Washington was the first president of the United States.", "George Washington");
test.display();
console.log("\n");
var test2 = new cloze("George Washington was the first president of the United States.", "George Washington");
test2.display();