/*!
 * Bremen.js - Chapter #3
 *
 * CaloryCounter'
 *
 * Copyright(c) 2012 Bremen, Germany - All rights reserved.
 *
 * Authors:
 *
 *     Lukas Magedanz <lukas.magedanz@gmail.com>
 *     André König <andre.koenig@gmail.com>
 *
 */
define([
	'backbone'
  , 'brokers/calory'
  , 'collections/calories'
  , 'views/dayview'
],
function (Backbone
	    , CalorieBroker
	    , Calories
	    , DayView) {

	function CaloryCounterApp($mainContainer) {
		this.$main = $mainContainer;
	};

	CaloryCounterApp.prototype.run = function () {

		var calories = new Calories();

		var view = new DayView({
			collection: calories
		});

		this.$main.append(view.$el);

		// TODO: Start router
		CalorieBroker.findAllCurrent()
		    .done(function (caloriesResponse) {
		    	calories.reset(caloriesResponse.models);
		    });
	};

	return CaloryCounterApp;
});