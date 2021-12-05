var ps=require('prompt-sync')
var prompt=ps();
var num=prompt('Enter a num: ');

var result=[];
for(i=0;i<num.length;i++){
   if(num[i]!=' ')
   result.push(parseInt(num[i]));
}
var num1=result[0];
for(i=1;i<result.length;i++){
   num1=num1*10+result[i];
 }
num1+=1;
// console.log(num1/10);
var result=[];
while(num1>0){
    result.push(num1%10);
    num1=Math.floor(num1/10);

}
result.reverse();
console.log(result);