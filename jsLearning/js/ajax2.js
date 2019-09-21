//collect values from form and send to server


function getDetail(){
	var detail = {};
	detail.name=document.getElementById('name').value;
	detail.place=document.getElementById('place').value;
	detail.mobile = document.getElementById('mobile').value;
	detail.state = document.getElementById('state').value;
	console.log(detail);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4)&&(this.status == 200)){
			var mes=JSON.parse(this.responseText);
			console.log(mes);
			if(mes.message=="New User Account Created")
			{
			    displayDetails();
		    }
		}
	};
	xhttp.open('POST','http://192.168.1.2:3000/insertData',true);
	xhttp.setRequestHeader('Content-Type','application/json');
	xhttp.send(JSON.stringify(detail));
}

//get value from server and display it.
function displayDetails(){
	var tableData = '';
	var structure='<table border=1 width=100%><thead><th>Name</th><th>Place</th><th>Mobile No</th><th>State</th><th></th><th></th></thead><tbody>';
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4)&&(this.status == 200)){
			var random = JSON.parse(this.responseText);
			for(var i=0;i<random.length;i++){
				tableData +='<tr><td>'+random[i].name+'</td><td>'+random[i].place+'</td><td>'+random[i].mobile+'</td><td>'+random[i].state+'</td><td><input type="button" onclick="deleteUser('+random[i].id+')" value="Delete" /></td><td><input type="button" onclick="editUser('+random[i].id+')" value="Edit" /></td></tr>';
			}
			document.getElementById('Details').innerHTML=structure+tableData+'</tbody></table>';
		}
	};
	xhttp.open('GET','http://192.168.1.2:3000/getData',true);
	xhttp.send();
}

//delete user detail from server based on id
function deleteUser(x){
	var user = new Object();
	user.id = x;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4)&&(this.status == 200)){
			var mes=JSON.parse(this.responseText);
			console.log(mes);
			displayDetails();
		}
	};
	xhttp.open('DELETE','http://192.168.1.2:3000/removeUser',true);
	xhttp.setRequestHeader('Content-Type','application/json');
	xhttp.send(JSON.stringify(user));
}

window.onload = function(){
	displayDetails();
}

//
function editUser(ashw){
	sessionStorage.setItem('editUserID', ashw);
	document.getElementById('add1').style.display = 'none';
	document.getElementById('add2').style.display = 'block';
	var url = 'http://192.168.1.2:3000/getUserInfo/'+ashw;
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4)&&(this.status == 200)){
			var data = JSON.parse(this.responseText);
			document.getElementById('name').value=data.name;
			document.getElementById('place').value=data.place;
			document.getElementById('mobile').value=data.mobile;
			document.getElementById('state').value=data.state;
		}
	};
	xhttp.open('GET',url,true);
	xhttp.send();
}

function editDetail(){
	var user = new Object();
	user.id = sessionStorage.getItem('editUserID');
	user.name = document.getElementById('name').value;
	user.place=document.getElementById('place').value;
	user.mobile = document.getElementById('mobile').value;
	user.state = document.getElementById('state').value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4)&&(this.status == 200)){
			var mes=JSON.parse(this.responseText);
			console.log(mes);
			displayDetails();
		}
	};
	xhttp.open('PUT','http://192.168.1.2:3000/updateUserDetails',true);
	xhttp.setRequestHeader('Content-Type','application/json');
	xhttp.send(JSON.stringify(user));
}