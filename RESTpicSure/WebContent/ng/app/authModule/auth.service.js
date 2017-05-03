angular.module('authModule')
  .factory('authService', function($http, $cookies, $location) {
    var service = {};
    
    var saveToken = function(user) {
    	$cookies.put('username', user.username);
    	$cookies.put('id', user.id);
    } 
    
	var BASE_URL = 'http://localhost:8080/RESTpicSure/rest/auth/';
    
    service.getToken = function() {
      // TODO : Return an object with id and email properties, 
      // the values are the values of the cookies
    	var user = {
    			'username' : $cookies.get('username'),
    			'id' : $cookies.get('id')
    	}
    	return user;
    }
    
    var removeToken = function() {
      // TODO : Remove both the id and email cookies
    	$cookies.remove('id');
    	$cookies.remove('username');
    }

    service.login = function(user) {
      // TODO : Use the auth/login route to authenticate the user
      // On success, use saveToken to store the users id/email
    	return $http({
			method : 'POST',
			url : BASE_URL + 'login',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : user
		}).then(function(res){
			saveToken(res.data);
		})
    }

    service.register = function(user) {
      // TODO : Use the auth/register route to create and authenticate the user
      // On success, use saveToken to store the users id/email
    	return $http({
			method : 'POST',
			url : BASE_URL + 'register',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : user
		}).then(function(res){
			saveToken(res.data);
			$location.path('/picSure');
		})
    }
    
    service.logout = function() {
      // TODO : Use the auth/logout route to remove the users session
      // On success, use removeToken to remove the id and email cookies
    	return $http({
			method : 'POST',
			url : BASE_URL + 'logout'
		}).then(function(res){
			removeToken(res.data);
		})
    }

    return service;
  })