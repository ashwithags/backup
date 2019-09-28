function addnewQuestion(){
	var category = document.getElementById('category').value;
	var fileName = getQuestionData(category);
	console.log(fileName);
	

	var options = new Array();
	options.push(document.getElementById('opt1').value);
	options.push(document.getElementById('opt2').value);
	options.push(document.getElementById('opt3').value);
	options.push(document.getElementById('opt4').value);
	var questionNew = new Object();
	questionNew.question = document.getElementById('quest').value;
	questionNew.choices = options;
	questionNew.correct = document.getElementById('Correct').value;

	console.log(questionNew);

	var y = new XMLHttpRequest();
	y.onreadystatechange = function() {
		if (this.readyState == 4) {
		    var data = JSON.parse(this.responseText);
		    //console.log(data.questions);
		    data.questions.push(questionNew);
		    console.log(JSON.stringify(data));
		}
	};
	y.open('GET', fileName, true);
	y.setRequestHeader("Content-Type", "application/json");
	y.send();

	//console.log(currentData);
	
}


function getQuestionData(a){
	if(a == "Bootstrap"){
		return 'data/bootstrapquestionset.json';
	} else if(a == "JavaScript"){
		return 'data/javascriptquestionset.json';
	} else if(a == "Ajax"){
		return 'data/ajaxquestionset.json';
	} else if(a == "HTML"){
		return 'data/htmlquestionset.json';
	}

}