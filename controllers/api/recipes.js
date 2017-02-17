var Recipe = require('../../models/recipe');

// INDEX - GET /
function indexRecipe(req , res) {

  Recipe.find({} , function(err, recipes) {

    if(err) return res.status(500).json({error: err.message});

    res.status(200).json(recipes);
  });

}

// SHOW - GET /:id
function showRecipe(req , res) {

  Recipe.findById(req.params.id , function(err, recipe) {
    
    if(!post) return res.status(404).send("Not found");
    if(err) return res.status(500).json({error: err.message});

    res.status(200).json(post);
  });
}

// DELETE - DELETE /:id
function deleteRecipe(req , res) {
  
  Recipe.findByIdAndRemove(req.params.id , function(err) {
    if(err) return res.status(500).json({error: err.message});
    
    res.status(204).json({
      message: "succesful delete"
    });
  });
}

// UPDATE - UPDATE /:id
function updateRecipe(req , res) {

  Recipe.findByIdAndUpdate( 
    req.params.id, 
    { $set:  req.body }, 
    { runValidators: true }, 
      function(err , recipe){
      
        if(err) return res.status(500).json({error: err.message});

        res.status(204).json(recipe);
    
      }
  );

}

// CREATE - POST /
function createRecipe(req , res) {

  Recipe.create( req.body , function(err, recipe){
  
    if(err) return res.status(500).json({ 
      error: "there was a problem in the app"
    });
  
    res.status(201).json({
      message: "successfully created",
      recipe: recipe
    });
  
  });

}

module.exports = {

  index:indexRecipe,
  show: showRecipe,
  delete: deleteRecipe,
  update: updateRecipe,
  create: createRecipe

}