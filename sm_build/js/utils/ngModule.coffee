# directives naming convention -> nameSpaceDirectiveName
# in templates use templates-heard

appModule = angular.module('app',[]);
angular.module 'test', ->
	{
		restrict : 'E', # restrict directive to Element | attribute | class | comment | combination
		template : '<div>TEST HELLO WORLD</div>',
		replate: true			
	}


