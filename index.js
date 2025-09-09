const levelcontainer = document.getElementById("level-container");
const plantcontainer = document.getElementById("plants-container");
const bookMarksContainer = document.getElementById("yourCartContiner");
let bookMarks = [];

// load categories
const loadcategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      const categories = data.categories;
      showCategories(categories);
    })
    .catch((error) => console.log(error));
};




// show plant cards
const showPlantsCategories = (plants) => {
  plantcontainer.innerHTML = ``;
  plants.forEach((plant) => {
    plantcontainer.innerHTML += `
      <div class="p-4 w-60 bg-white rounded-lg shadow-md space-y-2 mx-auto">
        <img  src="${plant.image}" alt="">
        <h1 class="text-2xl font-bold" onclick="loadPlantDetail(${plant.id})">${plant.name}</h1>
         
        <p id="${plant.id}" class="text-sm">${plant.description || "No description available."}</p>
        <div class="flex justify-between items-center">
          <a class="btn bg-green-100 rounded-full mt-2">Fruit Tree</a>
          <p>৳${plant.price}</p>
        </div>
        <button id="fetchBtn" class="btn bg-green-500 text-white rounded-full mt-2">Add to Cart</button>
      </div>
    `;
  });
};


// show categories
const showCategories = (categories) => {
  levelcontainer.innerHTML = "";
  categories.forEach((cat) => {
    levelcontainer.innerHTML += `
      <div class="p-4 text-center w-full">
        <li id="${cat.id}" class="cursor-pointer hover:bg-green-500 p-2 rounded">
          ${cat.category_name}
        </li>
      </div>
    `;
  });
};

// category click
levelcontainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    levelcontainer.querySelectorAll("li").forEach((li) => {
      li.classList.remove("bg-green-500");
    });
    e.target.classList.add("bg-green-500");
    plantsByCategory(e.target.id);
  }
});

// fetch plants by category
const plantsByCategory = (categoryId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then((res) => res.json())
    .then((data) => showPlantsCategories(data.plants))
    .catch((error) => console.log(error));
};

// handle add to cart
plantcontainer.addEventListener("click", (e) => {
  if (e.target.innerText === "Add to Cart") {
    const card = e.target.closest("div");
    const title = card.querySelector("h1").innerText;
    const id = card.querySelector("p").id;

    bookMarks.push({ title, id});
    showMark(bookMarks);
  }
});

const showMark = (bookMarks) => {
  bookMarksContainer.innerHTML = ``
  bookMarks.forEach((bookMark) => {
    bookMarksContainer.innerHTML += `
      <div class="p-2 border-b">
        <h1 class="font-semibold">${bookMark.title}</h1>
      </div>
    `;
  });
};
const loadPlantDetail= async(id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    
    const res = await fetch(url);
    const details= await res.json();
    displayPlantDetail(details.plants)
}
const displayPlantDetail=(plants)=>{
  console.log(plants)
  const plantBox =document.getElementById("details-container")
 plantBox.innerHTML=` 
    <div>
        
      </div>
      <div class="py-5">
      <img class="py-5" src="${parent.image}" alt="">
        <h1 class="text-2xl font-bold py-5">${plants.name}</h1>
        <p>${plants.description} </p>
        <p class="btn bg-green-100 rounded-full mt-2 py-">${plants.category}</p>
        <p id="az" class="p-2 font-awesome">৳ ${plants.price}</p>
        
      
      </div>
   
    <div class="modal-action">
      <form method="dialog">
      
 `
 document.getElementById("my_modal_5").showModal();
}
// initial load
loadcategory();
plantsByCategory(1);



