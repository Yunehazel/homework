const movies_data={
    movie_1: {
        id: 1,
        title: "The Grudge",
        description:
          "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
        url: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
      },
    movie_2 :{
      id :2,
      title : "Spirited Away",
      description :
      "Spirited Away (Japanese: 千と千尋の神隠し, Hepburn: Sen to Chihiro no Kamikakushi, lit. 'Sen and Chihiro's Spiriting Away') is a 2001 Japanese animated fantasy film written and directed by Hayao Miyazaki, animated by Studio Ghibli for Tokuma Shoten, Nippon Television Network, Dentsu, Buena Vista Home Entertainment, Tohokushinsha Film, and Mitsubishi and distributed by Toho.[7] Spirited Away tells the story of Chihiro Sen Ogino, a ten-year-old girl who, while moving to a new neighborhood, enters the world of kami (spirits of Japanese Shinto folklore).",
      url :" https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png"
    } ,
    movie_3:{
      id :3,
      title : "Gangubai Kathiawadi ",
      description : " The film is about Gangubai Kothewali, whose life was documented in the book Mafia Queens of Mumbai written by S. Hussain Zaidi. The film depicts the rise of a simple girl from Kathiawad who had no choice but to embrace the ways of destiny and swing it in her favour.Gangubai Kathiawadi premiered at the 72nd Berlin International Film Festival on 16 February 2022, and was released in theatres on 25 February 2022." ,
      url: "https://upload.wikimedia.org/wikipedia/en/8/89/Gangubai_Kathiawadi_film_poster.jpg" ,
    },

    movie_4: {
        id: 4,
        title: "Bad Boys for Life",
        description:
          "Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
        url: "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
      },

    movie_5:{
      id: 5 ,
      title : " Jujutsu Kaisen" ,
      description : " Jujutsu Kaisen (呪術廻戦, rgh. Sorcery Battle) is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 25 tankōbon volumes as of January 2024. The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host." ,
     url : " https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg" ,
    } ,
    movie_6:{
      id : 6 ,
      title :" After",
      url : "https://upload.wikimedia.org/wikipedia/en/b/b2/AFTER_Poster.JPG " ,
      description : " After is a 2012 fantasy thriller film written and directed by Ryan Smith and starring Steven Strait and Karolina Wydra. It premiered at the 43rd Annual Nashville Film Festival on April 19, 2012. Canadian distributor Mongrel Media acquired the North American rights to the film in June 2013." ,
    },
    movie_7 :{
      id : 7 ,
      title : " Cinderella" ,
      url : " https://upload.wikimedia.org/wikipedia/en/c/c2/Cinderella_2015_official_poster.jpg" ,
      description : "Cinderella is a 2015 American romantic fantasy film directed by Kenneth Branagh from a screenplay by Chris Weitz. Co-produced by Walt Disney Pictures, Kinberg Genre, Allison Shearmur Productions, and Beagle Pug Films, the film is based on Charles Perrault's 1697 fairy tale (Cinderella) and also serves as a live-action adaptation of Walt Disney's 1950 animated film.Lily James stars as the title character, with Cate Blanchett, Richard Madden, Stellan Skarsgård, Holliday Grainger, Sophie McShera, Derek Jacobi, and Helena Bonham Carter in supporting roles. " ,
    } ,
    };
  
    const get_id =(id) => document.getElementById(id) ;
     load_movies (movies_data) ;

 function load_movies(obj){
    document.getElementById("movies_root").innerHTML = " " ;
    let root = document.getElementById("movies_root");
    for(const property  in obj){
        root.innerHTML += generate_movies_template(
            obj[property] ?.url ,
            obj[property] .title ,
            obj[property].description ,
            obj[property].id 
        ) ;
    }
 }

 function search_movie(){
  let keyword = document.getElementById("search_text").value ;
  const searched_obj ={ } ;
  for(const movie in movies_data){
      if(
          movies_data[movie].title.toLowerCase().includes(keyword.toLowerCase()) ||
          movies_data[movie].description.toLowerCase().includes(keyword.toLowerCase())
      )
          {
              searched_obj[movie] = movies_data[movie] ;
          }
          load_movies(searched_obj);
  }

}

function generate_movies_template(url,title,description,id){
  return `
  <div class="movie">
      <div class="movie_wrapper">
        <div class="movie_image">
          <img
            src=${url} />
        </div>
        <div class="movie_text">
          <h3>${title}</h3>
          <p>
            ${description}
          </p>
        </div>
      </div>
      <div>
      <button onclick ="movie_detail(${id})">View Detail</button>
      <button onclick ="delete_movie(${id})">Delete</button>
      <button onclick ="update_movie_bind(${id})">Update</button>
      </div>
    </div>
`;
}

const getMovieById = (id) => {
  for(const property in movies_data){
    if(movies_data[property].id === id){
      return movies_data[property] ;
    }
  }
}
function update_movie_bind(id){
  let movie_id = get_id("movie_id_update");
  let title =get_id("movie_name_update");
  let url= get_id("movie_url_update");
  let description= get_id("movie_description_update");
  let movie = getMovieById(id);
  if(movie){
    movie_id.value= movie.id ;
    title.value = movie.title ;
    url.value = movie.url ;
    description.value = movie.description ;
  }
  document.getElementById("myModal").style.display ="block" ;
}

function update_movie(){
  let movie_id = get_id("movie_id_update").value;
  let title =get_id("movie_name_update").value;
  let url= get_id("movie_url_update").value;
  let description= get_id("movie_description_update").value;

  for(let property in movies_data){
    if(movies_data[property].id === +movie_id){
      movies_data[property].title = title ;
      movies_data[property].url = url ;
      movies_data[property].description = description ;
    }

  }
  load_movies(movies_data);
  document.getElementById("myModal").style.display = "none" ;
  

}

function delete_movie(id){
  for(let property in movies_data){
    if(movies_data[property].id === id){
      delete movies_data[property];
    }
  }
  load_movies(movies_data) ;
}

function movie_detail(id){
  let data = generate_movie_details_byId(id);
  document.getElementById("movies_root").innerHTML = "";
  let root = document.getElementById("movies_root");
  root.innerHTML = generate_movie_details_template(
      data.url ,
      data.title,
      data.description
  ) ;
}

function generate_movie_details_byId(id){
  for(let property in movies_data){
      if(movies_data[property].id === id){
          return movies_data[property];
      }
  }
}

function generate_movie_details_template(url,title,description){
  return`
  <div id="movie_detail">
  <div id="movie_detail_img">
    <img src=${url} />
  </div>
  <div id="movie_detail_text">
   <h1>${title}</h1>
   <p>
     ${description}
   </p>
   <button onclick="home()">Go Back</button>
  </div>
 </div>
  `
} 

function home(){
  load_movies(movies_data);
}
function add_movie ( ){
  let title = document.getElementById("movie_name").value ;
  let url = document.getElementById("movie_url").value ;
  let description =document.getElementById("movie_descritption") ;
  let id = +movies_data[object.keys(movies_data)[object.keys(movies_data).length -1]] .id+1 ;
  let movie_obj ={
      id ,
      title ,
      description ,
      url ,
  };
  movies_data["movie_" +
  (+movies_data[object.keys(movies_data)[object.keys(movies_data).length -1]] .id+1)] = movie_obj ;
  load_movies(movies_data);
}

document.getElementsByClassName("close")[0].onclick =function(){
  document.getElementById("myModal").style.display = "none" ;
} ;

window.onclick = function(event){
  if(event.target == document.getElementById("myModal")){
    document.getElementById("myModal").style.display = "none" ;
  }
} ;

