"use strict";

const editprofile = {
    template: `
    
    <form class="editform" ng-submit="$ctrl.submitForm($ctrl.update)">
    <h3>Use the form below to update your profile</h3>
    <p>Name</p>
    <input class="form_input" type="text" ng-model="$ctrl.update.name">
    <p>Contact</p>
    <input class="form_input" type="text" ng-model="$ctrl.update.contact">
    <p>Bio</p>
    <textarea type="text" rows="8" cols="24" ng-model="$ctrl.update.bio"></textarea>

    <button ng-click="$ctrl.goHome(update)">Update</button>
    </form>
    `,
    controller: [ "ProfileService", function(ProfileService) {
        const vm = this;
        vm.submitForm = function(update) {
            ProfileService.setUserProfile(update);
            ProfileService.goHome();
            console.log(update);
        }
    }]
}

angular
    .module("ProfileApp")
    .component("editprofile", editprofile);