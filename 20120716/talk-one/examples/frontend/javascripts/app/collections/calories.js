define([
	'backbone'
  , 'models/calory'
  , 'config'
]
, function (Backbone
	      , Calory
	      , Config) {

	var Calories = Backbone.Collection.extend({
		url: Config.url('/calories'),

		model: Calory,

		comparator : function (model) {
			return -(new Date(model.get('date')).getTime());
		}
	});

	return Calories;

});