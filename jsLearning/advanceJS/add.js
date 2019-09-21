var i=0;
function ad(){
	i++;
	console.log(i);
}



//----------------------Basic of closure-------------------

function init(){
	var browserName = "Chrome";
	function disp(){
		console.log("Your Current Browser is "+browserName);
	}
	return disp;
}
var x = init();
console.log(typeof(x));
x();

//--------------- sum using closure---------------------


function adder(a){
	return function(b){
		return a+b;

	};
}
var a1 = adder(100);
console.log(a1);
var sum = a1(50);
console.log(sum);

//----------------------- product--------------------------

function prod(m){
	return function(n)
	{
		return m*n;
	};

}
var m1 = prod(100);
var pro = m1(50);
console.log(pro);


//-----------------self invoking functio--------

var ad = (function(){
	var counter = 0;
	return function(){
		console.log("Before"+ counter);
		counter+=1;
		console.log("after"+ counter);
		return counter;
	}
	
})();

//----------------Cart functionality --------------------------------

var cartProcess = (function(){
	var cartCount = 0;

	function change(val){
		return cartCount += val;
	}
	return {
		increment: function(){
			return change(1);
		},
		decrement: function(){
			return change(-1);
		},
		value: function(){
			console.log('Total Cart Value: '+cartCount);
			return cartCount;
		}
	}
})();

console.log(typeof(cartProcess)); 