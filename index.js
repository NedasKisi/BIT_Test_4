// 1 //
// Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

let x = Math.floor((Math.random() * 10) + 1)
console.log(x)

let butt = document.getElementsByTagName('button')
console.log(butt)

let h2Elem = document.getElementsByTagName('h2');
console.log(h2Elem)

butt[0].addEventListener('click', function(){
   const rand1 = Math.floor((Math.random() * 10) + 1);
   const rand2 = Math.floor((Math.random() * 10) + 1);
   console.log(rand1,rand2)
   h2Elem[0].innerText = rand1;
   h2Elem[1].innerText = rand2;
   if (rand1 === rand2) {
      h2Elem[0].style.color = 'red';
      h2Elem[1].style.color = 'red';
   } else {
      h2Elem[0].style.color = null;
      h2Elem[1].style.color = null;
   }
 
});



// 2 //

let arr1 = [];

let butt1 = document.getElementsByTagName('button')
console.log(butt)
h3Elem = document.getElementsByTagName('h3');

// butt[1].addEventListener('click', function(){
//    const rand1 = Math.floor((Math.random() * 10) + 1);
//    console.log(rand1)
//    arr1.push(rand1)
//    console.log(arr1)
//    h3Elem[0].innerText = arr1;

//    let sum = 0;
//    for (let i = 0; i < arr1.length; i++) {
//          sum += arr1[i];
//    }
//      console.log(sum)

// });


// 3 //

const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
console.log(africa)

let africaLength = africa.length;
for (let i = 0; i < africaLength; i++) {
    if (i<(6)) {
       console.log(africa[i]);
    }
}

function func() {
   let ul = document.getElementsByTagName("ul");
   let li = document.createElement("li");
   li.appendChild(document.createTextNode(africa[0]));
   ul[0].appendChild(li);
}
func()



// 4 //

let buttons = document.getElementsByTagName('button')


buttons[2].addEventListener('click', function(){
   let inputNum = document.querySelectorAll('input')
   console.log(inputNum)
   const num = (inputNum[0]) + (inputNuM[1]);
   console.log(num)
 
})




// 5 //

const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];