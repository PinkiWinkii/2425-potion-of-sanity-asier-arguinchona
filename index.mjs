import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";

const execute = async () => {
    try
    {

        
        const data = await getData();

        //console.log(data);
        

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);



        showIngredients(ingredients.ingredients);
    }
    catch
    {
        //ERROR
    }
}

function showIngredients(ingredients)
{
    console.log("ENTERS FUNCTION");
    
    for(let i = 0; i < ingredients.length; i++)
    {
        console.log("Ingredient: " + ingredients[i].name + " Effects: " + JSON.stringify(ingredients[i].effects));
    }
}

execute();