 
//function getPaySlipTable(){
document.getElementById('getPaySlipTable').addEventListener('click',function(){
	alert('Wow');
	var tP = document.getElementById("totalPay").value;
	var bP = tP * 0.4;
	var hra = bP * 0.5;
	var medReimb = 15000;
	var grat = bP * 0.05;
	var conveyance = 19200;
	var PF = bP *0.12;
	var EPF = bP * 0.12;
	var spa = tP-(bP+hra+medReimb+grat+conveyance+PF+EPF);
	var netSal = (bP+hra+medReimb+grat+conveyance+PF+EPF+spa);
	var takeHome = netSal - (PF +EPF);
	var table = '<table><thead><th> COMPONENT</th><th> MONTHLY</th><th> YEARLY</th></thead><tbody>';

	var tData = '<tr><td>BasicPay</td><td>'+(bP/12).toFixed(2)+'</td><td>'+bP+'</td></tr><tr><td>HRA</td><td>'+(hra/12).toFixed(2)+'</td><td>'+hra+'</td></tr><tr><td>Medical </td><td>'+(medReimb/12).toFixed(2)+'</td><td>'+medReimb+'</td></tr><tr><td>Gratuity</td><td>'+(grat/12).toFixed(2)+'</td><td>'+bP+'</td></tr><tr><td>BasicPay</td><td>'+(bP/12).toFixed(2)+'</td><td>'+grat+'</td></tr><tr><td>Conveyance</td><td>'+(conveyance/12).toFixed(2)+'</td><td>'+conveyance+'</td></tr><tr><td>P F </td><td>'+(PF/12).toFixed(2)+'</td><td>'+PF+'</td></tr><tr><td>E P F</td><td>'+(EPF/12).toFixed(2)+'</td><td>'+EPF+'</td></tr><tr><td>S P A</td><td>'+(spa/12).toFixed(2)+'</td><td>'+spa+'</td></tr><tr><td>NET SALARY</td><td>'+(netSal/12).toFixed(2)+'</td><td>'+netSal+'</td></tr><tr><td>MONTHLY TAKE HOME</td><td>'+(takeHome/12).toFixed(2)+'</td><td>'+takeHome+'</td></tr>';
	var finalData = table + tData + '</tbody></table>';

	document.getElementById("payslipTable").innerHTML = finalData;


});

