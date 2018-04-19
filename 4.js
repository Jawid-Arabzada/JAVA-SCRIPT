//Functions 

function calculateAge(yearOfBirth){
    var age = 2018 - yearOfBirth ;
    return age;
}

var res = calculateAge(1995);
var res1 = calculateAge(1990);

//console.log(res);

function yearsUntilRetirement(name,year){
    var age = calculateAge(year);
    var retirement = 65 - age ; 
    if(retirement >= 0){
      console.log(name + ' retires in ' +retirement + ' years');  
    }else {
        console.log(name + ' has already retired. ');
    }
    
}
yearsUntilRetirement('Jawid',1995);
yearsUntilRetirement('Ahmad',1990);
yearsUntilRetirement('Karim',1920);