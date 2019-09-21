/*document.write('Hi Welcome 2 JS');
var fname="AShwitha";
var lname="gs";
var name=fname+" "+lname;
document.writeln(name);

var a= 101, b=111, c= 91, d=201;
var large;

if(a>b){
	if(a>c){
		alert('A is Largest');
	}
} else if(b>c){
	alert('B is Largest');
} else {
	alert('C is Largest');
}*/
/*

if((a>b) && (a>c) && (a>d)){
	alert('A is Largest');
} else if((b>c) && (b>d)){
	alert('B is Largest');
} else if(c>d){
	alert('C is Largest');
} else {
	alert('D is Largest');
}



var d = new Date();
var hr = d.getHours();


if((hr>=6) && (hr<12)){
	alert("gud morning");
}
else if((hr>=12) && (hr<16)){
	alert("gud afternoon");
}
else if((hr>=16) && (hr<19)){
	alert("gud evening");
}
else if((hr>=19) && (hr<=23)){
    alert("gud night");
}
else {
	alert("sleep well");
}

switch(d.getDay()){
	case 0:
		alert('Sunday');
		break;
	case 1:
		alert('monday');
		break;
	case 2:
		alert('tuesday');
		break;
	case 3:
		alert('wednesday');
		break;
	case 4:
		alert('thursday');
		break;
	case 5:
		alert('friday');
		break;
	case 6:
		alert('Satday');
		break;
	default:
		alert('No day value Captured');
		break;
}

var d = new Date();

var month='';
switch(d.getMonth())
{

	case 0: month="Jan";
	        break;

	case 1: month="Feb";
	        break;

	case 2: month="Mar";
	        break;

	case 3: month="Apl";
	        break;

	case 4: month="May";
	        break;

	case 5: month="jun";
	        break;

	case 6: month="Jul";
	        break;

	case 7: month="aug";
	        break;

	case 8: month="sep";
	        break;

	case 9: month="oct";
	        break;

	case 10: month="nov";
	        break;

	case 11: month="dec";
	        break;
	default: alert("Not a month");
	}


var Today_date = d.getFullYear()+"-"+month+"-"+d.getDate(); 
	alert(Today_date);


	/*for(var i=0; i<=10;i++)
	{
		if(i%2==0){
			console.log("even no: "+ i);
		}
		else{
			console.log("odd no: "+ i);
		}
	}*/

	/*var i=0;
	while(i<=10) {
		if(i%2==0){
			console.log("Even no: "+ i);
		}
		else{
			console.log("Odd no: "+ i);
		}
		i++;
	}*/

	/*var i=0;
	do{
		if(i%2==0){
			console.log("Even no: "+ i);
		}
		else{
			console.log("Odd no: "+ i);
		}
		i++;
	}
	while(i>=10);
	var arr = new Array();

	var a = {
		name: "Ankan",
		company: "ORACLE"
	};
	arr.push(a);
	var b = {
		name: "Ashwitha",
		company: "Scion Social"
	}
	arr.push(b);
	console.log(arr.length);

	for(var i=0;i<arr.length;i++){
		console.log(arr[i].name);
	}



var num1 = 2;
var num2 = 20;
    while (num1 < num2)
    {
      var flag = 0;

        for(var i = 2; i <= num1/2; i++)
        {
            if(num1 % i == 0)
            {
                flag = 1;
                break;
            }
        }

        if (flag == 0)
            console.log(i);

        ++num1;
    }

    return 0;
}

alert(window.screen.colorDepth);




find out browser name and browser version
based on browser version give banner kindly update ur browser.



var a = navigator.userAgent;
var b = alert(a);
alert(b);
if(b)
{
    alert("update browser");
}
*/


var bname="";
var x= navigator.userAgent;
if(x.indexOf('Chrome')!= -1){
	bname = "Chrome";
} else if((x.indexOf("Mozilla") !=-1) || (x.indexOf('Moz')!= -1)) {
	bname= "Firefox";
}
findVersion(bname);

function findVersion(dt){
	var patt = dt+'\/(\\d+)';
	var pattern = new RegExp(patt); 	
	var result =pattern.exec(navigator.userAgent);
	var versionNo = Number(result[1]);
	checkVersion(dt,versionNo);
}


function checkVersion(a,b){
	if((a == 'Chrome') && (b<60)) {
		document.getElementById('banner').style.display = 'block';
		document.getElementById('bname').innerHTML= " "+a+ " ";
	} else if((a == 'Firefox') && (b<54)){
		document.getElementById('banner').style.display='block';
		document.getElementById('bname').innerHTML= " "+a+ " ";
	}
}


var x = document.getElementById('cancel');
x.addEventListener("click",function(){ 
	var abc = window.confirm("You seriously don't want to update it");
	if(abc){
		console.log(window.location);
	} else {
		window.location.href="https://www.google.com";
	}
});


