
/*
1. Light
2. Dark
3. Nocturne
4. Terminal
5. Indigo
*/

//Cara 1
if (pilihan == 1)
console.log ('light')
else if (pilihan == 2){
   console.log ('Dark')
}else if (pilihan == 3){
    console.log ('Nocturne')
}else if (pilihan == 4){
   console.log ('Terminal')
}else{
    console.log ('Indigo')
}

//Cara 2
switch (pilihan){
    case 1 : console.log ('light')
    break

    case 2 : console.log ('Dark')
    break

    case 3 : console.log ('Noctune')
    break

    case 4 : console.log ('Terminal')
    break

    default : console.log ('indigo')
}

//Cara 3
console.log(pilihan == 1 ? "light":
(pilihan == 2 ? "Dark" :
(pilihan == 3 ? "Nocturne":
(pilihan == 4 ? "Terminal" : "indigo"))))