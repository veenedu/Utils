///<reference path="ts/Utils.ts" />

console.log('foo');


var arr = [{a:1},{a:2},{a:1}];
var a= Utils.filterArrayByVal(arr,'a',2);

console.log(a);


//

Utils.forTimes(5,function(i){
	console.log(i);
});


var a = {
	a:1,
	b:2,
	c:3
};

console.log('for each key')
Utils.forEachKey(a,function(key,val){
	console.log(key);
	console.log(val);
})