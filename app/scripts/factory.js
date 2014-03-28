'use strict';

angular.module('januarApp').factory('loggerFactory',
['$rootScope',
function ($rootScope) {

	var mockDB = [];

	return {
			addEntry: function(titleIn, contentIn, startIn, endIn, totalIn){
				var logObject = {
					title: titleIn,
					description: contentIn,
					start: startIn,
					end: endIn,
					total: totalIn
				};

				mockDB.push(logObject);
			},
			getMockDB: function(){
				return mockDB;
			}

		};
}]);