function add(a){
	console.log(a);
	console.log(arguments);
	var sum = 0;

	for(var i = 0; i< arguments[0].length; i++)
	{
		sum += Number(arguments[0][i].itPrice);
	}
	return sum;
}

add(10,20,30,40,190,200);


var cart = [];

function addtoCart(){
	var data = {};
		data.itName = document.getElementById('item1').value;
		data.itPrice = document.getElementById('price1').value;

	cart.push(data);
	console.log(cart);

	var total = add(cart);
	console.log(total);
}

//console.log(cart);