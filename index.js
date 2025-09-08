const levelcontainer = document.getElementById("level-container");

//load categories
const plantcontainer = document.getElementById("plants-container");

const loadcategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then((data) => {
            const categories = data.categories;
            showCategories(categories);
        })
        .catch((error) => {
            console.log(error);
        });
};
//show categories
const showPlantsCategories=(plants) => {
   plantcontainer.innerHTML =``; 
plants.forEach(plant => {
    plantcontainer.innerHTML += `
             <div class="p-4 w-50 bg-white rounded-lg shadow-md space-y-2 ">
                  <img src="${plant.image}" alt="${plant.name}">
                  <h1 class="text-lg font-semibold">${plant.category}</h1>
                  <p class="text-sm">${plant.description ? plant.description : 'No description available.'}</p>
                  <div class="flex justify-between items-center">
                    <a class="btn bg-green-100 rounded-full mt-2">Fruit Tree</a>
                    <p>৳${plant.price}</p>
                  </div>
                  <button class="btn bg-green-500 rounded-full mt-2">Add to Cart</button>
                 </div>
    `;
});

}

const showCategories = (categories) => {
    
    levelcontainer.innerHTML = "";

    
    categories.forEach(cat => {
        levelcontainer.innerHTML += `
          <div class="p-4 text-center text-bold w-[150px] rounded-lg shadow-md  ">
            <li id="${cat.id}" class="space-y-2 hover:bg-green-500">
                ${cat.category_name}
            </li>
          </div>

        `;
    });
};


levelcontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        
        levelcontainer.querySelectorAll("li").forEach(li => {
            li.classList.remove("bg-green-500");
        });

       
        e.target.classList.add("bg-green-500");

        //console.log("Selected:", e.target.id);
        plantsByCategory(e.target.id);
    }
});


//plants by category
const plantsByCategory = (categoryId) => {
    console.log(categoryId);
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.plants);
            showPlantsCategories(data.plants);
            })
        .catch(error =>{ 
            console.log(error)

        });

}
loadcategory();
plantsByCategory(1);
