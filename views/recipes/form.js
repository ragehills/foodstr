<form action="/<%= recipe.id %>" method="POST">
  <input type="text" name="title" placeholder="Enter a title" >
  <textarea name="ingredient" placeholder="Ingredients"></textarea>
  <textarea name="method" placeholder="Method"><%= recipe.body %></textarea>
  <input type="number" name="cookTime" min="0">
  <input type="number" name="prepTime" min="0">
  <input type="number" name="serves" min="0" max="10">
  <input type="number" name="difficulty" min="0" max="5">

  <input type="submit" value="Save recipe">
  <% if(recipe.id != "") { %>
  <input type="hidden" name="_method" value="PUT">
  <% } %>
</form>

