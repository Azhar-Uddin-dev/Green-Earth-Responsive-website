const levelcontainer=document.getElementById("level-container");
const loadcategory=()=>{
fetch("https://openapi.programming-hero.com/api/categories")
.then(res=>res.json())
.then((data)=>{
    console.log(data.categories);
    const categories=data.categories;
    categories.forEach(cat => {
        console.log(cat.category_name);
        levelcontainer.innerHTML+=`<li id="${cat.id}" class="space-y-2 hover:bg-green-500">${cat.category_name}</li>`;
    });
})
.catch((error)=>{
    console.log(error);
});
}

loadcategory();