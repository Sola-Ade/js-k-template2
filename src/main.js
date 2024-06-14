//import { sum } from "./sum.js";
import { locations } from "./travelling.js";
import { recipes } from "./cooking.js";
import { sum } from "./sum.js";

console.log("sum is ", sum(10, 20));
console.log("This is main.js.");
console.log("You should probably use `yarn test` or `yarn test --watchAll`");*/

console.log(locations[0].name)
console.log(locations[3].personalRating)
console.log(recipes[2].ingredients)
console.log(recipes[2].ingredients[1])
console.log(locations[3].moreThanTwoAirports)

function logRecipesName(recipes){
    for (let i = 0; i < recipes.length; i++){
        let recipesName = recipes[i].name;
        console.log(recipesName);
        }  
    }

    logRecipesName(recipes)

function logLocationsName(locations){
    for (let i = 0; i < locations.length; i++){
        let locationsName = locations[i].name;
        console.log(locationsName);
        }  
    }

    logLocationsName(locations)

function summariseRecipe(recipes){
    for (let i = 0; i < recipes.length; i++){
        let recipesName = recipes[i].name;
        let recipesIngredients = recipes[i].ingredients;
        let recipesTimeTaken =recipes[i].timeTaken
        console.log("This recipe is called", (recipesName), ", and the ingredients are", (recipesIngredients), ".", "It takes", (recipesTimeTaken), "minutes to cook.")
    }
}
    summariseRecipe(recipes)

    function summariseLocations(locations){
        for (let i = 0; i < locations.length; i++){
            let locationsName = locations[i].name;
            let locationsFlightTime = locations[i].flightTime;
            let locationsPersonalRating = locations[i].personalRating;
            let locationsAirports = locations[i].moreThanTwoAirports
            console.log("I have been to", (locationsName), ", and the flight took", (locationsFlightTime), "hours.", "My personal rating for this place is", (locationsPersonalRating), "out of 10. Is it true there are more than 2 airports here:", (locationsAirports), ".")
        }
        }
    summariseLocations(locations) 

    function summariseAll(recipes) {
        let recipesArray = [];
        for (let i = 0; i < recipes.length; i++){
            recipesArray.push(summariseRecipe(recipes[i]));
        }
        return recipesArray
    }

    console.log(summariseAll(recipes));
