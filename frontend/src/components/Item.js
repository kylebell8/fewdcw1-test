import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import FetchNutrition from "./FetchNutrition";
import Review from "./Review";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../index.css"

const Item = ({ food }) => {
  const [OpenNutrition, SetOpenNutrition] = useState(false);

  const handleChange = (event) => {
    SetOpenNutrition(!OpenNutrition);
  };



  return (
    <div>
      <div class="accordion-header">
      <Accordion.Header class="accordion-header"> {food.name}</Accordion.Header>
</div>
      <Accordion.Body>
      <p>{food.category}</p>
        <p>{food.description}</p>
        <p>Instuctions:</p>
        <ol>

        {food.instructions.map((step, i) => (
        <li key={i}>{step}</li>
          ))}
        </ol>
        <p>Allergens Include: {food.allergens + " "} </p>
        <div class="rcorners">
        <Accordion>
          <Accordion.Header>Ingredients</Accordion.Header>
          <Accordion.Body>
            <p>Ingredients Include:</p>
            {food.ingredients.map((entry, i) => {
              return <div>

                {entry.food_ingredient}
                {" "}
                {entry.food_ingredientquantity}


              </div>

            })}
          </Accordion.Body>
        </Accordion>
        </div>
        <FormGroup>
          <FormControlLabel control={<Switch onChange={handleChange} defaultunchecked />} label="Toggle Nutritional Data" />
        </FormGroup>
        <div class ="nutritionchart">
        {OpenNutrition && <FetchNutrition query={food.name} />}
        </div>
        <br></br>
        <br></br>
        <Stack spacing={1} direction="row">
          <Button onClick={() => food.menu.splice(0, food.menu.length, "menu") && console.log(food.menu)} variant="contained" size="small">Add to Menu</Button>
          <Button onClick={() => food.shopping.splice(0, food.shopping.length, "shopping") && console.log(food.shopping)} variant="contained" size="small">Add To Shopping</Button>
        </Stack>
        <br></br>
        <div class="rcorners">
        <Accordion>
          <Accordion.Header>Reviews</Accordion.Header>
          <Accordion.Body>
            <p><Review food={food} /></p>
          </Accordion.Body>
        </Accordion>
        </div>
      </Accordion.Body>
    </div>

  );
};
export default Item;
