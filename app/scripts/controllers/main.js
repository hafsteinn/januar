'use strict';

angular.module('januarApp')
	.controller('MainCtrl',
	['$scope', 'loggerFactory',
	function ($scope, loggerFactory) {

	var start,end;

	//start by initializing the database for viewing purposes
	//START INIT
		loggerFactory.addEntry(
			'The first project',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			null,
			null,
			10
		);
		loggerFactory.addEntry(
			'The second project',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
			null,
			null,
			25
		);

		$scope.loggedProjects = loggerFactory.getMockDB();
		stats();
	//END INIT

	$scope.submit = function(){

				//calculate and round time
				var milliseconds = Math.abs(new Date(end) - new Date(start));
				var minutes = milliseconds / 1000 / 60;
				var quarters = Math.floor(minutes / 15);

				//add item to DB and retreive updated array
				loggerFactory.addEntry($scope.title, $scope.description, start, end,quarters/4);
				$scope.loggedProjects = loggerFactory.getMockDB();

				//get statistics
				stats();

				//clear
				$scope.title = '';
				$scope.description = '';
				$scope.date = null;
			};

	function stats(){
				$scope.numberOfItems = $scope.loggedProjects.length;
				$scope.totalTime = 0;
				$scope.loggedProjects.forEach(function(entry){
					$scope.totalTime = $scope.totalTime + entry.total;
				});
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
