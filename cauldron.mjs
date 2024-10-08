import Potion from "./potion.mjs";

export default  class Cauldron {
    constructor(ingredients){
        this.ingredients = ingredients;
    }

    createPotion(ingredient_name1, ingredient_name2) {
        
        const ingredient1 = this.ingredients.find(ingredient_name1);
        const ingredient2 = this.ingredients.find(ingredient_name2);

        //console.log("Ingredient1:" + ingredient1.name);
        //console.log("Ingredient2:" + ingredient2.name);

        const common_effects = ingredient1.findCommonEffects(ingredient2);

        //console.log(common_effects);
        

        if(common_effects.length === 0)
        {
            //console.log("FAILED POTION");
            
            return Potion.failed();
        }

        
        if(isPotionOfSanity(ingredient1, ingredient2)){
            //console.log("SANITY POTION");
            return Potion.sanity();
        } else {
            //console.log("NORMAL POTION");
            return Potion.with(
                common_effects[0],
                ingredient1.weight + ingredient2.weight,
                ingredient1.value + ingredient2.value
            );
        }

        
    }


}

function isPotionOfSanity(i1, i2)
{
    return i1.name === "Nightshade" && i2.name === "Ectoplasm" ||
            i2.name === "Nightshade" && i1.name === "Ectoplasm" ? true : false;
}