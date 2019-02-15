"use strict";

angular
    .module("ProfileApp")
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/profilepage", {
                template: "<profilepage></profilepage>"
            })
            .when("/editprofile", {
                template: "<editprofile></editprofile>"
            })
            .when("/", {
                template: "<profilepage></profilepage>"
            });
    }])