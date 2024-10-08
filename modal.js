// Get the modal
var modal = document.getElementsByClassName("contactMe")[0];

// Get all the cards and the close button
var cards = document.querySelectorAll(".price-card");
var closeBtn = document.getElementsByClassName("close")[0];

// Loop through all the cards and add the click event to each
cards.forEach(function(card) {
    card.onclick = function() {
        modal.style.visibility = "visible";
        modal.style.opacity="1"
        modal.style.transform="scale(1.1)"
    }
});

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.visibility = "hidden";
     modal.style.opacity="0";
     modal.style.transform="scale(0.3)";
}

// When the user clicks outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.visibility = "hidden";
         modal.style.opacity="0"
         modal.style.transform="scale(0.3)";
    }
}
