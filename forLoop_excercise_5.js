var hasil = ''

for(i=10;i>0;i--){
    for(j=1;j<=i-1;j++){
    console.log("*");
    }
for(y=1;y<=10-i+1;y++){
    console.log(" * ");
    }
for(l=1;l<=10-i;l++){
    console.log(" * ");
    }
    console.log("*");
    }
for(i=1;i<=10;i++){
for(j=1;j<=i;j++){
    console.log("");
    }
for(y=1;y<=10-i;y++){
    console.log(" * ");
    }
for(l=1;l<10-i;l++){
    console.log(" * ");
    }
    console.log(" ");
    }