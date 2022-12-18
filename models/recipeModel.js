const nedb = require("nedb");

class recipe {
    constructor(Path) {
        console.log(Path);
        if (Path) {
            this.recipe = new nedb(Path);
            console.log("recipes connected " + Path);
            Path;
        } 
    }
    init() {
        this.recipe.insert({
            id: "1",
            name: "carrot cake TEST",
            description: "home made here",
            category: "dessert",
            ingredients: [{ food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" }],
            allergens: ["Dairy", "Gluten", "Nuts"],
            instructions: "",
            review: [{
                reviewName: ["Jimmy McNulty"],
                reviewNumber: [4],
                reviewText: ["Decent recipe, some of the ingredients a little hard to find at my local shop"]
            }],

            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "2",
            name: "sandwiches",
            description: "with a variety of fillings",
            category: ("starter and side"),
            ingredients: [{ food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "TEST", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" }],
            allergens: ["Dairy", "Gluten"],
            instructions: "",
            review: [{
                reviewName: ["Jay Landsman"],
                reviewNumber: [2],
                reviewText: ["The small amount of ingredients led to small portions, not enough for me, anyone reading should buy more!"]
            }],
            menu: [],
            shopping: []
        });

    }

    getAllEntries() {
        return new Promise((resolve, reject) => {
            this.recipe.find({}, function (err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                    console.log("function all() returns: ", entries);
                }
            });
        });
    }
}
module.exports = recipe;
