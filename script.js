



async function getRandomMeal() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const randomMeal = await response.json();
    // console.log(randomMeal.meal[0]);
    addCard(randomMeal.meals[0], true);
    // addFav(randomMeal.meals[0]);
}



async function getMealBySearch(term) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
    const res = await resp.json();
    const meal = res.meals;
    // console.log(meal==null);
    if (meal == null) {
        totalMeals.innerHTML = `<h1 style="text-align:center;width:100%;height:50vh;">NO RESULTS FOUND<h1>`;
    } else {
        for (let i = 0; i < meal.length; i++) {
            addCard(await meal[i], false);
        }
    }
}
    // console.log(meals.meals[0]);
    // addCard(mels.meals[0],false);
// getRandomMeal();
// getRandomMeal();
let searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", async () => {
    totalMeals.innerHTML = "";

    let searchElem = document.getElementById("inputText");
    const arr = getMealBySearch(searchElem.value);
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        addCard(arr.meals[i], false);
        console.log(arr.meals[i]);
    }
});
let moreBtn = document.getElementById("showmore");
moreBtn.addEventListener("click", () => {
    getRandomMeal();
    getRandomMeal();
    getRandomMeal();
    getRandomMeal();
})
getRandomMeal();
getRandomMeal();
getRandomMeal();
getRandomMeal();



// let likedBtn =document.getElementsByClassName("liked");










