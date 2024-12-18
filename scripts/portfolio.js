document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons
    const buttons = document.querySelectorAll('.button-card');

    // Add event listeners to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            setActiveButton(this);
            const category = this.id.replace('card-', '');
            generateCards(category);
        });
    });

    // Function to set active button styling
    function setActiveButton(clickedButton) {
        buttons.forEach(button => button.classList.remove('active')); // Remove active class
        clickedButton.classList.add('active'); // Add active class to clicked button
    }

    // Function to generate cards based on category
    function generateCards(category) {
        const displayArea = document.getElementById('display-area');
        const displayAreaName = document.getElementById('content-area-title');
        const displayAreaDescription = document.getElementById('content-area-description');

        // Clear previous content
        displayArea.innerHTML = '';
        displayAreaName.textContent = '';
        displayAreaDescription.textContent = '';

        // Define card data
        let cardTitles = [];
        if (category === 'model') {
            displayAreaName.textContent = '3D Model Projects';
            displayAreaDescription.textContent = 'A set of 3D model, sculpt, texture, and rigging projects.';
            cardTitles = ['Model Project 1', 'Model Project 2', 'Model Project 3', 'Model Project 4', 'Model Project 5'];
        } else if (category === 'vfx') {
            displayAreaName.textContent = 'VFX Projects';
            displayAreaDescription.textContent = 'A set of Houdini or other VFX projects.';
            cardTitles = ['VFX Project 1', 'VFX Project 2', 'VFX Project 3', 'VFX Project 4', 'VFX Project 5'];
        } else if (category === 'engine') {
            displayAreaName.textContent = 'Engine Specific Projects';
            displayAreaDescription.textContent = 'Unity, Unreal Engine, or other engine projects.';
            cardTitles = ['Engine Project 1', 'Engine Project 2', 'Engine Project 3', 'Engine Project 4', 'Engine Project 5'];
        } else if (category === 'ml') {
            displayAreaName.textContent = 'Machine Learning Projects';
            displayAreaDescription.textContent = 'Machine learning and deep learning generative-content projects.';
            cardTitles = ['ML Project 1', 'ML Project 2', 'ML Project 3', 'ML Project 4', 'ML Project 5'];
        } else if (category === 'misc') {
            displayAreaName.textContent = 'Misc Projects';
            displayAreaDescription.textContent = 'Miscellaneous projects with no direct category.';
            cardTitles = ['Misc Project 1', 'Misc Project 2', 'Misc Project 3', 'Misc Project 4', 'Misc Project 5'];
        }

        // Add cards dynamically
        cardTitles.forEach(title => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<h2>${title}</h2><p>Description of ${title}.</p>`;
            displayArea.appendChild(card);
        });
    }

    // Trigger "Model" button on page load
    const modelButton = document.getElementById('card-model');
    if (modelButton) {
        modelButton.click();
    }
});