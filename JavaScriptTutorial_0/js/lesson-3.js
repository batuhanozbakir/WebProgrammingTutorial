function DiziOrnekleri(){
    var numbers = [3,5,12,4,9,19];
console.log(numbers);

for(let i = 1; i <=5; i++){
    numbers.sort(function(a,b){ 
        //console.log(`${a} - ${b} = ${a-b}`);
        return 0.5 - Math.random();});
    console.log(numbers);
}
}

// DiziOrnekleri()

//String ifadeler için fonksiyonlar

function MetinselOrnekler(){
    var metinselifade = "merhaba dünya bugün hava çok güzel";
console.log(metinselifade.length);
console.log(metinselifade[0]);
console.log(metinselifade.lastIndexOf("ün")); //sondan sayma
console.log(metinselifade.indexOf("ün")); // baştan sayma
console.log(metinselifade.search("ün")); // ün ara,RegEx kullanımı
console.log(metinselifade.includes("ün",31)); // içeriyor mu bool
console.log(metinselifade.slice(4,26)); // 4,26 arasını aldı
console.log(metinselifade.replace("ün","UN")); //ilk bulduğu ünü UN yaptı
console.log(metinselifade.replace("ün","UN").replace("ün","UN").replace("ün","UN"));
console.log(metinselifade.replaceAll("ün","UN"));

console.log("-".repeat(10));

console.log("bugün Yarın DÜN ISI YAĞMUR".toUpperCase());
console.log("bugün yarin dün isi yağmur".toLowerCase());
console.log("BUGÜN YARIN DÜN ISI YAĞMUR".toLocaleLowerCase("tr"));
console.log("bugün yarın dün ısı yağmur".toLocaleUpperCase("tr"));
console.log("-".repeat(10));
console.log(metinselifade.charAt(10));
console.log(metinselifade.split(" ").join("|"));
console.log(metinselifade.replaceAll(" ","|"));
}
// MetinselOrnekler();

// matematik işlemler

function MatematikselOrnekler(){
    const PI = Math.PI;

    console.log(PI);
    console.log(typeof(PI));
    console.log(PI.toFixed(0));
    console.log(PI.toFixed(2));
    console.log(PI.toFixed(5));
    console.log(PI.toPrecision(5));

    console.log(Math.round(4.4)); // 4
    console.log(Math.round(4.5)); //5
    console.log(Math.round(4.6)); //5

    console.log(Math.ceil(4.4)); //5 yukarı kesin
    console.log(Math.ceil(4.5));
    console.log(Math.ceil(4.6));

    console.log(Math.floor(4.4)); // 4 kesin
    console.log(Math.floor(4.5));
    console.log(Math.floor(4.6));

    console.log(Math.min(3,5,9,-2,-77));
    console.log(Math.max(3,5,9,-2,-77));

    console.log(Math.pow(2,3));
    console.log(Math.sqrt(49));

    console.log(Math.random());

    var random = Math.random();
    console.log(random);
    console.log(Math.ceil(random*10));

    console.log(Math.E);
    console.log(Math.exp(2));//e^2 işlemini yapar
    console.log(Math.pow(Math.E,2));// e^2 işlemini yapar daha hassas değerlidir.
}

//MatematikselOrnekler();

function TarihselOrnekler()
{
    var bugun = new Date();
    console.log(bugun.getDate());   //1-31
    console.log(bugun.getDay());    //0-6 => 0 Pazar
    console.log(bugun.getMonth());  // 0-11
    console.log(bugun.getFullYear()); //yyyy
    console.log(bugun.getHours()); //0-23
    console.log(bugun.getMinutes());// 0-59
    console.log(bugun.getSeconds()); // 0-59
    console.log(bugun.getTime()); // milisaniye

    var herhangibirTarih = new Date(1970,0,29,6,30,7);
    console.log(herhangibirTarih);
    console.log(herhangibirTarih.getDate());   //1-31
    console.log(herhangibirTarih.getDay());    //0-6 => 0 Pazar
    console.log(herhangibirTarih.getMonth());  // 0-11
    console.log(herhangibirTarih.getFullYear()); //yyyy
    console.log(herhangibirTarih.getHours()); //0-23
    console.log(herhangibirTarih.getMinutes());// 0-59
    console.log(herhangibirTarih.getSeconds()); // 0-59
    console.log(herhangibirTarih.getTime()); // milisaniye

    console.log("----------");

    bugun.setDate(bugun.getDate() + 7);
    bugun.setMonth((bugun.getMonth() +7));
    bugun.setFullYear((bugun.getFullYear() + 7));
    console.log(bugun.getDate());
    console.log(bugun.getMonth());
    console.log(bugun.getFullYear());

}

TarihselOrnekler();

function KararYapilari()
{
    var random = Math.random();
    var sayi = Math.ceil(random*10)

    if(sayi > 5)
        console.log("5 den büyük");
    else if(sayi==5)
        console.log("5");
    else
    console.log("5 den küçük");

    switch(sayi){
        case 1:
            console.log("Sayı 1");
        case 3:
            console.log("Sayı 3");    
        case 5:
            console.log("Sayı 5");
        case 2:
        case 4:
        case 6:
            console.log("Sayı 2 yada 4 yada 6" + sayi);
            break;
                    
            default:
            console.log("sayı değeri alan dışı");
            break;
    }

}

// KararYapilari();

function HataYakalamaOrnekleri()
{
    var sayi = "123A";
        console.log(isNaN(sayi)); // Not a number
        console.log(isFinite(sayi)); // sonlu bir sayı mı false
    // try{
        
    //     var number = 5.123456;
    //     console.log(number.toFixed(101));
    // }catch(error){
    //     console.log(error.name);
    //     console.log(error.message);
    //     console.log(error.stack);
    // }

    // try{
        
    //     var number = 5.123456;
    //     console.log(number.toFixed(101));
    // }catch(error){
    //     console.log(error.name);
    //     console.log(error.message);
    //     console.log(error.stack);
    // }

    try{
        throw {name:"Özel durum", message:"Bir hata oluştu",stack:"line x y z"};
    } catch(error){
        console.log(error);
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }
}

//HataYakalamaOrnekleri();


