// Arrow function with no argument and no return value
//Normal function expression:
let shown1 = function(){
    console.log("Hello");}
    shown1();



//Arrow function--------arrow operatot =>

let show = ()=>{
    console.log("Hello");}
    show();
    // => function Syntax
    // let fun = ()=>{
        // };

        // Arrow Function with argument
        let sum = (n1, n2)=>{
            console.log(n1+n2);
        }
        sum(10, 10);
        // Arrow Function with argument and return value
        let multiply = (n1, n2)=> {
            let mul = n1*n2;
            return mul;
        }
        let mulResult = multiply(5, 5);
        console.log(mulResult);

        // let add=(n1,n2)=>{
        //     console.log(n1+n2);
        // }
        // add(20,30)
        //If u have only one statement in console log in arrow function then no need to give curly brackets.
        let add=(n1,n2)=>console.log(n1+n2);
        add(20,30)

        //Also if u have only one argument then no need to give paranthesis to that argument in arrow function
        let let1=n1=>console.log(n1 );
        let1(200)
           