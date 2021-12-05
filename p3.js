//Max profit progrm
var ps=require('prompt-sync');
var prompt=ps();
var days=prompt('Enter days :');
var price=[];
for(i=0;i<days;i++){
    price.push(parseInt(prompt()));
}
console.log(price);
var maxprofit=0;
for(i=0;i<days;i++){
    var p=price[i];
    for(j=i+1;j<days;j++){
        if(p<price[j]&&price[j]-p>maxprofit){
            maxprofit=price[j]-p;

        }

    }
    // console.log(maxprofit);
}
console.log(maxprofit);