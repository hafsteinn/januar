'use strict';

angular.module('januarApp')
	.controller('MainCtrl',
	['$scope', 'loggerFactory',
	function ($scope, loggerFactory) {

	var start,end;

	$scope.submit = function(){

				//calculate and round time
				var milliseconds = Math.abs(new Date(end) - new Date(start));
				var minutes = milliseconds / 1000 / 60;
				var quarters = Math.floor(minutes / 15);

				//add item to DB and retreive updated array
				loggerFactory.addEntry($scope.title, $scope.description, start, end,quarters/4);
				$scope.loggedProjects = loggerFactory.getMockDB();

				//get statistics
				$scope.numberOfItems = $scope.loggedProjects.length;
				$scope.totalTime = 0;
				$scope.loggedProjects.forEach(function(entry){
					$scope.totalTime = $scope.totalTime + entry.total;
					console.log(entry);
				});

				//clear
				$scope.title = '';
				$scope.description = '';
				$scope.date = null;
			};

	$('#startDateInput').datetimepicker({
		onChangeDateTime:function(dp,$input){
			start = $input.val();
		}
	});

	$('#endDateInput').datetimepicker({
		onChangeDateTime:function(dp,$input){
			end = $input.val();
		}
	});

}]);
