// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Your code here will run after the DOM is fully loaded.

    function enterMetaverse() {
        var statusParagraph = document.getElementById("status");

        if (statusParagraph) {
            statusParagraph.textContent = "Entered Metaverse";

            var h1Element = document.createElement("h1");
            h1Element.textContent = statusParagraph.textContent;

            statusParagraph.parentNode.replaceChild(h1Element, statusParagraph);
        } else {
            console.error("Element with id 'status' not found.");
        }
    }

    // Expose the enterMetaverse function globally for testing or future modifications
    window.enterMetaverse = enterMetaverse;
});
