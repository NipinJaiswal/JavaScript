var ps = require('prompt-sync');
var prompt = ps();
var str1 = prompt("Enter :");
var str2 = prompt('Enter str2: ');
if (str1.match(str2)) {
    console.log(str1.indexOf(str2.charAt(1)) - 1);
} else {
    console.log(false);
}