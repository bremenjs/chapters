
module.exports = function (app, database) {

	app.namespace('/calories', function () {
		require('./calories')(app, database);
	});
};