// 1. mehsullarin ucuzdan bahaya siralanmasi

// MY FAVORITES
/* https://www.instagram.com/reel/CuKRLnUIJNe/?igsh=c2NqN3g2ZHFkcXN2 */  


// let products = [
//   {
//     id: 1,
//     name: "Kia rio",
//     price: 14500,
//   },
//   {
//     id: 2,
//     name: "Mercedes cls 63 ",
//     price: 35000,
//   },
//   {
//     id: 3,
//     name: "BMW E60",
//     price: 28000,
//   },
//   {
//     id: 4,
//     name: "Hundaı Elantra", // Hundaı Elantra
//     price: 23500,
//   },
// ];
// products.sort((a, b) => a.price - b.price);
// products.forEach((product) => {
//   console.log(`${product.name} ${product.price}`);
// });




//2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin
// let numbers=[]
// let sum=0
// for (let i=1; i<=5; i++){
// const random=Math.floor(Math.random()*100)
// numbers.push(random)
// }
// console.log(numbers);
// numbers.forEach(function(num) {
//     sum += num;
// });
// console.log(sum);





//3. Foreach arasdirin, map ve normal for dongusu ile ferqi nedi ona baxin
/*

Normal for dövrü, arraydəki hər bir elementi belirli bir indeks aralığında dövr əsasında işləmək üçün ən əsas dövr strukturu olaraq istifadə olunur. Məsələn:

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
Bu dövr, arrayin hər bir elementinə indeks nömrəsi vasitəsilə gediş edərək işləyir.

Foreach dövrü, array və ya digər iterable obyekt üzərində gəzmək üçün istifadə olunan bir dövr strukturu. Hər bir dövr addımında, array elementləri sıra ilə bir dəyişənə təyin edilir və göstərilən əməliyyat icra olunur. Məsələn:

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});
Bu dövr, arrayin hər bir elementini sıra ilə number dəyişəninə təyin edir və bu elementləri işləyir.

Map funksiyası, array üzərində gəzərək hər bir element üçün müəyyən bir əməliyyatı yerinə yetirir və bu əməliyyatların nəticəsində yeni bir array yaradır. Özgün arrayi dəyişmədən yeni arrayi qaytarır. Məsələn:

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers);
Bu funksiya, hər bir elementi sıra ilə götürür, onun əmrini icra edir və yeni yaradılmış arrayə əlavə edir.
*/








//4. Json, fetch, api bunlar nedir nece isleyir
// JSON (JavaScript Object Notation): JSON, verilənlərin özünü təsvir etmək üçün istifadə olunan bir formatdır.
// Bu format sadə, oxunaqlı və insanlar və proqramlar arasında məlumat mübadiləsini asanlaşdırır.
// JSON formatında verilən məlumat obyekt və dizilərdən ibarətdir və məlumatın təsvir edilməsi üçün açıq bir standartdır.

// Fetch API: Fetch API, brauzerlər üçün HTTP tələblərini göndərmək və qəbul etmək üçün modern bir JavaScript interfeysidir.
//  Bu API, XHR (XMLHttpRequest) obyektinə alternativ olaraq dəyişkən və asinqron şəkildə HTTP tələblərinin göndərilməsini təmin edir.
//  Fetch API, promise əsasında işlədiyi üçün məlumatlar göndərildikdə və qəbul edildikdə bu prosesləri asanlaşdırır.

// API (Application Programming Interface): Bir proqram tərəfindən təmin edilən xidmətlərin, funksiyaların və ya məlumatların digər proqramlar tərəfindən istifadə
// edilməsi üçün təyin olunmuş interfeysdir. İnternetdə, "API" geniş istifadə olunan bir tərəfdaşlıq və integrasiya mexanizmidir. Tətbiqat proqramlaşdırma interfeysi,
//  bir proqramın funksiyalarını və xidmətlərini başqa proqramlar tərəfindən istifadə etmək üçün nəzərdə tutulmuş formadır.







