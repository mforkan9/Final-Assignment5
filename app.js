fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => foodDisplay(data.categories))

const foodSection = document.getElementById('foods');
const foodDisplay = foods =>{
    //const foodSection = document.getElementById('foods')
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
   const foodSections = document.getElementById('foods')
   foodSections.addEventListener('click',function (){
       foodSections.style.display = 'none'
   } )
}
        // const foodDetails = (searches) =>{
        // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searches}`
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => foodDetailShow(data.meals))
        // }
        // const foodDetailShow = kana =>{
        // const foodShow = document.getElementById('poy');
        // const div = document.createElement('div')
        // div.className = 'food'
        // div.innerHTML =`
        //     <div>
        //     <h3>${kana.strMeal}</h3>
        //     <p>${kana.strArea}</p>
        //     </div>
        //     `
        //     foodShow.appendChild(div)
        // }

        const foodDetails = (searchText) =>{
            //const searchText = document.getElementById("input-field").value;
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
            fetch(url)
            .then(res => res.json())
            .then(data => displayFood(data.meals))
        }

        const displayFood = kana =>{
            const searchDetails = document.getElementById('food-details')
            kana.forEach(kanaItem => {
                const div = document.createElement('div')
                div.className = 'food'
                div.innerHTML = `
                    <div>
                        <img class="food-img" src="${kanaItem.strMealThumb}">
                        <h3>${kanaItem.strMeal}</h3>
                    </div>
                `
                searchDetails.appendChild(div)
            });
        }
        
        const searchMeal = () =>{
            const searchText = document.getElementById("input-field").value;
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
            fetch(url)
            .then(res => res.json())
            .then(data => displayKana(data.meals))
        }

        const displayKana = kana =>{
            const searchDetails = document.getElementById('food-details')
            kana.forEach(kanaItem => {
                const div = document.createElement('div')
                div.className = 'food'
                div.innerHTML = `
                    <div>
                        <img class="food-img" src="${kanaItem.strMealThumb}">
                        <h3>${kanaItem.strMeal}</h3>
                    </div>
                `
                searchDetails.appendChild(div)
            });
        }

        const btn = document.getElementById('search-btn')
        btn.addEventListener('click', function (){
            //const foodSe = document.getElementById('foods');
            foodSection.style.display = 'none'
        })