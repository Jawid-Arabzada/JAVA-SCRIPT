//IF ELSE 
/*var name = 'Jawid';
var age = 23;
var isMarried = 'yes';

if(isMarried === 'yes') {
    console.log(name + ' is married ');
} else {
    console.log(name + ' will hopefully marry soon: ');
    
}

isMarried = false;

if(isMarried){
    console.log('YES');
} else {
    console.log('NO');
}

if(1 === "1"){
    console.log("equal")
}else {
    console.log("Not equal");
}*/

var age = 25 ;
if(age<20){
    console.log('You are a teenager ');
}else if(age > 20 && age < 30){
   console.log('You are a young man '); 
}else {
    console.log('You are a man . ');
}

var job = '';
job = prompt('What does Jawid do ? ');

switch(job){
    case 'teacher': 
        console.log('Jawid Teaches kids ');
        break;
    case 'driver':
        console.log('Jawid drive a cab ');
        break;
    default:
        console.log('Jawid does something else ');
        
    
}