import React from "react"; // Import the React library
import Filter from "./Filter" // Import the Filter component

// Define the DisplayShopping component, which takes in a prop called "details"
function DisplayShopping({ details }) {
    
    
// Create a new array called "shoppingtrue" which includes only the objects in "details" where the "shopping" property includes the string "shopping"
    const shoppingtrue = details.filter((entry) => {
        return entry.shopping.includes("shopping");
    });

// Render a div element which contains the Filter component, passing in the filtered "shoppingtrue" array as the "details" prop and the string "shoppinglist" as the "type" prop
    return (
        <div>
           
            <Filter details={shoppingtrue} type={"shoppinglist"}/>

        </div>
        
    );
}

// Export the DisplayShopping component so it can be used in other parts of the application
export default DisplayShopping;
