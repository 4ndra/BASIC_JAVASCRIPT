function segitiga2(panjang) {
    var hasil = '';
    for ( i = 0; i < panjang; i++) {
        for ( j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(5));

function segitiga1(panjang) {
    var hasil = '';
    for (var i = 0; i < panjang; i++) {
        for (var j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(5));