const getFoods = (foodName) => {
  const url = `www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
const sarchFood = document
  .getElementById("sarch-btn")
  .addEventListener("click", () => {
    const foodInput = document.getElementById("sarch-input").value;
    getFoods(foodInput);
  });
