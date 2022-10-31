//Assigment
var number = 15;
number *=3;

//Comparison
var num = 15
console.log(num == '15')

//if
var i = 7;
var j = 10;
if (i < j){
    console.log("Jika 7 lebih kecil dari 10 maka benar");
}

//if else
var buah = 'semangka';

		if(buah == 'jeruk') {
			console.log('Ini bukan buah semangka');
		} else if(buah == 'apel') {
			console.log('Ini adalah semangka');
		} else {
			console.log('Ini bukan semangka');
		}
 
//switch
var x = 2;
switch (x) {
    case 1:
        console.log(x);
        break;
    case 2:
        console.log(x+2);
        break;
    default:
        console.log(x+5);
}

// for
var i=1
for(i=1; i<=30; i++)
    console.log(i+ '\n');

//while
var i=0;
while (i<=15) {
    document.write(i + "<br />");
    i++;
}

//do while
var i = 4
var j = 4
do{
    console.log(i)
    i++
}while (i<=4)

while(j<=1){
    console.log(j)
    j++
}