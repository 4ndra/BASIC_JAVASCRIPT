/* lesson 2.1
var orang = {
    name: "Andra",
    age: 18,
    favColor: 'blue',
    height: 175,
    weight: 55,
}

console.log(orang.name);*/

//lesson 25.1
//var course = {name: 'menjahit', lesson: 20}
//console.log(course.name.length);

//lesson 26
/*
function person(name, age, color){
    this.name = name
    this.age = age
    this.favColor = color
}

//instant object
var p1 = new person("John", 37, "red")
var p2 = new person("Jordi", 27, "pink")

console.log(p1.name);
console.log(p2.favColor);
console.log(p1.name+ 'dan'+ p2.name+ 'menyukai'+ p2.favColor)
*/

//lesson 35
function makan(status, food){
    this.status = status;
    this.food = food;
    this.changeStatus = function(status){
        this.status =status
    }
}

var p1 = new makan('berdoa', 'mie');
p1.changeStatus('Sedang makan')
console.log(p1.status+"makan"+p1.food)