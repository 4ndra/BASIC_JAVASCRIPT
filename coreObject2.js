//lesson 37
/*
    var courses = new Array ('menjahit', 'berenang', 'memasak')
    console.log(courses[1])
    courses[1] = 'menyanyi'
    console.log(courses[1])
*/
//lesson 38
/*
    var courses =new Array(3)
    courses[0] = 'menjahit'
    courses[1] ='berenang'
    courses[2] ='memasak'
    courses[3] ='mencuci'
    console.log(courses[3])
*/

   // var courses = ['menjahit', 'berenang', 'menyanyi']
//  console.log(2)

//lesson 39
/*
     var makan = ['mie ayam', 'bakso', 'seblak']
     console.log(makan.length)
*/
/*
    var concatArray = courses.concat(menu)
    console.log(concatArray)
*/
/*
 function main(){
    var levels = parseInt(readlLine(),10)
    var points = new Array();

    var count = 0;
    while(count<levels){
        var elem = parseInt(readlLine(),10)
        points[count] = elem;
        count++;
    }
    var sum =0;
    sum = points.reduce(function(a, b){
        return a+b
    }, 0)
    console.log(sum);
 }   
 */
//lesson 40
   /* function person(name,age)
    {
        this.name = name
        this.age = age
    }*/
   /* var person ={
        name : 'john',
        age : 22,
    }

    var person2 = []
    var a = person['name'] = 'john'
    var b = person['age'] = 20

    console.log(a)
    console.log(b)
    console.log(person['name'])
    console.log(person['age'])
    */

   //lesson 41
   //console.log(Math,PI)
   //console.log(Math.sqrt(81))
   /*var random = Math.ceil(Math.random() * 10)
   console.log(random)*/
    var n = prompt('Enter a Number', '');
    var answer = Math.sqrt(n);
    console.log('the square root of'+n+'is'+answer)