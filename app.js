fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => foodDisplay(data.categories))

const foodDisplay = foods =>{
    const foodSection = document.getElementById('foods')
    for (let i = 0; i < foods.length; i++) {
         const foodName = foods[i]; 
        const div =document.createElement('div')
        div.className = 'food'
        div.innerHTML = `
            <div onClick="foodDetails('${foodName.strCategory}')">
                <img class='food-img' src='${foodName.strCategoryThumb}'>
                <h3>${foodName.strCategory}</h3>
            </div>
        `
        foodSection.appendChild(div)
   } 
}
        const foodDetails = name =>{
        const url = `http:www.themealdb.com/api/json/v1/1/search.php?s=${name}`
            fetch(url)
            .then(res => res.json())
            .then(data => foodDetailShow(data.meals[0]))
        }
        const foodDetailShow = foody =>{
        const foodShow = document.getElementById('poody')
        foodShow.innerHTML =`
            <div class='food'>
            <h3>${foody.strMeal}</h3>
            <p>${foody.strArea}</p>
            </div>
            `
        }