function Detail(){
	var detail = new Object();
	detail.username = document.getElementById('uname').value;
	detail.phonenumber = document.getElementById('mobile').value;
console.log();
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4)&&(this.status == 200)){
			console.log(this.responseText);
			 uid=JSON.parse(this.responseText);
			
			sessionStorage.setItem('loggedInUser',uid.Users.UID);

            window.location.href = 'idea.html'; 

              
		}

	},
	/*xhttp.open('POST','http://192.168.1.2:7000/ideology/register',true);
	xhttp.setRequestHeader('Content-Type','application/json');
	xhttp.send(JSON.stringify(detail));*/
xhttp.open('GET','data/login.json',true);
	xhttp.setRequestHeader('Content-Type','application/json');
	xhttp.send();


}
