// templates.js

const info_food = [
    {
      id: 'template1',
      content: 'Classic Margherita Pizza',
      imageUrl: 'https://cdn.dummyjson.com/recipe-images/1.webp',
    },
    {
      id: 'template2',
      content: 'Vegetarian Stir-Fry',
      imageUrl: 'https://cdn.dummyjson.com/recipe-images/2.webp',
    },
    {
      id: 'template3',
      content: 'Chocolate Chip Cookies',
      imageUrl: 'https://cdn.dummyjson.com/recipe-images/3.webp',
    },
    {
        id: 'template4',
        content: 'Chicken Alfredo Pasta',
        imageUrl: 'https://cdn.dummyjson.com/recipe-images/4.webp',
      },
      {
        id: 'template5',
        content: 'Mango Salsa Chicken',
        imageUrl: 'https://cdn.dummyjson.com/recipe-images/5.webp',
      },
      {
        id: 'template6',
        content: 'Quinoa Salad with Avocado',
        imageUrl: 'https://cdn.dummyjson.com/recipe-images/6.webp',
      },
      {
        id: 'template7',
        content: 'Tomato Basil Bruschetta',
        imageUrl: 'https://cdn.dummyjson.com/recipe-images/7.webp',
      },
      {
        id: 'template8',
        content: 'Beef and Broccoli Stir-Fry',
        imageUrl: 'https://cdn.dummyjson.com/recipe-images/8.webp',
      },
      {
        id: 'template9',
        content: 'Caprese Salad',
        imageUrl: 'https://cdn.dummyjson.com/recipe-images/9.webp',
      },
      {
        id: 'template10',
        content: 'Shrimp Scampi Pasta',
        imageUrl: 'https://cdn.dummyjson.com/recipe-images/10.webp',
      },
      {
        id: 'template11',
        content: 'Classic Margherita Pizza',
      imageUrl: 'https://cdn.dummyjson.com/recipe-images/1.webp',
      },
      {
        id: 'template12',
        content: 'Vegetarian Stir-Fry',
      imageUrl: 'https://cdn.dummyjson.com/recipe-images/2.webp',
      },
      {
        id: 'template13',
        content: 'Chocolate Chip Cookies',
        imageUrl: 'https://cdn.dummyjson.com/recipe-images/3.webp',
      },
      {
          id: 'template14',
          content: 'Chicken Alfredo Pasta',
        imageUrl: 'https://cdn.dummyjson.com/recipe-images/4.webp',
        },
        {
          id: 'template15',
          content: 'Mango Salsa Chicken',
          imageUrl: 'https://cdn.dummyjson.com/recipe-images/5.webp', 
        },
        {
          id: 'template16',
          content: 'Quinoa Salad with Avocado',
          imageUrl: 'https://cdn.dummyjson.com/recipe-images/6.webp',
        },
        {
          id: 'template17',
          content: 'Tomato Basil Bruschetta',
          imageUrl: 'https://cdn.dummyjson.com/recipe-images/7.webp',
        },
        {
          id: 'template18',
          content: 'Beef and Broccoli Stir-Fry',
        imageUrl: 'https://cdn.dummyjson.com/recipe-images/8.webp',
        },
        {
          id: 'template19',
          content: 'Caprese Salad',
          imageUrl: 'https://cdn.dummyjson.com/recipe-images/9.webp',
        },
        {
          id: 'template20',
          content: 'Shrimp Scampi Pasta',
          imageUrl: 'https://cdn.dummyjson.com/recipe-images/10.webp',
        },
        {
            id: 'template21',
            content: 'Classic Margherita Pizza',
            imageUrl: 'https://cdn.dummyjson.com/recipe-images/1.webp',
          },
          {
            id: 'template22',
            content: 'Vegetarian Stir-Fry',
             imageUrl: 'https://cdn.dummyjson.com/recipe-images/2.webp',
          },
          {
            id: 'template23',
            content: 'Chocolate Chip Cookies',
            imageUrl: 'https://cdn.dummyjson.com/recipe-images/3.webp',
          },
          {
              id: 'template24',
              content: 'Chicken Alfredo Pasta',
              imageUrl: 'https://cdn.dummyjson.com/recipe-images/4.webp',
            },
            {
              id: 'template25',
              content: 'Mango Salsa Chicken',
              imageUrl: 'https://cdn.dummyjson.com/recipe-images/5.webp',
            },
            {
              id: 'template26',
              content: 'Quinoa Salad with Avocado',
              imageUrl: 'https://cdn.dummyjson.com/recipe-images/6.webp',
            },
            {
              id: 'template27',
              content: 'Tomato Basil Bruschetta',
              imageUrl: 'https://cdn.dummyjson.com/recipe-images/7.webp',
            },
            {
              id: 'template28',
              content: 'Beef and Broccoli Stir-Fry',
              imageUrl: 'https://cdn.dummyjson.com/recipe-images/8.webp',
            },
            {
              id: 'template29',
              content: 'Caprese Salad',
              imageUrl: 'https://cdn.dummyjson.com/recipe-images/9.webp',
            },
            {
              id: 'template30',
              content: 'Shrimp Scampi Pasta',
              imageUrl: 'https://cdn.dummyjson.com/recipe-images/10.webp',
            },
          
  ];
  
  const get_id =(id) => document.getElementById(id) ;
load_food (info_food) ;

function load_food(arr){
    get_id("recipies_side").innerHTML = " " ;
    let root = get_id("recipies_side");
    for(const property  of arr){
        root.innerHTML += generate_info_food_template (
           property.imageUrl ,
           property.content,
           property.id ,
        ) ;
    }
    
}
  
function generate_info_food_template(imageUrl,content,){
    return `
   
   <div class="recipies">
        <div class="recipies_items">
         <a href="/movie/movie.html">
         <img src="${imageUrl}" alt="Avatar" class="image">
         </a>
            <div class="text">${content}</div>
      </div>
</div>

      
    `
}