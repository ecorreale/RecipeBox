const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Include any API routes here

//Van working on api

// app.get("/api/edamam", (req, res) => {
//   recipeModel.find().then(savedRecipes => {
//       res.json(savedRecipes)
//   })
// });

// app.post("/api/books", ({ body }, res) => {
//   // const recipe = body;
//   // console.log(recipe)
//   console.log(RecipeModel)
//   const recipe = {
//       title:body.bookInfo.volumeInfo.title,
//       authors:body.bookInfo.volumeInfo.authors,
//       description:body.bookInfo.volumeInfo.description,
//       image:body.bookInfo.volumeInfo.imageLinks && body.bookInfo.volumeInfo.imageLinks[0],
//       links:body.bookInfo.volumeInfo.previewLInk
//   }
//   recipeModel.create(recipe, (error, savedRecipes) => {
//   if (error) {
//       console.log(error);
//   } else {
//       res.send(savedRecipes);
//   }
//   });
// });

// app.delete("/api/edamam/:id",  (req, res) => {
//   recipeModel.remove({_id:req.params.id}, (error, response) => {
//       if (error) {
//           res.send(error);
//       } else {
//           res.send(response);
//       }
//       });
//   });

// app.get("/api/edamam", (req, res) => {
//   console.log(req.query)
//   axios.get("https://api.edamam.com/search?q=" + req.query.q).then((response) => {
//   // console.log(response.data)
//   res.json(response.data)
//   })
// })

// Serve static files from the React app in production.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  // Connect to the Mongo DB
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/recipebox', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  // The "catchall" handler: for any request that doesn't match an api
  // route, send back the React index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
