/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
/* Javascript to show and hide cookie banner using localstorage */
/* Shows the Cookie banner */
function showCookieBanner(){
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "block";
   }
   
   /* Hides the Cookie banner and saves the value to localstorage */
   function hideCookieBanner(){
    localStorage.setItem("cb_isCookieAccepted", "yes");
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "none";
   }
   
   /* Checks the localstorage and shows Cookie banner based on it. */
   function initializeCookieBanner(){
    let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
    if(isCookieAccepted === null)
    {
     localStorage.setItem("cb_isCookieAccepted", "no");
     showCookieBanner();
    }
    if(isCookieAccepted === "no"){
     showCookieBanner();
    }
   }
   document.addEventListener("DOMContentLoaded", function () {
    var cookieConsent = document.getElementById("cookieConsent");
    var acceptCookiesButton = document.getElementById("acceptCookies");

    // Check if the user has previously accepted cookies
    var cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
        // If cookies haven't been accepted, show the consent pop-up
        cookieConsent.style.display = "block";

        // Event listener for accepting cookies
        acceptCookiesButton.addEventListener("click", function () {
            // Set a flag in local storage to remember the user's choice
            localStorage.setItem("cookiesAccepted", "true");

            // Hide the consent pop-up
            cookieConsent.style.display = "none";
        });
    }
});

