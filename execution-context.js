// execution-context.js

console.log("Start");

var user = "Rahul";

function login() {
    var msg = "User logged in";
    console.log(msg);

    dashboard();
}

function dashboard() {
    var welcome = "Welcome " + user;
    console.log(welcome);
}

login();

console.log(count);

var count = 5;

show();

function show() {
    console.log("Function executed");
}

function parent() {

    var city = "Hyderabad";

    function child() {
        console.log(city);
    }

    child();
}

parent();

function first() {
    console.log("First Function");
    second();
}

function second() {
    console.log("Second Function");
}

first();

console.log("End");
