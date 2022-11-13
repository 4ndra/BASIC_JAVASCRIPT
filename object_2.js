/*var person = {
    name: 'Andra',
    height: 175,
    weight: 55,
}

function beratbadan(weight, ideal){
    
}*/

/*function kopiMix(gula, kopi, cream)

        this.gula = gula;
        this.kopi = kopi;
        this.cream = cream;

    //instance object using new

    var kopiSaya = new kopiMix('banyak','banyak','sedikit');
    var kopiKamu = new kopiMix('banyak','banyak','sedikit');
    console.log('Kopi Saya Gulanya Banyak');
    console.log('Kopi Saya Gulanya Sedikit');
    console.log('Kopi Kamu Gulanya banyak');*/

    /*function person(name, age, color)
            this.name = name;
            this.age = age;
            this.favColor = color;
            this.changeName = function changeName(name){
            this,name = name;
        }
        var p = new person('John', 30, 'blue')
        p.changeName('Asep')
        console.log(p.name)
        p.changeage(30)*/

        function bilangan (x, y){
            this.x = x,
            this.y = y,
            this.jumlah = function jumlah(x,y){
                c = x+y;
                return c;
            }
        }

        var b = new bilangan(3,1)
        var a = b.jumlah (b.x,b.y)
        console.log(a)