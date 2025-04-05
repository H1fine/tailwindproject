"use strict";

Data();

async function Data() {

await fetch ("https://proxy-key-1.onrender.com");
    const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({message: "thisIsJson"})
        }

        const res = await fetch("https://proxy-key-1.onrender.com/get-key", config);
        const data = await res.json();
        const {key} = data;


       getRecipe(key);

    }

    async function getRecipe (key)  {

        try{
            const res = await fetch("https://api.spoonacular.com/recipes/parseIngredients?q=&Key=" + KEY);
            ;
            console.log(res);
        } catch (error) {

        }
    }