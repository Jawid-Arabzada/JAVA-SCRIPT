//Objects and Methods 
//V1.0
/*
var jawid = {
    name: 'Jawid',
    lastName: 'Arabzada',
    yearOfBirth: 1995,
    job: 'student',
    isMarried: false,
    family: ['karim','Nasim','Alim'],
    calculateAge: function(){
        return 2018 - this.yearOfBirth;
    }
};

//console.log(jawid.family[2]);
//console.log( jawid.calculateAge(1995));

//using this object 
console.log(jawid.calculateAge());

var age = jawid.calculateAge();
jawid.age = age ;

console.log(jawid);
*/

// v2.0
var jawid = {
    name: 'Jawid',
    lastName: 'Arabzada',
    yearOfBirth: 1995,
    job: 'student',
    isMarried: false,
    family: ['karim','Nasim','Alim'],
    calculateAge: function(){
        this.age =  2018 - this.yearOfBirth;
    }
};

jawid.calculateAge();
console.log(jawid);

