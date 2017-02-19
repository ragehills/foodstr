<form action="/<%= recipe.id %>" method="POST">
	<div class="input-group">
		<span class="input-group-addon" id="basic-addon1">Recipe Title</span>
		<input type="text" class="form-control" placeholder="Enter a title" value="<%= recipe.title %>" aria-describedby="basic-addon1">
	</div>
	<div class="input-group">
		<span class="input-group-addon" id="basic-addon1">Ingredients</span>
		<input type="text" class="form-control" placeholder="Enter your ingredients" value="<%= recipe.ingredient %>" aria-describedby="basic-addon1">
	</div>
	<label for="method">Method</label>
	<textarea name="method" placeholder="Method"><%= recipe.method %></textarea>

	<label for="cookTime">Cook Time:</label>
	<input type="number" name="cookTime" value="<%= recipe.cookTime %>" min="0">

	<label for="prepTime">Prep Time:</label>
	<input type="number" name="prepTime" value="<%= recipe.prepTime %>" min="0">

	<label for="serves">Serves</label>
	<input type="number" name="serves" value="<%= recipe.serves %>" min="0" max="10">

	<label for="skill">Difficulty Level</label>
	<input type="number" name="skill" value="<%= recipe.skill %>" min="0" max="5">

	<input type="submit" value="Save recipe">
	<% if(recipe.id != "") { %>
	<input type="hidden" name="_method" value="PUT">
	<% } %>
</form>

