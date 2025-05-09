function shoe() {
    console.log("hello");
}
shoe();

function calculator(a,b) {
    console.log("Addition: " + (a+b));
    console.log("Substraction: " + (a-b));
    console.log("Multiplication: " + (a*b));
    console.log("Division: " + (a/b));
}

calculator(2,3);

var a = function (){
    console.log("anonymous function");
    return console.log(10);
}

a();


let b = ()=>{
    console.log("Arrow function");
    return 10;
}

b();

var x = function func(a, b){
    console.log("functions as parameter");
}
 x(a(),b());



