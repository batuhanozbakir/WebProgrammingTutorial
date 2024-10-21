// Array

var gunler =["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
console.log(gunler[0]);
console.log(gunler[2]);
console.log(gunler[4]);
console.log(gunler);
console.log(gunler.length);

for (let i = 0; i < gunler.length; i++) 
    {   
        if(i % 2 == 0)
            continue;
        console.log(gunler[i]);
        
    }

    console.log("--------");

    gunler.forEach(function(gun,index)
    {   
        if(index < 5)
            console.log(index +". Index Değeri = " + gun);
    });

    console.log("--------");

for (let i = 0; i < gunler.length; i++) 
     {   
            if(i > 4)
                break;
            console.log(gunler[i]);
     }

let sayac = 1;


while(true)
    {
        sayac++;
    
        if(sayac % 32 == 25)
            break;
    }

    console.log(sayac);
    sayac=1;


while(sayac < 10)
    {
        console.log(sayac);
        sayac++;
    }


console.log("---------------")
    
do
{
    console.log(sayac);
    sayac--;
}
while(sayac > 0)


var sayilar = new Array(5);
console.log("array length = " + sayilar.length);
console.log(sayilar);

sayilar[0]=3;
sayilar[1]=5;
sayilar[2]=45;
sayilar[3]=1;
sayilar[4]=7;

console.log("array length = " + sayilar.length);
console.log(sayilar);

sayilar[5]=9;

console.log("array length = " + sayilar.length);

console.log(sayilar);

sayilar.push(39);

console.log("array length = " + sayilar.length);

console.log(sayilar);

sayilar[10] = 777;

console.log("array lenght = " + sayilar.length);

console.log(sayilar);

sayilar.unshift(4);
console.log("array lenght = "+ sayilar.length);

console.log(sayilar);

console.log(sayilar[7]);
console.log(sayilar[8]);
console.log(sayilar[11]);

sayilar[8]="Altı";
sayilar[9]="Beş";

console.log(sayilar.sort(function(a,b){return a-b}));
console.log(sayilar.reverse());

console.log(sayilar.pop());
console.log(sayilar.pop());
console.log(sayilar.pop());


console.log(sayilar);

console.log(sayilar.shift());
console.log(sayilar.shift());
console.log(sayilar.shift());
console.log(sayilar);

console.log(sayilar.join('|'));
console.log(sayilar.toString());

var colors = "red|green|blue|yellow|black|white";
console.log(colors);

console.log(colors.split('|').slice(2,4));
console.log(colors);

var arr1 = [1,3,5,7];
var arr2 = [2,4,6,8];

console.log(arr1);
console.log(arr2);

 var arr3 = arr1.concat(arr2);

 console.log(arr1);
 console.log(arr2);
 console.log(arr3.sort(function(a,b){return a-b}));

 function ClickMe(){
    document.body.style.backgroundColor = "red";
 }



