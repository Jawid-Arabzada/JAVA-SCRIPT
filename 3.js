var ahmadHeight = 150;
var ahmadAge = 26;
var rahimHeight = 160;
var rahimAge = 28 ;
var nasimHeight = 120;
var nasimAge = 15;

var res1 = ahmadHeight + ahmadAge * 5;
var res2 = rahimHeight + rahimAge * 5;
var res3 = nasimHeight + nasimAge * 5;

if(res1 > res2 && res1 > res3){
    console.log('Ahmad won the game with' + res1 + ' points');
    
}else if(res2 >res3 && res2 > res1){
    console.log('Rahim won the game with ' + res2 + ' points');
}else if(res3 > res1 && res3 > res2) {
    console.log('Nasim won the game  with ' + res3 +' points');
} else {
    console.log('It\'s a draw');
}
    
