let checker = value =>{
    if(isNaN(+value) || value === null || value === '' ){
        return true ;
    }
    return false ;
}

function sign(signvalue){
    if( sign === '+' || sign === '-' || sign === ' *' || sign === '%' || sign === '/'){
        return true ;
    }
    return false ;
}


let number_1 = prompt('Enter Number one');
while (checker(number_1)){
    number_1 = prompt ('Enter Number one');
}
let number_2 = prompt('Enter Number two');
while (checker(number_2)){
    number_2 = prompt ('Enter Number two');
}

let sign1 = prompt('Enter a sign');
while(sign(sign1)){
    sign1 = prompt (' Enter a sign');
}

let add = (value1,value2) => +value1 + +value2 ;

let sub = (value1 ,value2) => +value1 - +value2 ;

let multi = (value1 ,value2) => +value1 * +value2 ;

let div =(value1 ,value2) => +value1 /+value2 ;

let rem =(value1 ,value2) => +value1 % +value2 ;


 let result = (sign1 === '+') ? add(number_1 , number_2) :
 (sign1 === '-') ? sub(number_1 , number_2) :
 (sign1 === '*') ? multi(number_1 , number_2) :
 (sign1 === '/') ? div(number_1 , number_2) :
  rem(number_1 ,number_2);

 alert (result);













