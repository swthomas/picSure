angular.module('listerModule')
	.factory('listerService', function($http, $filter, authService, $location, $rootScope){
		var service = {};
		
		var BASE_URL = 'http://localhost:8080/RESTpicSure/rest/'
			
		var checkLogin = function() {
			if (!authService.getToken().id) {
				$location.path('/');
			}
		}
		
		service.listerResIndex = function() {
			checkLogin();
			return $http({
				method : 'GET',
				url : BASE_URL + 'store/' + authService.getToken().id + '/reservation'
			}).then(function(res) {
				return res;
			})
		}
		
		service.showRes = function(id) {
			checkLogin();
			return $http({
				method : 'GET',
				url : BASE_URL + 'reservation/' + id
			})
		}
		
		service.inventoryIndex = function(id) {
			checkLogin();
			return $http({
				method : 'GET',
				url : BASE_URL + 'store/' +id + '/inventory/'
			}).then(function(res) {
				console.log(res);
				return res;
			})
		}
		
		service.storeInventoryByUserId = function(){
			checkLogin();
			return $http({
				method :'GET',
				url : BASE_URL +'user/' + authService.getToken().id  +'/store/'
			})
		}
		
		service.destroyStoreAccount = function() {
			checkLogin();
			return $http({
				method : 'DELETE',
				url : BASE_URL + 'store/' + authService.getToken().id
			}).then(function(res){
				authService.logout();
			})
		}
		
		service.destroyListerAccount = function(){
			checkLogin();
			return $http({
				method : 'Delete',
				url : BASE_URL + 'user/' + authService.getToken().id
			}).then(function(res){
				authSercive.logout();
			})
		}
		
		service.updateLister = function (user) {
			checkLogin()
			return $http({
				method : 'PUT',
				url : BASE_URL + 'user/' + authService.getToken().id,
				headers : {
					'Content-Type' : 'application/json'
				},
				data : user
			})
		}
		
		service.getListerData = function() {
			checkLogin();
			return $http({
				method : 'GET',
				url: BASE_URL +'user/' + authService.getToken().id
			}). then(function(res){
				return res;
			})
		}
		
		service.getStoreData = function() {
			checkLogin();
			return $http ({
				method : 'GET',
				url : BASE_URL + 'store/' + authService.getToken().id
			}). then(function(res){
				return res;
			})	
		}
		
		service.updateStoreData = function(store){
			console.log(store)
			console.log("IN SERVICE")
			checkLogin();
			return $http ({
				method : 'PUT',
				url: BASE_URL + 'store/' + authService.getToken().id,
				headers : {
					'Content-Type' : 'application/json'
				},
				data : store
			})
		}
		
		service.destroyInventoryItem = function(id) {
			checkLogin();
			return $http({
				method : 'DELETE',
				url : BASE_URL + 'equipment/' + id
			}).then(function(res){
				return res;
			})
		}
		
		return service;
	})