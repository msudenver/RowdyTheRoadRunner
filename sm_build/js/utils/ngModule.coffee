# directives naming convention -> nameSpaceDirectiveName
# in templates use templates-heard

appModule = angular.module('app',[]);
appModule.directive 'template', ->
	{
		restrict : 'E', 
        # restrict directive to 
        # Element | attribute | class | comment | combination
		templateUrl : 'prebuildHeader.html',
		replace: false			
	}
