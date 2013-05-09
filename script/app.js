angular.module('gangplankwelcome', []).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/firststep', {templateUrl: 'partials/first-step.html', controller: FirstStep}).
			when('/meetingorevent', {templateUrl: 'partials/meeting-or-event.html', controller: MeetingOrEvent}).
			when('/coworking', {templateUrl: 'partials/coworking.html', controller: Coworking}).
			otherwise({redirectTo: '/firstStep'});
	}]);