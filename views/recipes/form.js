<form action="/<%= recipe.id %>" method="POST">
	<div class="input-group">
		<span class="input-group-addon" id="basic-addon1">Recipe Title</span>
		<input type="text" class="form-control" name="title" placeholder="Enter a title" value="<%= recipe.title %>" aria-describedby="basic-addon1">
	</div>
	<br>
	<div class="form-group">
  		<label for="comment">Ingredients:</label>
  		<textarea type="text" class="form-control" rows="5" id="comment" name="ingredient" placeholder="Enter your ingredients"><%= recipe.ingredient %></textarea>
	</div>

	<div class="form-group">
		<label for="comment">Method:</label>
		<textarea type="text" class="form-control" rows="5" id="comment" name="method" placeholder="Method"><%= recipe.method %></textarea>
	</div>

	<div class="row">
		<div class="col-lg-6">
			<div class="form-group">
			    
			    <label for="cookTime">Cook Time:</label>
				<input type="number" class="form-control" name="cookTime" value="<%= recipe.cookTime %>" min="0">
				
				<label for="prepTime">Prep Time:</label>
				<input type="number" class="form-control" name="prepTime" value="<%= recipe.prepTime %>" min="0">
				
				<label for="serves">Serves</label>
				<input type="number" class="form-control" name="serves" value="<%= recipe.serves %>" min="0" max="10">

				<label for="skill">Difficulty Level</label>
				<input type="number" class="form-control" name="skill" value="<%= recipe.skill %>" min="0" max="5">

			</div>
		</div>
	</div>
	<label for="saveRecipe"></label>
	<input type="submit" value="Save Recipe">
  	<% if(recipe.id != "") { %>
	  	<input type="hidden" name="_method" value="PUT">
  	<% } %>
</form>
