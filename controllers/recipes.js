function indexRecipes(req, res) {
 		res.send('index');
}

function showRecipes(req, res) {
	res.send('show');
}

function newRecipes(req, res) {
	res.send('new');
}

function createRecipes(req, res) {
	res.send('create');
}

function editRecipes(req, res) {
	res.send('edit');
}

function updateRecipes(req, res) {
	res.send('update');
}

function deleteRecipes(req, res) {
	res.send('delete');
}

module.exports = {
	index: indexRecipes,
	show: showRecipes,
	new: newRecipes,
	create: createRecipes,
	edit: editRecipes,
	update: updateRecipes,
	delete: deleteRecipes