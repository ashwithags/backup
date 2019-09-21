function add(a){
	var sum = 0;
	for(var i = 0; i< arguments[0].length; i++)
	{
		sum += Number(arguments[0][i].itPrice);
	}
	return sum;
}


function deleteItem(data){
	cart.splice(data,1);
	console.log(cart);
	//createTable(cart);
}

function createTable(c){
	var tabl='<table><thead><th>SL.</th><th>Item Name</th><th>Quantity</th><th>Price</th><th>Remove</th></thead><tbody>'

	var tablest = '';
	for(var i = 0; i< c.length; i++)
	{
		var row = i+1;
	 	tablest += '<tr><td>'+(i+1)+'</td><td>'+c[i].itName+'</td><td><img src="img/minus.png" onclick="decrement('+row+')"><span id=quan'+row+'>'+ 1 +'</span><img src="img/add.png" onclick="increment('+row+')"></td><td id=price'+row+'>'+c[i].itPrice+'</td><td><img src="img/cross.png" onclick="deleteItem('+i+')"></td></tr>';
	 	/*tablest += '<tr><td>'+(i+1)+'</td><td>'+c[i].itName+'</td><td><img src="img/cross.png" onclick="decre('+x+')"><span id=quan'+i+'>'+ c[i].quantity +'</span><img src="img/cross.png" onclick="incre('+i+')"></td><td id=price'+i+'>'+c[i].newQuantityPrice+'</td><td><img src="img/cross.png" onclick="deleteItem('+i+')"></td></tr>';*/
	}
	
	var total=add(c);
	document.getElementById('totalValues').innerHTML=tabl+tablest+'<tr><td></td><td><b>Sub Total Items</b></td><td></td><td>'+total+'</td></tbody></table>';
}


function increment(a){
	var newQuanId = 'quan'+a;
	var count = Number(document.getElementById(newQuanId).innerHTML);
	document.getElementById(newQuanId).innerHTML = count+1;
	var newPriceId = 'price'+a;
	var newPrice = Number(document.getElementById(newPriceId).innerHTML);
	/*console.log('New OPrice ID: '+newPriceId);
	console.log(newPriceId +'Value: '+newPrice);
	console.log(cart[a-1]);*/
	document.getElementById(newPriceId).innerHTML = (count+1)*cart[a-1].itPrice;

}


function decrement(a){
	var newQuanId = 'quan'+a;
	var count = Number(document.getElementById(newQuanId).innerHTML);
	document.getElementById(newQuanId).innerHTML = count-1;
	if(count-1 == 0)
	{
		deleteItem(a-1);
	}
	var newPriceId = 'price'+a;
	var newPrice = Number(document.getElementById(newPriceId).innerHTML);
	document.getElementById(newPriceId).innerHTML = (count-1)*cart[a-1].itPrice;
	console.log(newQuanId);
	console.log(count-1);
	console.log(newPriceId);
	console.log(newPrice);
}

var cart = [];

function addtoCart(){
	var prod = {};
		prod.itName = document.getElementById('item1').value;
		prod.itPrice = document.getElementById('price').value;
		prod.newQuantityPrice = prod.itPrice;
	//	prod.quantity = 1;

	cart.push(prod);
	//console.log(cart);
	createTable(cart);
}


function incre(a){
	console.log(cart[a]);
	cart[a].quantity += 1;
	//cart[a].itPrice = cart[a].itPrice*cart[a].quantity;
	cart[a].newQuantityPrice = cart[a].itPrice*cart[a].quantity;

	createTable(cart);
}

function decre(a){
	console.log(cart[a]);
	cart[a].quantity -= 1;
	//cart[a].itPrice = cart[a].itPrice*cart[a].quantity;
	cart[a].newQuantityPrice = cart[a].itPrice*cart[a].quantity;

	createTable(cart);
}
