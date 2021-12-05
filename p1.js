var ps = require('prompt-sync');
var prompt = ps();
//Max sum in array consecutive 
var b = prompt('Enter numbers');
var c = [];
for (i = 0; i < b; i++) {
    c.push(prompt());
}
// console.log(c);
maxsum = 0;
for (i = 0; i < b; i++) {
    let sum = 0;
    for (j = i; j < b; j++) {
        sum = sum + parseInt(c[j]);
        if (sum > maxsum) {
            maxsum = sum;
        }
        // console.log(sum);
    }
}
console.log(maxsum);