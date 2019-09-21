setTimeout(function(){alert("hi");});
408


setTimeout(function(){alert("hi"),3000;});// loades afer 3 sec

var x= window.location.href;// gives url 

netscape// browser engine


navigator object//

navigator.appName;
"Netscape"
navigator.appVersion;
"5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
navigator.userAgent
"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"



navigator.userAgent
"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
navigator.languages
(2) ["en-US", "en"]
navigator.cookieEnabled;
true
navigator.onLine;
true
navigator.platform;
"Win32"
navigator.plugins;
PluginArray {0: Plugin, 1: Plugin, 2: Plugin, 3: Plugin, length: 4}length: 40: Plugindescription: "Enables Widevine licenses for playback of HTML audio/video content. (version: 1.4.8.984)"filename: "widevinecdmadapter.dll"length: 1name: "Widevine Content Decryption Module"0: MimeType__proto__: Plugin1: Plugindescription: ""filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai"length: 1name: "Chrome PDF Viewer"0: MimeType__proto__: Plugin2: Plugindescription: ""filename: "internal-nacl-plugin"length: 2name: "Native Client"0: MimeType1: MimeType__proto__: Plugin3: Plugindescription: "Portable Document Format"filename: "internal-pdf-viewer"length: 1name: "Chrome PDF Viewer"0: MimeType__proto__: Plugin__proto__: PluginArray



navigator.getBattery();
Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}__proto__: Promisecatch: function catch()constructor: function Promise()then: function then()arguments: nullcaller: nulllength: 2name: "then"__proto__: function ()Symbol(Symbol.toStringTag): "Promise"__proto__: Object[[PromiseStatus]]: "resolved"[[PromiseValue]]: BatteryManagercharging: truechargingTime: InfinitydischargingTime: Infinitylevel: 0.19onchargingchange: nullonchargingtimechange: nullondischargingtimechange: nullonlevelchange: null__proto__: BatteryManager



//screen object



document.getElementById('cancel');
<button id=​"cancel">​Cancel​</button>​
var x = document.getElementById('cancel');
undefined
x.innerHTML ='<p>Hey I am Ashwitha</p>';
"<p>Hey I am Ashwitha</p>"
var x = document.getElementById('cancel');

onfocus vs onblur

function checkname(){

    alert(document.getElementById('fname').value);
}


document.getElementById("fname").addEventListener("blur",function() {

});

onblur
onfocus
onmouseup/down
onload


local storage/ session storage/cookie/browser storage

normal operation of form method get method//
so we use preventDefault method to hide in javascript

<input type="text" name="fname" value="Name">








-------------------object------------------------------

Everything is a object
create empyt object and fill

var x = new Object();
var y = {};  // also object. 
var y = [];  //is an array,


x.name= "ash";//// assigning value for an empty object
x.company = "scion";
x.age = "24";




var z= {
    name : "ash",
    company: "scion"
};
z.nationality ="Indian";


var a = new Object();
undefined
a.name = "ash";
"ash"
a.age=24;
24
a
{name: "ash", age: 24}
var b =a;
undefined
b.place="puttur";
"puttur"
b
{name: "ash", age: 24, place: "puttur"}
a
{name: "ash", age: 24, place: "puttur"}



delete(a.age);
true
typeof(x)
"undefined"
typeof(a)
"object"
JSON.stringify(a)
"{"name":"ash","place":"puttur"}"
var c= JSON.stringify(a);
undefined

c
"{"name":"ash","place":"puttur"}"
typeof(c)
"string"

JSON.parse(c)
{name: "ash", place: "puttur"}
typeof(c)
"string"



/// mozilla dveloper network


var vehicle = new Array();

var vehicle= ["Yamaha","RE"];

vehicle.push("Active");// add element to array last
vehicle.pop(); // delelte element from last
vehicle.shift(); // delete from first
vehicle.unshift('Yamaha'); // add to the begining
vehicle.sort(); // sort in accending order
(5) ["Honda", "RE", "Suzuki", "TVS", "Yamaha"]


////----------------------------------------------------------------------------

vehicle;
(6) ["Yamaha", "Honda", "RE", "Suzuki", "TVS", "Yamaha"]
vehicle.indexOf('RE');// find index at which item present
2
var name = "Ashwitha";

name.split('');// convert string into array

(8) ["A", "s", "h", "w", "i", "t", "h", "a"]

var name1=name.split('');
name1;
(8) ["A", "s", "h", "w", "i", "t", "h", "a"]

var name2=name1.reverse();// use to reverse arrary element
undefined

name2
(8) ["a", "h", "t", "i", "w", "h", "s", "A"]

name2.join(',');
"a,h,t,i,w,h,s,A"

name2.join('');// join array element
"ahtiwhsA"


var veh = ['BMW','Merc','Audi','Jaguar','Toyota'];
var newArr = vehicle.concat(veh); // add two array element
newArr;
(11) ["Yamaha", "Honda", "RE", "Suzuki", "TVS", "Yamaha", "BMW", "Merc", "Audi", "Jaguar", "Toyota"]