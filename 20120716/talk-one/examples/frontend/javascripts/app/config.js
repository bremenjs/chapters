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

],
function () {
	return {
		url: function (method) {
			var endpoint = 'http://huefte.jit.su<%= method %>';

			return _.template(endpoint, {method: method});
		}
	}
});