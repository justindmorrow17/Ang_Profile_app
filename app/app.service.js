"use strict";

function ProfileService($location) {
    const self = this;
    self.profileObject = {
        name: "Wile E Coyote", 
        contact: "roadrunnersux@aol.com",
        bio: "canis maximus"
    }
    self.getUserProfile = function() {
        return self.profileObject;
    }

    self.setUserProfile = function(profileObject) {
        self.profileObject = profileObject;
        
    }

    self.editProfile = function() {
        $location.path("/editprofile");
    } 

    self.goHome = () => {
        $location.path("/profilepage");
    } 
}

angular
    .module("ProfileApp")
    .service("ProfileService", ProfileService);