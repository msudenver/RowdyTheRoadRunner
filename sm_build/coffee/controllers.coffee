"use strict"

list = {} ; list.all = [] ; regEx = /X/i ; list.total = 0;
list.types = ["All", "Master", 'Major', 'Minor', 'Concentration', 'Certification', 'Licensure']
majors = [] ; minors = [] ; licensures= [] ; certifications= [] ;  concentrations = []  ; masters = []
vis = {}; vis.show = false;

degreeFinder = angular.module "degreeFinder", []

degreeFinder.controller "ProgramController", ($scope, $http) ->

    lookup = (item, category) ->

        found = $.inArray item, list.all
        if  found   >= 0 then category.push(list.all[found])
        else if  found  < 0 then category.splice(found, 1)


    ($http({method: 'GET', cache: true , url:'../dataset/csv/set3.csv'}))
        .success (data) ->

            list.all = d3.csv.parse(data)

            $scope.list = list.all

            for i in list.all
                if i.major.match(regEx)
                    lookup i, majors
                else if i.minor.match(regEx)
                    lookup i, minors
                else if i.licensure.match(regEx)
                    lookup i, licensures
                else if i.certification.match(regEx)
                    lookup i, certifications
                else if i.concentration.match(regEx)
                    lookup i, concentrations
                else if i.masters.match(regEx)
                    lookup i, masters

    $scope.types = list.types

    $scope.$watch "list.length", (newVal)->
        if newVal is 234
            list.total = 225
        else
            list.total = newVal

        $scope.total = list.total
    

    $scope.$watch "search", (newVal)->
        if newVal and newVal.match(/[a-z]|[0-9]/gi) then $scope.list = list.all

    

    $scope.sortByType = ($event, type) ->
        # log "sort by type clicked "
        value_checked = $event.target.id

        # change selection text <em> value
        $scope.changeSelectionText(value_checked)

        # reset selection before radio buttons input
        $scope.list = list.all

        # $scope.$watch("list", (newVal, oldVal)->
        #   console.log(newVal)
        #   $scope.list = (oldVal)
        # )

        if value_checked

            switch type
                when "Major"
                    $scope.list = majors
                when "Minor"
                    $scope.list = minors
                when "Concentration"
                    $scope.list = concentrations
                when "Licensure"
                    $scope.list = licensures
                when "Certification"
                    $scope.list = certifications
                when "Master"
                    $scope.list = masters
                when "All"
                    $scope.list = list.all

        else
            $scope.list = list.all


    $scope.changeSelectionText = (selection) ->
        em = $('#changeSelectionType')
        console.log(selection)
        if selection is "All" then em.text("degree options")
        else em.text(selection + "s")

    $scope.altTag = (name, program, type) ->
        # log name
        if program
            if program.match(regEx)
                return "#{name} #{type} offered"
        else
            return "#{name} #{type} not offered"




















