const personal_data={
    person_1:{
        id:1,
        name: "John" ,
        age : 23 ,
        gender : "Male"
    },

    person_2:{
        id :2 ,
        name: "James" ,
        age : 20 ,
        gender : "Male"
    },

    person_3:{
        id :3 ,
        name: "Kathy" ,
        age : 25 ,
        gender : "Female"
    },

    person_4:{
        id :4 ,
        name: "Sophia" ,
        age : 20 ,
        gender : "Female"
    },
    person_5:{
        id:5,
        name: "John" ,
        age : 23 ,
        gender : "Male"
    },

    person_6:{
        id :6 ,
        name: "James" ,
        age : 20 ,
        gender : "Male"
    },

    person_7:{
        id :7 ,
        name: "Kathy" ,
        age : 25 ,
        gender : "Female"
    },

    person_8:{
        id: 8 ,
        name: "Sophia" ,
        age : 20 ,
        gender : "Female"
    },
} ;

personal_details(personal_data);

function personal_details(obj) {
    document.getElementById("personal_root").innerHTML = "";
    let root = document.getElementById("personal_root");
    for (const property in obj) {
        root.innerHTML += generate_person(
            obj[property].name,
            obj[property].age,
            obj[property].gender,
            obj[property].id
        );
    }
}

function search_person(){
    let keyword = document.getElementById("search_text").value ;
    const searched_obj = {} ;
    for(const person in personal_data){
        if(
            personal_data[person].name.toLowerCase().includes(keyword.toLowerCase()) ||
            personal_data[person].gender.toLowerCase().includes(keyword.toLowerCase())
            
        )
        {
            searched_obj[person] = personal_data[person]
        }
       
    }
    personal_details(searched_obj);
}

function generate_person(name, age, gender ,id) {
    return `
    <div id="personal_details">
            <h2>${name}</h2>
            <h4>${age}</h4>
            <h4>${gender}</h4>
            <button onclick="detail_butt(${id})">View Detail</button>
        </div>
    `;
}
  
function back_home(){
    personal_details(personal_data);
}


    function generate_personal_detail_template(name, age, gender) {
            return `
                <div id="detail_butt">
                    <h2>${name}</h2>
                    <h4>${age}</h4>
                    <h4>${gender}</h4>
                    <button onclick="back_home()">Go Back</button>
                </div>
            `;
    }
    
    function generate_personal_data_byID(id){
        for(let property in personal_data){
            if(personal_data[property].id === id ){
                return personal_data[property] ;
            }
        }
     }

function detail_butt(id){
    let data = generate_personal_data_byID(id);
    document.getElementById("personal_root").innerHTML = "";
    let root = document.getElementById("personal_root") 
    root.innerHTML = generate_personal_detail_template (
        data.name,
        data.age,
        data.gender
    ) ;
  
}






