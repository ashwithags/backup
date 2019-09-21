function getSalary() {

var sal = document.getElementById('salary').value;
var salary= Number(sal);


var basic=salary*0.40;
var hra=basic*0.50;
var mr=15000;
var gratuity=basic*0.05;
var convinience=20000;
var pf= basic*0.12;
var epf= basic*0.12;
var spa= salary-(basic+hra+mr+gratuity+convinience+pf+epf);

var takehome=salary-(pf+epf);

var tdata='';
var tableSt='<table><thead><th>Component</th><th>Monthly</th><th>Yearly</th></thead><tbody>';

var tdata = '<tr><td>Basic</td>'+'<td>'+(basic/12).toFixed(2)+'</td><td>'+basic+'</td></tr><tr><td>MR</td>'+'<td>'+(hra/12).toFixed(2)+'</td><td>'+hra+'</td></tr><tr><td>HRA</td>'+'<td>'+(mr/12).toFixed(2)+'</td><td>'+mr+'</td></tr><tr><td>Gratuity</td><td>'+(gratuity/12).toFixed(2)+'</td><td>'+gratuity+'</td></tr><tr><td>Conveyance</td><td>'+(convinience/12).toFixed(2)+'</td><td>'+convinience+'</td></tr><tr><td>SPA</td><td>'+(spa/12).toFixed(2)+'</td><td>'+spa+'</td></tr><tr><td>PF</td><td>'+(pf/12).toFixed(2)+'</td><td>'+pf+'</td></tr><tr><td>EPF</td><td>'+(epf/12).toFixed(2)+'</td><td>'+epf+'</td></tr><tr><td>NET salary</td><td>'+(salary/12).toFixed(2)+'</td><td>'+salary+
	'</td></tr><tr><td>Takehome salary</td><td>'+(takehome/12).toFixed(0)+'</td><td>'+takehome+
	'</td></tr></tbody></table>';

document.getElementById('slip').innerHTML=tableSt+tdata;

}



function add1()
{
	var x= arguments;
	var sum =0;
	for(var i=0;i<x.length;i++)
	{
		sum+=x[i];
	}
console.log(sum);
}

add1(2,4,4,56,6,3);