# directives naming convention -> nameSpaceDirectiveName
# in templates use templates-heard

app = angular.module('templatingApp',[]);

# header template
app.directive 'msuHeader', ->	
	restrict : 'E', 
	transclude : true,
    # restrict directive to 
    # Element | attribute | class | comment | combination
	templateUrl : 'templates/prebuildHeader.html',
	replace: false			

# footer template
app.directive 'msuFooter', ->
	restrict : 'E',
	transclude : true,
	templateUrl : 'templates/prebuildFooter.html',
	replace: false

	
