let globalVariable = 100;
console.log(globalVariable);
function outer(){
    let outerVariable = 200;
    let inner = function(){
        let innerVariable = 300;
        console.log("Inner function");
        console.log(globalVariable);
        console.log(outerVariable);
        console.log(innerVariable);
    }
        return inner;
    }
    let returnValue = outer();
    returnValue();
    //outer()();    we can invoke inner function with like this to.
    //firat we call outer function by outer().then outer function will return the inner function,
    //so we again need to call inner function.so in short we write outer()();

