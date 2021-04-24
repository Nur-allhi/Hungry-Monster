// Show some suggestion:
// const hereIsYourSuggetion = () => {
//   const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displaySuggestionFoods(data[0]));
// };
// hereIsYourSuggetion();

// // // Display **Suggestion** Food data on the website:

// const displaySuggestionFoods = (suggestions) => {
//   displayClear();
//   const suggestionFoodDisplay = document.getElementById(
//     "suggestion-food-display"
//   );
//   suggestions.forEach((suggestion) => {
//     const everyColumn = document.createElement("div");
//     everyColumn.className = "col-xl-3 col-lg-4 col-md-6";

//     const suggestionAre = `
//     <div class="mt-4 card-div">
//     <div class="card-img-hover img-div">
//     <img class="food-images card-img-top" src="${suggestion.categories[0].strCategory}" alt="">
//     <div>
//     <div class="card-body">
//    <h6 class="card-title text-center">${suggestion.strCategory.strCategoryThumb}</h6>
//     </div>
//     </div>
//     `;
//     everyColumn.innerHTML = suggestionAre;
//     suggestionFoodDisplay.appendChild(everyColumn);
//   });
// };
