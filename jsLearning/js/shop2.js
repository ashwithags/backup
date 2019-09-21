function add(a){
	var sum = 0;
	for(var i = 0; i< arguments[0].length; i++)
	{
		sum += Number(arguments[0][i].newQuantityPrice);
	}
	return sum;
}


function deleteItem(data){
	cart.splice(data,1);
	console.log(cart);
	createTable(cart);
}

function createTable(c){
	var tabl='<table><thead><th>SL.</th><th>Item Name</th><th>Quantity</th><th>Price</th><th>Remove</th></thead><tbody>'

	var tablest = '';
	for(var i = 0; i< c.length; i++)
	{
		var row = i+1;
	 	tablest += '<tr><td>'+(i+1)+'</td><td>'+c[i].itName+'</td><td><img src="img/minus.png" onclick="decre('+row+')"><span id=quan'+row+'>'+ c[i].quantity +'</span><img src="img/add.png" onclick="incre('+row+')"></td><td id=price'+row+'>'+c[i].newQuantityPrice+'</td><td><img src="img/cross.png" onclick="deleteItem('+i+')"></td></tr>';
	}
	
	var total=add(c);
	document.getElementById('totalValues').innerHTML=tabl+tablest+'<tr><td></td><td><b>Sub Total Items</b></td><td></td><td>'+total+'</td></tbody></table>';
}


var cart = [];

function addtoCart(){
	var prod = {};
		prod.itName = document.getElementById('item1').value;
		prod.itPrice = document.getElementById('price').value;
		prod.newQuantityPrice = prod.itPrice;
		prod.quantity = 1;

	cart.push(prod);
	createTable(cart);
}


function incre(a){
	console.log(cart[a-1]);
	cart[a-1].quantity += 1;
	cart[a-1].newQuantityPrice = cart[a-1].itPrice*cart[a-1].quantity;
	createTable(cart);
}

function decre(a){
	console.log(cart[a]);
	cart[a-1].quantity -= 1;
	if(cart[a-1].quantity==0){
		deleteItem(a-1);
	}
	cart[a-1].newQuantityPrice = cart[a-1].itPrice*cart[a-1].quantity;
	createTable(cart);
}
