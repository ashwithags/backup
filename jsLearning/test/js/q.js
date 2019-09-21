window.onload = function(){
	/*if(sessionStorage.getItem('loggedInUser') ==undefined || sessionStorage.getItem('loggedInUser')==null)
	{
		window.location.href="test.html";
	}
	*/
	var obj = new Object();
	if(sessionStorage.getItem('questionSet')=='html'){
		obj.questionset = 'htmlquestionset';
	} else if(sessionStorage.getItem('questionSet')=='ajax'){
		obj.questionset = 'ajaxquestionset';
	}else if(sessionStorage.getItem('questionSet')=='js'){
		obj.questionset = 'javascriptquestionset';
	}else if(sessionStorage.getItem('questionSet')=='bootstrap'){
		obj.questionset = 'bootstrapquestionset';
	}


	ajaxProcedure(obj);
};

function ajaxProcedure(a){
	var tableData = '';
	var structure='<table border=0 cell-spacing=0><thead><th></th><th><p>'+sessionStorage.getItem('questionSet')+' Questions</p></th></thead><tbody>';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if((this.readyState == 4)&&(this.status == 200)){
			var quest = JSON.parse(this.responseText);
        
       for(i=0;i<quest.questions.lenght;i++){
         tableData +='<tr><td>Q1.</td><td>'+quest.questions[i].question+'</td></tr><tr><td>Choice.</td><td><input name="option" type=radio>'+quest.questions[0].choices[0]+'</br><input name="option" type=radio>'+quest.questions[i].choices[1]+'</td></tr>'+'</td></tr><tr><td></td><td><input class="sub" type=button value=CHECK></td></tr>';
       }

	
		document.getElementById('q').innerHTML=structure+tableData+'</tbody></table>';

		}
	};
	xhttp.open('POST','http://192.168.1.5:7000/ideology/examsets',true);
	xhttp.setRequestHeader('Content-Type','application/json');
	xhttp.send(JSON.stringify(a));
}