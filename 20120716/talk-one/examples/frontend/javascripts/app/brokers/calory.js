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
    'collections/calories'
],
function (Calories) {

    var CaloryBroker = (function () {

    	return {

    		findAllCurrent : function () {
    			var deferred = $.Deferred();

    			var calories = new Calories();

    			calories.fetch({
    				success : function (model, response) {
                        calories.sort();

    					deferred.resolve(calories);
    				},
    				error : function (model, response) {
    					deferred.reject(response);
    				}
    			});

    			return deferred.promise();
    		},

            save : function (calory) {
                var deferred = $.Deferred();

                calory.save(calory.toJSON(), {
                    success : function (model, response) {
                        deferred.resolve(calory);
                    },
                    error : function (model, response) {
                        deferred.reject(response);
                    }
                });

                return deferred.promise();
            }
    	};
    }());

    return CaloryBroker;
});