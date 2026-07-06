console.log("Hello, World!");



function calculator() {


    let x = Math.floor(Math.random() * 21);
    let y = Math.floor(Math.random() * 21);


    console.log("Number 1:", x);
    console.log("Number 2:", y);



    function operation(sign) {


        let result;


        switch(sign) {


            case "+":
                result = x + y;
                break;


            case "-":
                result = x - y;
                break;


            case "*":
                result = x * y;
                break;


            case "/":
                result = x / y;
                break;


            case "%":
                result = x % y;
                break;


            default:
                return "Invalid Operation";

        }


        return positive(result);

    }


    return operation;

}




function positive(value) {


    if(value < 0) {

        return -value;

    }
    else {

        return value;

    }

}




function output() {


    let calculate = calculator();


    let add = calculate("+");
    let multiply = calculate("*");
    let divide = calculate("/");
    let modulus = calculate("%");



    console.log("Addition:", add);
    console.log("Multiplication:", multiply);
    console.log("Division:", divide);
    console.log("Modulus:", modulus);

}



output(); 

































// function calculator(x, y) {

//     function operation(sign) {

//         let result;

//         switch (sign) {

//             case "+":
//                 result = x + y;
//                 break;

//             case "-":
//                 result = x - y;
//                 break;

//             case "*":
//                 result = x * y;
//                 break;

//             case "/":
//                 result = x / y;
//                 break;

//             case "%":
//                 result = x % y;
//                 break;

//             default:
//                 return "Invalid Operation";
//         }

//         return positive(result);
//     }

//     return operation;
// }


// function positive(value) {
//     return value < 0 ? -value : value;
// }


// function output() {

//     let x = Number(prompt("Enter first number:"));
//     let y = Number(prompt("Enter second number:"));

//     let calculate = calculator(x, y);

//     console.log("Addition:", calculate("+"));
//     console.log("Subtraction:", calculate("-"));
//     console.log("Multiplication:", calculate("*"));
//     console.log("Division:", calculate("/"));
//     console.log("Modulus:", calculate("%"));
// }

// output();