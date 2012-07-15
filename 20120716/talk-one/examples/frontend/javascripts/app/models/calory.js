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
  , 'config'
],
function (Backbone
	    , Config) {

	var Calory = Backbone.Model.extend({
		url: Config.url('/calories')
	});

	return Calory;
});