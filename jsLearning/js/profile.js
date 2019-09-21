var employeeRecords = new Array();

employeeRecords.push({UID: 'TECH0001',name: "Ashwitha", age:23, phoneNum: 8971324336, place: 'KR Road'});
employeeRecords.push({UID: 'TECH0002',name: "Ankan", age: 26, phoneNum: 9916096639, place: 'KS Layout'});
employeeRecords.push({UID: 'TECH0003',name: "Vasanth", age: 25, phoneNum: 2323232323, place: 'BTM Layout'});
employeeRecords.push({UID: 'TECH0004',name: "Manasa", age: 25, phoneNum: 3333333333, place: 'Arekere'});


function getEmp(){
	var tableData = '';
	var tableStruct = '<table border=1 width=100%><thead><th>UID</th><th>Name</th><th>Age</th><th>Phone Number</th><th>Place</th></thead><tbody>';
	for(var i=0;i<employeeRecords.length;i++) {
		//console.log(tableData);
		tableData += '<tr><td>'+employeeRecords[i].UID+'</td><td>'+employeeRecords[i].name+'</td><td>'+employeeRecords[i].age+'</td><td>'+employeeRecords[i].phoneNum+'</td><td>'+employeeRecords[i].place+'</td></tr>';
	}
	//console.log(tableData);
	document.getElementById('data').innerHTML=tableStruct+tableData+'</tbody></table>';
}

var random = 
[{
	"gender": "female",
	"name": {
		"title": "mrs",
		"first": "lillian",
		"last": "hale"
	},
	"location": {
		"street": "9006 james st",
		"city": "toowoomba",
		"state": "queensland",
		"postcode": 9668
	},
	"email": "lillian.hale@example.com",
	"dob": "1989-10-29 20:07:09",
	"phone": "09-4861-6515",
	"cell": "0418-252-552",
	"id": {
		"name": "TFN",
		"value": "879783338"
	},
	"picture": {
		"large": "https://randomuser.me/api/portraits/women/28.jpg",
		"medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
		"thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
	},
	"nat": "AU"
},
{
	"gender": "female",
	"name": {
		"title": "ms",
		"first": "aubrey",
		"last": "slawa"
	},
	"location": {
		"street": "8524 regent ave",
		"city": "springfield",
		"state": "ontario",
		"postcode": 32193
	},
	"email": "aubrey.slawa@example.com",
	"dob": "1977-01-10 10:15:47",
	"phone": "933-616-9575",
	"cell": "332-810-5400",
	"id": {
		"name": "",
		"value": null
	},
	"picture": {
		"large": "https://randomuser.me/api/portraits/women/28.jpg",
		"medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
		"thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
	},
	"nat": "CA"
},
{
	"gender": "female",
	"name": {
		"title": "mrs",
		"first": "ellie",
		"last": "murray"
	},
	"location": {
		"street": "5278 broadway",
		"city": "york",
		"state": "derbyshire",
		"postcode": "R73 9BE"
	},
	"email": "ellie.murray@example.com",
	"dob": "1983-01-25 02:57:04",
	"phone": "015242 54264",
	"cell": "0787-524-459",
	"id": {
		"name": "NINO",
		"value": "CA 55 32 94 C"
	},
	"picture": {
		"large": "https://randomuser.me/api/portraits/women/39.jpg",
		"medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
		"thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
	},
	"nat": "GB"
},
{
	"gender": "male",
	"name": {
		"title": "mr",
		"first": "william",
		"last": "morgan"
	},
	"location": {
		"street": "1833 windsor road",
		"city": "leeds",
		"state": "berkshire",
		"postcode": "S5 5AZ"
	},
	"email": "william.morgan@example.com",
	"dob": "1970-06-26 16:54:25",
	"phone": "017687 74477",
	"cell": "0723-822-243",
	"id": {
		"name": "NINO",
		"value": "LG 14 61 78 R"
	},
	"picture": {
		"large": "https://randomuser.me/api/portraits/men/69.jpg",
		"medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
		"thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
	},
	"nat": "GB"
},
{
	"gender": "female",
	"name": {
		"title": "ms",
		"first": "julide",
		"last": "tibben"
	},
	"location": {
		"street": "3450 keulsekade",
		"city": "bloemendaal",
		"state": "groningen",
		"postcode": 45005
	},
	"email": "julide.tibben@example.com",
	"dob": "1991-08-07 21:14:45",
	"phone": "(044)-538-0605",
	"cell": "(411)-966-2891",
	"id": {
		"name": "BSN",
		"value": "58555325"
	},
	"picture": {
		"large": "https://randomuser.me/api/portraits/women/94.jpg",
		"medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
		"thumbnail": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
	},
	"nat": "NL"
}]





var newArr;

function getDetail(){
	var tableData = '';
	var structure='<table border=1 width=100%><thead><th>Profile Pic</th><th>Name</th><th>Gender</th><th>Location</th><th>Email</th><th>DOB</th><th>Phone</th><th>Cell</th><th>id</th><th>Nationality</th><th></th></thead><tbody>';
	
			for(var i=0;i<random.length;i++){
				tableData +='<tr><td><img src='+random[i].picture.medium+
				'></td><td style="text-transform: capitalize;">'+random[i].name.title+'. '+random[i].name.first+' ' +random[i].name.last+
				'</td><td style="text-transform: capitalize;">'+random[i].gender+'</td><td style="text-transform: capitalize;">'+random[i].location.street+
				'</br>'+random[i].location.city+'</br>'+random[i].location.state+'</br>'+ random[i].location.postcode+
				'</td> <td><a href=mailto:'+random[i].email+'>'+random[i].email+'</a></td><td>'+random[i].dob+'</td><td><a href=tel:'+random[i].phone+'>'+random[i].phone+'</a></td><td><a href=tel:'+random[i].cell+'>'+random[i].cell+
				'</a></td><td>'+random[i].id.name+random[i].id.value+'</td><td>'+random[i].nat+'</td><td><button onclick="deleteItem('+i+')">Delete My Data</button></td></tr>';
			}
			document.getElementById('profile').innerHTML=structure+tableData+'</tbody></table>';
		}
	

function deleteItem(data){
//	alert(data);
	console.log(random);
	random.splice(data,1);
	getDetail();
}


