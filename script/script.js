/*  function multiply(number1, number2, number3)
{
  var resultMultiply = number1*number2*number3;
  return resultMultiply*2;
}

var a = 5;
var b = 6;

var result = console.log(multiply(a, b, a));

*/

 // var fruits = ["Pomme", "Banane", "Cerise", "Orange"];

// for(var i = 0; i < fruits.length; i++)
// {
//   console.log(fruits[i]);
// }

// fruits.slice(); // Sélectionne les éléments   :  var agrumes = fruits.slice(2,4);
// fruits.pop(); // Supprime la dernière valeur
// fruits.push("Kiwi"); // Ajouter quelque chose dans mon tableau
// console.log(fruits);

var dog = new Object();
dog.name = "Rex",
dog.color = "white",
dog.age = 4;
dog.aboie = function(number)
{
  while(number>0)
  {
      console.log(number.toString() + " Woaaf");
      number--;
  }
}

dog.aboie(4);
