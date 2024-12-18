document.addEventListener('DOMContentLoaded', () => {
    // Set Default Theme
    //SetTheme();

    // Select all buttons, nav buttons
    const buttons = document.querySelectorAll('.button-card');
    const navButtons = document.querySelectorAll('nav ul li a');

    // Add event listeners to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            setActiveButton(this);
        });
        if(button.id == "card-submit"){
            button.addEventListener('click', function() { SubmitMessage(); });
        }
    });

    // Function to set active button styling
    function setActiveButton(clickedButton) {
        buttons.forEach(button => button.classList.remove('active')); // Remove active class
        clickedButton.classList.add('active'); // Add active class to clicked button
    }

    // Add event listeners to each nav button
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            setActiveNav(this);
        });
    });

    // Function to set active nav button styling
    function setActiveNav(clickedNav) {
        navButtons.forEach(button => button.classList.remove('active')); // Remove active class
        clickedNav.classList.add('active'); // Add active class to clicked button
    }

    // Trigger "Contact" nav button on page load
    const contactNav = document.getElementById('nav-contact');
    if (contactNav) {
        contactNav.click();
    }

});

function SubmitMessage() {
    
}