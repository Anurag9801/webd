console.log('kya haal chaal aapke');

// Function 

// Firstly we declare the function and  we call or invoke the function 

run();


function run(){
    console.log('hello world');
};

run();

// function assingment 
let sum2 =  function addtwo(){
    console.log(2+2);
};
sum2();
// anonomyous function assingment
let sum1 = function(){
    console.log(4+5);
};
sum1();


function sum (a,b){
    console.log(arguments);
    return a+b;
};
console.log(typeof(sum));
console.log(sum(3,1));
let addition = sum(3,5,1,2,4);

// For addition of multiple value (dynamic addition )

function sumofmulti(a,b){
    let total = 0;
    for(let value of arguments)
    {
        total = total+value;
    }
    return total;
}

let ans1 = sumofmulti(3,5,6,7,1,2);
console.log(ans1);

// rest oprator (...args)
function print (nmms,value, ...args) // Rest parameter will be last parameter
{
    console.log(args);
}
print(3,5,2,1,9);

// Default parameter
function intrest (p,t=3,r=5)
        {
            return (p*t*r)/100;
        };
const ammount = intrest(1000,4)+1000;
console.log(`total ammount will recived ${ammount}`);

// Getter and setter of an object

let person ={
    fname :'Anurag',
    lname :'kumar',
    get fullname() {
        return `${this.fname} ${this.lname}`;
    },
    
    set fullname(term){
        /*if(typeof term !== 'String')
        {
            throw new Error ("The input is not the string");
        }
        */
        let parts = term.split(' ');  //Here parts is an array
        this.fname = parts[0];
        this.lname = parts[1];
    }
};
console.log(person.fullname);

person.fname = 'Atul';
console.log(person.fullname);
person.fullname = 'Puskar mishra';
console.log(person.fullname);
console.log(typeof(person.fullname));

// try and alert in javascript if try has errorfull code then catch statement will be executed 

/*try {
    person.fullname = 1;
}
catch (e)
{
    alert (e);
}
*/
let arr1 = [3,5,3,1,7,9];
console.log(arr1);

let totalSum = arr1.reduce((accumulator,currentValue) => accumulator+currentValue ,0);
console.log('total sum of the array is '+totalSum);