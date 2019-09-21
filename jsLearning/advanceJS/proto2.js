function CreateUser(fname,lname,initial,age,gender, mobile){// create a prototype of object 
	this.firstname = fname;
	this.lastname = lname;
    this.initial = initial;
	this.age = age;
	this.gender = gender;
	this.mobile = mobile;
	this.flname = function(){
		return this.firstname+' '+this.lastname;
	}
}

CreateUser.prototype.fullname = function(){
	return this.initial+' '+this.firstname+' '+this.lastname;
}

CreateUser.prototype.nationality = "Indian";

var emp1 = new CreateUser("Ashwitha","GS", "Ms", 26, "F", 8974242424);
var emp2 = new CreateUser("Manasa","k", "Ms", 26, "F", 8987982424);
var emp3 = new CreateUser("Vasanth","A", "Mr", 26, "M", 8974565545);



console.log(emp1);
console.log(emp2);
console.log(emp3);