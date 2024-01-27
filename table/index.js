const info_person =[
    {
        id : 1,
        name : "John",
        age : 20 ,
        gender : "Male" ,
    } ,

    {
        id : 2,
        name : "Cloey",
        age : 25 ,
        gender : "Female" ,
    } ,

    {
        id : 3,
        name : "Kathy",
        age : 21 ,
        gender : "Female" ,
    } ,

    {
        id : 4,
        name : "Hanry",
        age : 23 ,
        gender : "Male" ,
    } ,

    {
      id : 5,
      name : "Gorge",
      age : 22 ,
      gender : "Male" ,
  } ,

  {
    id : 6,
    name : "Tony",
    age : 24 ,
    gender : "Male" ,
} ,



]

const get_id =(id) => document.getElementById(id) ;
load_person (info_person) ;

function load_person(arr){
    get_id("customers").innerHTML = " " ;
    let root = get_id("customers");
    root.innerHTML += generate_info_person_header();
    for(const property  of arr){
        root.innerHTML += generate_info_person_template (
           property.name ,
           property.age ,
           property.gender ,
           property.id ,
        ) ;
    }
    
}

function generate_info_person_header(){
    return `
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Opitions</th>
      </tr>  `
}

function generate_info_person_template(name,age,gender,id){
    return `
    <tr>
          <td>${name}</td>
          <td>${age}</td>
          <td>${gender}</td>
          <td>  <button onclick ="update_data_bind(${id})" class = " table_button ">Update</button>
          <button onclick ="detail_data(${id})"  class = " table_button ">Details</button>
         <button onclick ="delete_data(${id})"  class = " table_button ">Delete</button></td>
        </tr>
    `
}

function detail_data(id){
    let data = generate_detail_data_byId(id);
    document.getElementById("customers").innerHTML = "";
    let root = document.getElementById("customers");
    root.innerHTML = generate_detail_info_template(
        data.name ,
        data.age,
        data.gender
    ) ;
  }
  
  function generate_detail_data_byId(id){
    for(let property of info_person){
        if(property.id === id){
            return property;
        }
    }
  }

  function generate_detail_info_template(name,age,gender,id){
    return `
    <div id="detail_info">
    <h2>${name}</h2>
    <h3>${age}</h3>
    <h3>${gender}</h3>
    <button onclick="back(${id})" class="button">Back</button>
  </div>
    `
  }

  function back(){
    load_person(info_person);
  }

  // function delete_data(id){
  //   const delete_person_data = info_person.find(item => item.id === 1) ;
  //   if (delete_person_data !== -1 ){
  //   info_person.splice(delete_person_data,1) ;
  //   for(let i =0 ; i < delete_person_data.length ; i++) {
  //     info_pereson[i] .id = i+1 ;
  //   }
  // }
  // load_person(info_person) ;
  // }

function delete_data(id){
  if(id === id){
    const delete_person = info_person.findIndex((del) => del.id === id );
    if(delete_person !== 1){
      info_person.splice(delete_person , 1) ;
    
    }
  }
  load_person(info_person) ;
}

// function delete_data(id){
//   for(let person of info_person){
//     if (person.id === id) {
//       info_person.splice(info_person.indexOf(person), id);
//   }
//   load_person(info_person) ;
// }
// }


  function update_data() {
    let person_id = get_id("person_id_update").value;
    let name = get_id("person_name_update").value;
    let age = get_id("person_age_update").value;
    let gender = get_id("person_gender_update").value;

    for (let person of info_person) {
        if (person.id === +person_id) {
            person.name = name;
            person.age = age;
            person.gender = gender;
            
        }
    }

    load_person(info_person);
    document.getElementById("myModal").style.display = "none";
}


 function update_data_bind(id){
  let id_person = get_id("person_id_update") ;
  let name = get_id("person_name_update");
  let age = get_id("person_age_update");
  let gender = get_id("person_gender_update");
  let person = getPersonById(id)
  if(person){
    id_person.value= person.id ,
    name.value = person.name,
    age.value = person.age,
    gender.value = person.gender

  }
  get_id("myModal").style.display = "block" ;
 }
  
 const getPersonById = id => {
  for (let person of info_person) {
      if (person.id === id) {
          return person;
      }
    }
}

      document.getElementsByClassName("close")[0].onclick =function(){
        document.getElementById("myModal").style.display = "none" ;
      } ;
      
      window.onclick = function(event){
        if(event.target == document.getElementById("myModal")){
          document.getElementById("myModal").style.display = "none" ;
        }
      } ;

      function add_person(){
        let person_name = get_id("person_name").value;
        let person_age = get_id("person_age").value ;
        let person_gender = get_id("person_gender").value ;
        let person_id = info_person.length + 1; 
        let person_data = {
            id: person_id,
            name: person_name,
            age: person_age,
            gender: person_gender,
        };
        info_person.push(person_data);
        load_person(info_person);
      }
    
    function search_person(){
      let keyword = document.getElementById("search_butt").value.toLowerCase() ;
      const searched_person = info_person.filter((person) => {
        return (
          person.name.toLowerCase().includes(keyword) ||
          person.gender.toLowerCase().includes(keyword) ||
          person.age.toString().includes(keyword)
        );
      });
      console.log(searched_person);
      load_person(searched_person);
    }
      