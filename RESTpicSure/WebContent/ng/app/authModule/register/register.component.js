angular.module('authModule').component('register', {
	templateUrl : 'ng/app/authModule/register/register.component.html',
	controller : function(authService){
		var vm = this;

		vm.register = function(user) {
			return authService.register(user);
		}

	},
	controllerAs : 'vm'
		
})