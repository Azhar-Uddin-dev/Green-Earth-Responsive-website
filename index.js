const levelcontainer = document.getElementById("level-container");

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

const showCategories = (categories) => {
    
    levelcontainer.innerHTML = "";

    
    categories.forEach(cat => {
        levelcontainer.innerHTML += `
            <li id="${cat.id}" class="space-y-2 hover:bg-green-500">
                ${cat.category_name}
            </li>
        `;
    });
};


levelcontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        
        levelcontainer.querySelectorAll("li").forEach(li => {
            li.classList.remove("bg-green-500");
        });

       
        e.target.classList.add("bg-green-500");

        console.log("Selected:", e.target.id);
    }
});

loadcategory();
