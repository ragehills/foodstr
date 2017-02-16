<form action="/<%= recipe.id %>" method="POST">
	<label for="title">Title</label>
	<input type="text" name="title" value="<%= recipe.title %>" placeholder="Enter a title" >

	<label for="ingredient">Ingredient</label>
	<textarea name="ingredient" placeholder="Ingredients"><%= recipe.ingredient %></textarea>

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

