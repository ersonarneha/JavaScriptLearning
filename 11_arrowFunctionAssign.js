console.log(`===================Arrow function without argument and without return value==============`);

let blessings = ()=>{
    console.log("Good Morning,Today is Monday");}
    blessings();

    console.log(`=================Arrow function with argument and without return value==============`);

    let multiply = (n1, n2,n3=1)=>{
        console.log(`Multiplication is:${n1*n2*n3}`);
    }
    multiply(5,5,2);
    multiply(10,4); 
    console.log(`=================Arrow function with argument and with return value==============`);

    let add = (n1, n2,n3,n4,n5)=> {
        let addition = n1+n2+n3+n4+n5;
        return addition;
    }
    let additionResult = add(100,100,200,349,756);
    console.log(`Addition of given numbers is: ${additionResult}`);
    let additionResult2=add("I am","learning","ES6","features","in depth");
    console.log(`Addition of given words is: ${additionResult2}`)
