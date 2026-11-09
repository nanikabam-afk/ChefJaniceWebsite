/* =================================
   CHEF JANICE PARRILLA
   WEBSITE NAVIGATION
   ================================= */

// Return visitors to the homepage.
function goHome() {

    // Remove the current section from the URL.
    window.location.hash = "";

    // Return to the top of the homepage.
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Show a message when Events is selected.
const eventsLink = document.querySelector(".events-link");

if (eventsLink) {
    eventsLink.addEventListener("click", function () {
        console.log("Events section — Coming Soon!");
    });
}

// Keep navigation working when a section is selected.
window.addEventListener("hashchange", function () {

    const selectedSection = document.querySelector(
        window.location.hash
    );

    if (selectedSection) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});