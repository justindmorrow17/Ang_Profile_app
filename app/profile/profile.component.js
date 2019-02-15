"use strict";

const profilepage = {
    template:`
    <main>
    <section class="container">
    <div class="profile_img"></div>
    <p class="name_title">{{ $ctrl.profileObject.name }}</p>
    <p class="contact">{{ $ctrl.profileObject.contact }}</p>
    <p class="bio">{{ $ctrl.profileObject.bio }}</p>
    <button ng-click="$ctrl.pullEditPage()">EDIT</button> 
    </section>
    </main>  
    `,
    controller: [ "ProfileService", function(ProfileService) {
        const vm = this;
        
        vm.$onInit = () => {
            vm.profile = ProfileService.getProfile() || "No Name Present";
        }
        vm.profileObject = ProfileService.getUserProfile();
        vm.pullEditPage = function() {
            ProfileService.editProfile();
        }

    }]
}


angular
    .module("ProfileApp")
    .component("profilepage", profilepage);


// // =========================================================================


//     "use strict";

// const profilepage = {
//     template:`
//     <div>Pic goes here</div>
//     <p>{{ $ctrl.profileObject.name }}</p>
//     <p>{{ $ctrl.profileObject.contact }}</p>
//     <p>{{ $ctrl.profileObject.bio }}</p>
//     <button ng-click="$ctrl.pullEditPage()">EDIT</button>    
//     `,
//     controller: [ "ProfileService", function(ProfileService) {
//         const vm = this;
//         // vm.$onInit = () => {
//         //     vm.profileObject = ProfileService.getUserProfile();
//         // }
        
//         vm.profileObject = ProfileService.getUserProfile();
//         vm.pullEditPage = function() {
//             ProfileService.editProfile();
//         }

//     }]
// }


// angular
//     .module("ProfileApp")
//     .component("profilepage", profilepage);