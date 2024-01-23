function namecheck(namevalue) {
    if ( namevalue === null || namevalue === '' ) {
        return true;
    }
    return false;
}

function checklength(value, lengthvalue) {
    if(value.length <= lengthvalue){
        return true ;
    } return false
   
}

function length(value, min, max) {
    return +value >= min && +value <= max;
}

function gen(gender){
return (gender. toUpperCase());
}



let count = prompt('How many Students will registern?');

while(isNaN(+count) || namecheck(count) || !length(count, 1, 5)){
    if(isNaN(+count)){
        alert('Count must be number');
    }
    if(namecheck(count) && !isNaN(+count) ){
        alert('Count can not be blank');
    }
    if(!length(count ,1, 5) && !namecheck(count) && !isNaN(+count)){
        alert('Count must be between 1 and 5');
    }

    count =prompt('Please enter students count ');
}
        for (let i = 1; i <= count; i++) {
    let name = prompt('Enter your name');
    while(namecheck(name) || checklength(name ,1 ,20) || !isNaN(+name)){
        if(namecheck(name)){
            alert ("Name can't be blank ");
        }
        if(!namecheck(name) && !isNaN(+name) ){
            alert("Name can't be number");
        }
        if( !checklength(name,20) && !namecheck(name) && isNaN(+name)){
            alert("Name can't be more than 20 digits");
        }
        name =prompt('Please enter a valid name');
    }

            let age =prompt('Enter your age');
            while(isNaN(+age) || namecheck(age) || length(age, 15,30)){
                if(isNaN(+age)){
                    alert("Age must be number");
                }
                if(!isNaN(+age) && namecheck(age)){
                    alert("Age can't  be blank");
                }
                if(!isNaN(+age) && !namecheck(age) &&! length(age,15,30)){
                    alert("Your age must be between 15 and 30");
                }

                age =prompt("Please enter your age");
            }
    } 

    
 
    // let gender =prompt('Enter your Gender');
    // while(gender === '' || gender === null || !isNaN(gender)){
    //     if (gender === '' || gender === null){
    //         alert('Gender can not be blank');
    //     }else if(!isNaN(gender)){
    //         alert('Gender can not be number');
    //     }
    //     gender =prompt('Please enter a valid gender');
       
      
    // }
    // alert(gen(gender));
 
}
