//Objects 

var jawid = {
    name: 'Jawid',
    lastName: 'Arabzada',
    yearOfBirth: 1995,
    job: 'student',
    isMarried: false
};

console.log(jawid.name);
console.log(jawid['lastName']);

var xyz = 'job';
console.log(jawid[xyz]);

//Change last name 
jawid.lastName = 'Firotan';
jawid['job'] = 'Programmer';

console.log(jawid);

var ahmad = new Object();
ahmad.name = 'Ahmad';
ahmad.lastName = 'Rahimi';
ahmad['yearOfBirth'] = 1990;
ahmad['job'] = 'retired';
ahmad['isMarried'] = true;

console.log(ahmad);