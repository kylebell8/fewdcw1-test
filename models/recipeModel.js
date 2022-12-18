const nedb = require("nedb");

class recipe {
    constructor(PathToRecipe) {
        console.log(PathToRecipe);
        if (PathToRecipe) {
            this.recipe = new nedb(PathToRecipe);
            console.log("recipe connected to " + PathToRecipe);
            PathToRecipe;
        } else {
            this.recipe = new nedb();
        }
    }
    init() {
        this.recipe.insert({
            id: "1",
            name: "carrot cake TEST",
            description: "home made here",
            price: "2.50",
            category: "dessert",
            ingredients: [ { food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" } ],
            allergens: ["Dairy", "Gluten", "Nuts"],
            available: "no",
            reviewName: [],
            reviewNumber: [],
            reviewText: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "2",
            name: "sandwiches",
            description: "with a variety of fillings",
            price: "2.50",
            category: ("starter and side"),
            ingredients: [ { food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "TEST", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" } ],
            allergens: ["Dairy", "Gluten"],
            available: "no",
            reviewName: [],
            reviewNumber: [],
            reviewText: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "3",
            name: "salad",
            description: "uses seasonal local produce",
            price: "3.50",
            category: "side",
            ingredients: [ { food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" } ],
            allergens: ["Nuts"],
            available: "yes",
            reviewName: [],
            reviewNumber: [],
            reviewText: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "4",
            name: "hot chocolate",
            description: "with fully fat or skimmed milk",
            price: "2.00",
            category: "drinks",
            ingredients: [ { food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" } ],
            allergens: "",
            available: "yes",
            reviewName: [],
            reviewNumber: [],
            reviewText: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "5",
            name: "chocolate cake",
            description: "with cream",
            price: "2.50",
            category: "dessert",
            ingredients: [ { food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" } ],
            allergens: "",
            available: "yes",
            reviewName: [],
            reviewNumber: [],
            reviewText: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "6",
            name: "soup",
            description: "ask for soups available today",
            price: "2.00",
            category: "starter",
            ingredients: [ { food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" } ],
            allergens: "",
            available: "yes",
            reviewName: [],
            reviewNumber: [],
            reviewText: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "7",
            name: "pizza",
            description: "ham and pineapple or four cheese",
            price: "5.00",
            category: "main",
            ingredients: [ { food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" } ],
            allergens: "",
            available: "yes",
            reviewName: [],
            reviewNumber: [],
            reviewText: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "8",
            name: "baked potato",
            description: "with cheese, coleslaw, beans or tuna",
            price: "4.50",
            category: "main",
            ingredients: [ { food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" } ],
            allergens: "",
            available: "yes",
            reviewName: [],
            reviewNumber: [],
            reviewText: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "9",
            name: "apple pie",
            description: "with cream or custard",
            price: "3.50",
            category: "dessert",
            ingredients: [ { food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" } ],
            allergens: "",
            available: "yes",
            reviewName: [],
            reviewNumber: [],
            reviewText: [],
            menu: [],
            shopping: []

        });
        this.recipe.insert({
            id: "10",
            name: "cheesecake",
            description: "with cream",
            price: "3.00",
            category: "dessert",
            ingredients: [ { food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" } ],
            allergens: "",
            available: "yes",
            reviewName: [],
            reviewNumber: [],
            reviewText: [],
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
