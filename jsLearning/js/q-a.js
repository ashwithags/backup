
window.onload = function(){
	/*if(sessionStorage.getItem('loggedInUser') ==undefined || sessionStorage.getItem('loggedInUser')==null)
	{
		window.location.href="test.html";
	}	*/
	

	
var obj = new Object();
	if(sessionStorage.getItem('questionSet') == 'html'){
   obj.questionset ='htmlquestionset';
   obj.questionsetHome = '../data/htmlquestionset.json';
 } else if(sessionStorage.getItem('questionSet') == 'ajax'){
   obj.questionset ='ajaxquestionset';
   obj.questionsetHome = '../data/ajaxquestionset.json';
 } else if(sessionStorage.getItem('questionSet') == 'bootstrap'){
   obj.questionset ='bootstrapquestionset';
   obj.questionsetHome = '../data/bootstrapquestionset.json';
 } else if(sessionStorage.getItem('questionSet') == 'javascript'){
   obj.questionset ='javascriptquestionset';
   obj.questionsetHome = '../data/javascriptquestionset.json';
 } 
 
 ajaxProcedure(obj);
 //ajaxProcedureHome(obj);
};

var quizQuestion = '';
var count = 0;
var correctAns = 0;

function ajaxProcedure(a){
  var y = new XMLHttpRequest();
  y.onreadystatechange = function() {
    if (this.readyState == 4) {
        var quizQuestion = JSON.parse(this.responseText);
        window.sessionStorage.setItem('ques', JSON.stringify(quizQuestion.questions));
        showQues(quizQuestion.questions);
    }
  };
  y.open('POST', 'http://192.168.1.2:7000/ideology/examsets', true);
  y.setRequestHeader("Content-Type", "application/json");
  y.send(JSON.stringify(a));
}

function ajaxProcedureHome(a){
  console.log(a);
  var y = new XMLHttpRequest();
  y.onreadystatechange = function() {
    if (this.readyState == 4) {
        var quizQuestion = JSON.parse(this.responseText);
        window.sessionStorage.setItem('ques', JSON.stringify(quizQuestion.questions));
        showQues(quizQuestion.questions);
    }
  };
  y.open('GET', , true);
  y.setRequestHeader("Content-Type", "application/json");
  y.send(JSON.stringify(a));
}

function showQues(data){
  var div ="<div class='container'>";

  var structure='<div><h2><p>'+sessionStorage.getItem('questionSet')+' Questions</p></h2>';

  var Questdata='';
  Questdata +='<h5>'+data[count].question+ '</h5>' + '<ul><li><input type="radio" class="" name="option"  value='+data[count].choices[0]+'>' + data[count].choices[0] + '</li><li><input type="radio" class="" name="option" value='+data[count].choices[1]+'>' + data[count].choices[1] + '</li><li><input type="radio" class="" name="option"  value='+data[count].choices[2]+'>' + data[count].choices[2] + '</li><li><input type="radio" class="" name="option" value='+data[count].choices[3]+'>' + data[count].choices[3] + '</li></ul>' + '<button class="btn btn-success chkBtn" onclick="checkAnswer();">Check Answer</button><button class="btn btn-primary nextBtn" onclick="next();">Next</button>' + '<hr>';

  var finaldata = div + structure + Questdata +  '</div><div id="ans"></div></div>';
  document.getElementById('divcontenet').innerHTML= finaldata;
}

function checkAnswer(){
  //var radioinput = document.querySelector('input[name="option"]:checked').value;
  var radioinput = $('input[name="option"]:checked').val();
  console.log(radioinput);
  var answers = JSON.parse(window.sessionStorage.getItem('ques'));
  //document.getElementsByClassName( 'chkBtn' ).style.display = 'none';
  $('.chkBtn').hide();
  $('.nextBtn').show();
  if(answers[count].correct === radioinput){
    $('#ans').text('Wow Correct Answer');
    correctAns++;
  } else {
    $('#ans').text('Sorry Wrong Answer');
  }
}

function next(){
  var questionset = JSON.parse(window.sessionStorage.getItem('ques'));
  if(count == questionset.length-1){
    $('.container').html('<h1>Wow This is Your Result: '+correctAns*100/questionset.length+'%  </h1>');
    //alert('Your Score : '+ correctAns); 
  } else {
    count++;
    showQues(questionset);
  }
}
