'use strict';
//****************************************************** */
/*                       1- PERFIL                       */
//****************************************************** */
// notification-list
document.addEventListener("DOMContentLoaded", function () {
    const notificationBox = document.querySelector(".modal-notification");

    document.getElementById("header-notification").addEventListener("click", function () {
        if (notificationBox.classList.contains("hidden")) {
            notificationBox.classList.remove("hidden");
        } else {
            notificationBox.classList.add("hidden");
        }
    });
    document.getElementById("header-notification-2").addEventListener("click", function () {
        if (notificationBox.classList.contains("hidden")) {
            notificationBox.classList.remove("hidden");
        } else {
            notificationBox.classList.add("hidden");
        }
    });
});
// message-list
document.addEventListener("DOMContentLoaded", function () {
    const messageBox = document.querySelector(".modal-message");

    document.getElementById("header-message").addEventListener("click", function () {
        if (messageBox.classList.contains("hidden")) {
            messageBox.classList.remove("hidden");
        } else {
            messageBox.classList.add("hidden");
        }
    });
    document.getElementById("header-message-2").addEventListener("click", function () {
        if (messageBox.classList.contains("hidden")) {
            messageBox.classList.remove("hidden");
        } else {
            messageBox.classList.add("hidden");
        }
    });
});
// profile-list
document.addEventListener("DOMContentLoaded", function () {
    const profileBox = document.querySelector(".modal-profile");

    document.getElementById("header-profile").addEventListener("click", function () {
        if (profileBox.classList.contains("hidden")) {
            profileBox.classList.remove("hidden");
        } else {
            profileBox.classList.add("hidden");
        }
    });
    document.getElementById("header-profile-2").addEventListener("click", function () {
        if (profileBox.classList.contains("hidden")) {
            profileBox.classList.remove("hidden");
        } else {
            profileBox.classList.add("hidden");
        }
    });
});
// search-list //Open modal header
document.addEventListener("DOMContentLoaded", function () {
    const firstNav = document.querySelector(".header-center");
    const secondNav = document.querySelector(".nav-search-container");

    document.getElementById("header-search-2").addEventListener("click", function () {
        if (secondNav.classList.contains("hidden")) {
            secondNav.classList.remove("hidden");
            firstNav.classList.add("hidden");
        }
        
    });
});
// search-list //Close modal header
document.addEventListener("DOMContentLoaded", function () {
    const firstNav = document.querySelector(".header-center");
    const secondNav = document.querySelector(".nav-search-container");

    document.getElementById("close-header-search-2").addEventListener("click", function () {
        if (firstNav.classList.contains("hidden")) {
            firstNav.classList.remove("hidden");
            secondNav.classList.add("hidden");
        }
        
    });
});
//****************************************************** */
/*                    2- CANDIDATURAS                    */
//****************************************************** */