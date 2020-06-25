import React from 'react';
import axios from 'axios';

function Recipe(props) {
  const handleDelete = () => {
    axios.delete('/api/recipes/' + props.recipeInfo._id).then((response) => {
      console.log(response);
    });
  };
  const handleSave = () => {
    axios
      .post('/api/recipes', { recipeInfo: props.recipeInfo })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      {props.recipeInfo.title || props.recipeInfo.volumeInfo.title}
      {props.saved ? (
        <button onClick={handleDelete}>Delete</button>
      ) : (
        <button onClick={handleSave}>Save</button>
      )}
    </div>
  );
}

export default Recipe;
