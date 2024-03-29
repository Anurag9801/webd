// let a= Math.random();
console.log(Math.random());

console.log(Math.round(1.6));

console.log(Math.min(3,2,1,5,8));

console.log(Math.max(3,5,2,1,7));

console.log(Math.abs(-4));


// String
let lastName = 'Kumaar';

let firstName = new String('love');  // here firstName is a object

console.log(lastName);
console.log(firstName);
console.log(lastName.length);
console.log(lastName.includes('ma'));
console.log(lastName.startsWith('an'));
console.log(lastName.endsWith('ar'));
console.log(lastName.indexOf('a'));
console.log(lastName.trim());
console.log(lastName.replace('Ku','Anu'));

let str1 = "this is my  first message";
let words = str1.split(' ');
console.log(words);
let str2 = `hii here 
we can 
write in multiple 
lines
and use defined string such as ${lastName}`
console.log(str2);

// For data and time 

let date = new Date();
console.log(date);
console.log(new Date("2001-02-15"));

let d1=new Date(2024,11,12,13,01);
let d2=new Date(2025,10,10,11,10,9);  //(year,month,day,hours,minutes,seconds);


console.log(d1);
console.log(d2);
d1.setFullYear(2100);
console.log(d1);
const d4 = new Date("Mar 25 2015");
console.log(d4);
console.log(d1.getFullYear());

// Arrays 

let numbers= [1,3,5,6,7];
console.log(numbers);
console.log(numbers.length);
numbers.push(9);
console.log(numbers);
numbers.unshift(-1);
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.splice(2,0,'a','b','c','d');
console.log(numbers);
numbers.splice(2,2,'e','f','d');
console.log(numbers);

//searching of an array 
console.log('index of the f is '+numbers.indexOf('f'));
console.log(numbers.indexOf('d')+1);
console.log('Last  occurance of d is '+(numbers.lastIndexOf('d')+1));

console.log(numbers.includes(1));

// Reference in Array
let course =  [
    {no:1, name:'anurag'},
    {no:2, name:'atul'}
];
console.log(course);
console.log(course[0]);
console.log(course[1]);

console.log(course.indexOf({no:1, name:'anurag'}));
// Here  both are two other object in line 81 and 86

// CALLBACK Function
// one function is dependent on output of  other function for performing an optation 

let ans = course.find(function(course)
{
    return course.name == 'anurag';
})
console.log(ans);
// arrow function
let answer = course.find(course => course.name=='anurag');
console.log(answer);


// removing of element by using splice
console.log(numbers);
console.log(numbers.splice(3,1));
console.log(numbers);

let arr1 =[1,2,4,5,6];
let arr2 = arr1;

// arr1=[];
arr1.length = 0;
console.log(arr1);
console.log(arr2);

// combining and slicing of an array
let list1 = [2,4,5,6,10];
let list2 = [7,8,9,19];
let combine = list1.concat(list2);
console.log(combine);

let newCombine = combine.slice(2,6);
console.log(newCombine);

let combine2 = [...list1,'a',' b',...list2];
console.log('In another form combine is used by saprate oprator '+combine2);

let obj1 = [
    {sno:3, color:'red'},
    {sno: 4, color:'green'}
];
let obj2 = [
    {sno:5, color:'yellow'},
    {sno: 6, color:'orange'}
];
let comb = obj1.concat(obj2);
console.log(comb);

let comb2 = obj1.slice(0,1);
console.log(comb2);

// Itrating each value in array 
let collection = [3,5,6,2,1];
for(let value of collection)
{
    console.log(value);
};
//another format FOR EACH LOOP
collection.forEach(element => {
    console.log(element);
});

const joined = collection.join(',');
    console.log(collection);


let str3 = 'hi i am Anurag Kumar';

const word = str3.split(' '); //split in words
console.log(word);
const newWord = words.join('_');
console.log(newWord);

const incSort = collection.sort();
console.log(incSort);
const decSort = collection.reverse();
console.log(decSort);

let numbers2 = [2,5,-2,-1];
const filtering = numbers2.filter(function(value){
    return value >=0;
});
// const filtering = number2.filter(value=> value >=0);
console.log(filtering);

// mapping in array
console.log(collection);
let mapping = collection.map(value => 'student_no '+value);
console.log(mapping);

// let mapping = collection.map(function(value){
//     return 'student_no '+ value;
// });



