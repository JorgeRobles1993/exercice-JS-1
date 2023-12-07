// let nom = prompt("entrez votre nom");
//  alert("Bonjour " + nom);



// Exercise 4  start //

// function recuperprofil (){
//     let input1 = document.querySelector("#lastname ").value;
//     let input2 = document.querySelector("#firstname ").value;
//     let input3 = document.querySelector("#city ").value;

//     alert("Bonjour Monsieur " + input2 + " de nom " + input1 + " de " + input3)    

// Exercise 4 end //

// Exercise 5  start //

// let button = document.querySelector("#submit")

// button.addEventListener("click", function() {

// let nbr1 = document.querySelector ("#firstNumber").value ;
// let nbr2 = document.querySelector("#secondNumber").value ;

// alert(Math.trunc(nbr1) * Math.trunc(nbr2))

// })

// Exercise 5 end //

// Exercise 6 start //

// let button = document.querySelector("#submit")

// button.addEventListener("click", function() {

//     let nbr1 = document.querySelector ("#firstNumber").value ;
//     let nbr2 = document.querySelector("#secondNumber").value ;
//      alert(nbr1 % nbr2)

// })

// Exercise 6 end //

// Exercise 7 start //

// let button = document.querySelector("#submit")

// button.addEventListener("click", function() {
//     let size = document.querySelector ("#shoeSize").value ;
//     let year = document.querySelector("#yearOfBirth").value ;
//     let final = (((((Number(size) * 2) +5) *50) - Number(year)) + 1766);

//     alert(final)

// })

// Exercise 7 end //


// Exercise 8 start //


//  let button = document.querySelector("#submit")

//  button.addEventListener("click", function() {

//     let age1 = document.querySelector ("#age").value ;
//     if (age1 >= 60) {
//         alert ("bonne pour Jorge");
//     }else{
//         alert("pas bonne pour Jorge");
//     }
//  })

// Exercise 8 end //


// Exercise 9 start //

// let button = document.querySelector("#submit")

// button.addEventListener("click", function() {

//     let number1 = document.querySelector("#nombre").value;
//     let resultat = ""

//     for (i=1 ; i <= 10; i++ ) {
// resultat += number1+" x " + i+"="+(number1*i) + "\n" 
// }

// alert(resultat)
// })

// Exercise 9 end //


let button = document.querySelector("#submit")

button.addEventListener("click", function() {

    let mot = document.querySelector("#mot").value;
    let result = ""
     for (let index = 0; index < mot.length ; index++) {
     result += mot[index] + "\n"
     }
    

    alert(result)

})