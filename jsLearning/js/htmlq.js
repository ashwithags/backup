function htmcall(){
	var detail = new Object();
	detail.username = document.getElementById('uname').value;
	detail.phonenumber = document.getElementById('mobile').value;
console.log();
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4)&&(this.status == 200)){
			console.log(this.responseText);
			/*var uid=JSON.parse(this.responseText)Users.id;
			console.log(uid);*/
            window.location.href = 'http://localhost/jsLearning/idea.html'; 


		}

	},
	xhttp.open('POST','http://192.168.1.13:7000/ideology/examsets',true);
	xhttp.setRequestHeader('Content-Type','application/json');
	xhttp.send(JSON.stringify(detail));

}

