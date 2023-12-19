//your JS code here. If required.
function enterMetaverse() {
    // Get the p element with the id "status"
    var statusParagraph = document.getElementById("status");

    // Change the text content of the p element
    statusParagraph.textContent = "Entered Metaverse";

    // Create a new h1 element
    var h1Element = document.createElement("h1");

    // Set the text content of the h1 element
    h1Element.textContent = statusParagraph.textContent;

    // Replace the existing p element with the new h1 element
    statusParagraph.parentNode.replaceChild(h1Element, statusParagraph);
}
