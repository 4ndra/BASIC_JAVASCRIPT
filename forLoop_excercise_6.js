/*const bintang = "*";
const spasi = " ";
for (var baris = 5, bbintang=1; baris > 0; baris--, bbintang++) {
    console.log(spasi.repeat(baris-1)+bintang.repeat(bbintang));
}
for (var baris = 0, bbintang=5; bbintang > 0; baris++, bbintang--) {
    console.log(bintang.repeat(bbintang)+spasi.repeat(baris));
} 
*/

//The Conditionless For
for(var row=0;row<=5;row++){
	for(var col=0;col<=6;col++){
		if(( (col%3!=0) && (row == 0) ) || ((col%3==0) && (row == 1))){
			document.write("* &nbsp");
		}else if(row - col == 2 || row + col == 8){
			document.write("* &nbsp");
		}
		else{
			document.write("&nbsp &nbsp");
		}
	}
	document.write("<br>");
}	