function Employee(first,lname,age,company){// create a prototype of object
	this.firstname = first;
	this.lastname = lname;
	this.age = age;
	this.organisation = company;
	this.name = function(){
		return this.firstname+' '+this.lastname;
	}
}

var emp1 = new Employee("Ashwitha","GS", 26, "ABC");
var emp2 = new Employee("Manasha","Prakash", 26, "DEF");
var emp3 = new Employee("Vasanth","B", 26, "GHI");

Employee.prototype.nationality="Indian";


console.log(emp1);
console.log(emp2);
console.log(emp3);