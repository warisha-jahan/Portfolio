let selectedPlan = '';

// Get all the cards
const cards = document.querySelectorAll('.price-card');

// Add click event to each card
cards.forEach(card => {
    card.addEventListener('click', function () {
        // Remove 'selected' class from other cards
        cards.forEach(c => c.classList.remove('selected'));

        // Add 'selected' class to the clicked card
        this.classList.add('selected');

        // Store the ID of the selected plan
        selectedPlan = this.id;
    });
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    if (!selectedPlan) {
        alert('Please select a plan.');
        return;
    }

    // Append the selected plan to the form
    const formData = new FormData(this);
    formData.append('selected_plan', selectedPlan);

    // Send form data via EmailJS
    emailjs.sendForm('service_rurc8qc', 'template_fjsnu9d', this)
        .then(function () {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Failed to send message. Error: ' + JSON.stringify(error));
        });
});
