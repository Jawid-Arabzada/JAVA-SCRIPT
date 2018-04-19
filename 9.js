//let and const 

/*
//ES5
var name5 = 'Jawid Arabzada';
var age5 = 23;
name5 = 'Jawid Firotan';
console.log(name5);

//ES6
const name6 = 'Jawid Arabzada';
let age6 = 23;
name6 = 'Jawid Firo';
console.log(name6);
*/

// ES5 
function driverLicence(passedTest){
    if(passedTest){
        var firstName = 'Jawid';
        var yearOfBirtth = 1995;
        
        console.log(firstName + ',born in ' + yearOfBirtth + ',allowed to drive a car . ');
    }
    
}
driverLicence(true);


// ES6 are block scoped not function scoped
function driverLicence6(passedTest){
    if(passedTest){
        let firstName = 'Jawid';
        const yearOfBirtth = 1995;
        
        console.log(firstName + ',born in ' + yearOfBirtth + ',allowed to drive a car . ');
    }
}
driverLicence6(true);










let i = 23; 
for(let i = 0; i < 5 ; i++){
    console.log(i);
}
console.log(i);