console.log("hello world");

// object creation 

let rectangle = {
    length : 1,
    breadth : 2,

    draw :function() {
        // this is methord
        console.log('draw');
    }
};
// rectangle.draw for using the method

// Object cration is of two types 

// factory function

/*
function createRectangle(){
    return rectangle = {
        length : 1,
    breadth : 2,

    draw() {
        // this is methord
        console.log('draw');
    }
    };
}
let rectangleObj1 = createRectangle();
*/

function createRect(len,bre){
    return rectangle = {
        length : len,
    breadth : bre,

    draw() {
        // this is methord
        console.log('draw');
    }
    };
}
let rectangleObj3 = createRect(4,5);

// Camelcase notation -> anuragKumar
// pascal notation -> here first of the letter should be 

// by using constructor

function Rectangle(len, bred)
{
    this.length = len;
    this.breadth = bred;
    this.draw = function()
    {
        console.log('drawing');
    }
}

let rectangleObj4 = new Rectangle(4,5);
rectangleObj4.color = "yellow";
console.log(rectangleObj4);
delete rectangleObj4.color ;
console.log(rectangleObj4);

// function are objects

// premitive and reference data type
//premetive are copied by their values and reference are copied by their addressess 
// object uses the reference
let a = 10;
let b = a;
a++;
console.log(a); // a= 11
console.log(b); // b= 10

let c = {value : 10};
let d = c;
c.value++;
console.log(c.value);
console.log(d.value);

// for in loop 
let rec = {
    length:3 ,
    bredth : 5
};
    for(let key in rec)
    {
        console.log(key,rec[key]);
    }

// for of loop
for(let key of Object.entries(rec))
{
    console.log(key);
}

if('color' in rec)
{
    console.log('present');
}
else{
    console.log('Absent');
}

// Cloning of a Object :-- Iteration Assign Spread
let src = {
    x:5,
    y:6
};
let dest= {};
for(let key in src)
{
    dest[key]= src[key];
}

for(let key of Object.entries(dest))
{
    console.log(key);
}
// Assign
let des2= Object.assign({},src);
for(let key of Object.entries(des2))
{
    console.log(key);
}

let des3= {...src};

console.log(des3);
