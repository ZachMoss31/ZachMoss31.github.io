//Shared classes and methods had by the site.
// Default themes built into class (needs card and text controls)
class Theme {
    constructor (background, hover, selected, selection, selectionText, mainDiv='rgb(254,248,243)') {
        this.background = background;
        this.hover = hover;
        this.selected = selected;
        this.selection = selection;
        this.selectionText = selectionText;
        this.mainDiv = mainDiv;
    }
}

// Class for storing an experience object, which will later fill from .csv and load images
class Experience {
    constructor (title, location, descriptionArray, expStart, expEnd) {
        this.title = title;
        this.location = location;
        this.description = descriptionArray;
        this.expStart = expStart;
        this.expEnd = expEnd;
    }
}

// Function to set theme *eventually given a passed theme of choice
function SetTheme (theme) {
    const root = document.documentElement;
    root.style.setProperty('--main-bg-color', theme.background);
    root.style.setProperty('--main-hover-color', theme.hover);
    root.style.setProperty('--main-selected-color', theme.selected);
    root.style.setProperty('--main-selection-color', theme.selection);
    root.style.setProperty('--main-selection-text-color', theme.selectionText);
    root.style.setProperty('--main-div-color', theme.mainDiv);
}

// Function to build proper content in the home page
function BuildExperienceSection(sectionType = 'experience'){
    //Would love to dynamically add the folder path here with CSV...
    if(sectionType == 'experience'){

        var experienceArray = [];
        
        //Brevium Section
        var breviumDescriptions = [
            "Install proprietary SQL integration software onto client machines",
            "Diagnosed and correct database errors via query troubleshooting",
            "Provide solutions for improved performance within cloud database environment"
        ]
        var breviumExp = new Experience('Database Engineer Intern', 'Brevium Corp.', breviumDescriptions, 'January 2025', 'Present');
        experienceArray.push(breviumExp);

        //Maya Model Section
        var mayaDescriptions = [
            "Prepared 3D models for printing and assembly alongside 3D modeling team",
            "Designed and created novel 3D models via Autodesk Maya through concept to completion",
            "Aided model team success through sharing Blender and Maya expertise"
        ]
        var mayaExp = new Experience('Maya 3D Modeler', 'Utah Valley University', mayaDescriptions, 'November 2024', 'Present');
        experienceArray.push(mayaExp);

        //Ameritech Section
        var amerDescriptions = [
            "Spearheaded .NET Rest API development between multiple cloud-based SQL databases",
            "Modernized existing legacy applications as part of .NET team using agile software approach ",
            "Integrated .NET desktop applications with Salesforce features via .NET Core"
        ]
        var amerExp = new Experience('C# .NET Core Desktop Application Developer', 'Ameritech Data Solutions', amerDescriptions, 'February 2024', 'April 2024');
        experienceArray.push(amerExp);
        
        
        //Build Section By Adding Cards
        const mainCard = document.getElementById('main-card');
        mainCard.innerHTML = "";
        var mainTitle = document.createElement('h2');
        mainTitle.id = 'main-card-title';
        mainTitle.innerText = '';
        mainCard.appendChild(mainTitle);
        experienceArray.forEach( experience => {
            var card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<h2>${experience.title}</h2><h4>${experience.location}</h4>`;
            var descriptionList = document.createElement('div');
            descriptionList.classList.add('descriptions');
            descriptionList.innerHTML += '<ul>';
            experience.description.forEach(description => descriptionList.innerHTML += '<li>' + description + '</li>');
            descriptionList.innerHTML += '</ul>';
            card.appendChild(descriptionList);
            card.innerHTML += `<h4>${experience.expStart} - ${experience.expEnd}</h4>`;
            mainCard.appendChild(card);
        });
    } else if (sectionType == 'education') {
        var experienceArray = [];
        
        //Master's Section
        var masterDesc = []
        var masterExp = new Experience('Master of Computer Science - 3D Graphics', 'Utah Valley University', masterDesc, 'August 2024', 'Present');
        experienceArray.push(masterExp);

        //Bachelor's Section
        var bachDesc = [
            'Magna Cum Laude'
        ]
        var bachExp = new Experience('Bachelor of Computer Science - Game Development', 'Weber State University', bachDesc, 'August 2021', 'August 2022');
        experienceArray.push(bachExp);
        
        //A.A.Sc. Section
        var aasDesc = [
            'Honors'
        ]
        var aasExp = new Experience('Associate of Applied Science - Computer Science', 'Weber State University', aasDesc, 'May 2020', 'August 2021');
        experienceArray.push(aasExp);

        //A.Sc. Section
        var asDesc = []
        var asExp = new Experience('Associate of Science - University Studies', 'Utah Valley University', asDesc, 'January 2014', 'April 2020');
        experienceArray.push(asExp);

        //Build Section By Adding Cards
        const mainCard = document.getElementById('main-card');
        mainCard.innerHTML = "";
        var mainTitle = document.createElement('h2');
        mainTitle.id = 'main-card-title';
        mainTitle.innerText = '';
        mainCard.appendChild(mainTitle);
        experienceArray.forEach( experience => {
            var card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<h2>${experience.location}</h2><h3>${experience.title}</h3>`;
            experience.description.forEach(description => card.innerHTML += '<p>' + description + '</p>');
            card.innerHTML += `<h4>${experience.expStart} - ${experience.expEnd}</h4>`;
            mainCard.appendChild(card);
        });
    } else if (sectionType == 'cv'){

        //Build Section By Adding Cards
        const mainCard = document.getElementById('main-card');
        mainCard.innerHTML = "";
        var mainTitle = document.createElement('h2');
        mainTitle.id = 'main-card-title';
        mainTitle.innerText = '';
        mainCard.appendChild(mainTitle);

        var pdfView = document.createElement('iframe');
        pdfView.classList.add('pdf');
        pdfView.src = "./data/Zach Moss_TechArtCV.pdf";
        mainCard.appendChild(pdfView);
    }
}

// Function to generate cards based on category. This is used by sorting buttons that are currently on the back burner for later.
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
        card.classList.add('port');
        card.innerHTML = `<h2>${title}</h2><p>Description of ${title}.</p>`;
        displayArea.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    
    // Set of Differing Themes
    var themeList = [];
    
    // Default [0]
    var themeA = new Theme('rgb(56, 71, 67)', 'rgb(239, 197, 8)', 'rgb(226, 64, 14)', 'rgb(239, 197, 8)', 'rgb(255, 255, 255)');
    themeList.push(themeA);
    
    // Valentine's [1]
    var themeB = new Theme('rgb(224, 101, 122)', 'rgb(239, 8, 93)', 'rgb(75, 0, 0)', 'rgb(239, 8, 93)', 'rgb(255, 255, 255)');
    themeList.push(themeB);
    
    // St. Patty [2]
    var themeC = new Theme('rgb(5, 78, 21)', 'rgb(131, 239, 8)', 'rgb(212, 239, 8)', 'rgb(212, 239, 8)', 'rgb(255, 255, 255)');
    themeList.push(themeC);
    
    // 4th of July [3]
    var themeD = new Theme('rgb(2, 30, 70)', 'rgb(8, 231, 239)', 'rgb(239, 8, 8)', 'rgb(8, 231, 239)', 'rgb(255, 255, 255)');
    themeList.push(themeD);
    
    // Halloween [4]
    var themeE = new Theme('rgb(177, 8, 239)', 'rgb(177, 8, 239)', 'rgb(0, 0, 0)', 'rgb(177, 8, 239)', 'rgb(255, 255, 255)', 'rgb(255, 94, 0)');
    themeList.push(themeE);
    
    //Christmas [5]
    var themeF = new Theme('rgb(20, 70, 1)', 'rgb(255, 255, 255)', 'rgb(11, 11, 11)', 'rgb(4, 120, 0)', 'rgb(255, 255, 255)', 'rgb(226, 6, 6)');
    themeList.push(themeF);
    
    // Set Default Theme
    SetTheme(themeList[0]);

    // Select all buttons, nav buttons
    const navButtons = document.querySelectorAll('nav ul li a');
    const buttons = document.querySelectorAll('.button-card');

    // Function to set active nav button styling
    function setActiveNav(clickedNav) {
        navButtons.forEach(button => button.classList.remove('active')); // Remove active class
        clickedNav.classList.add('active'); // Add active class to clicked button
    }

        // Function to set active button styling
    function setActiveButton(clickedButton) {
        buttons.forEach(button => button.classList.remove('active'));
        clickedButton.classList.add('active');
    }

    // Add event listeners to each nav button
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            setActiveNav(this);
        });
    });

    // Add event listeners to each button...
        // This includes unique BuildExperienceSection button to avoid looping in another script
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            setActiveButton(this);
        });
        switch(button.id) {
            case 'card-experience':
                button.addEventListener('click', function() { BuildExperienceSection('experience'); });
                break;
            case 'card-education':
                button.addEventListener('click', function() { BuildExperienceSection('education'); });
                break;
            case 'card-cv':
                button.addEventListener('click', function() { BuildExperienceSection('cv'); });
                break;
            // These generate card methods are for the commented out section on portfolio.html
            case 'card-model':
                //button.addEventListener('click', function() { generateCards('model'); });
                break;
            case 'card-vfx':
                //button.addEventListener('click', function() { generateCards('vfx'); });
                break;
            case 'card-engine':
                //button.addEventListener('click', function() { generateCards('engine'); });
                break;
            case 'card-ml':
                //button.addEventListener('click', function() { generateCards('ml'); });
                break;
            case 'card-misc':
                //button.addEventListener('click', function() { generateCards('misc'); });
                break;
            case 'card-submit':
                button.addEventListener('mouseout', function () { button.classList.remove('active'); });
                break;
            default:
                break;
        }
    });

    //Set the active button based on the loaded page
    const pathname = window.location.pathname;
    const filename = pathname.split('/').pop();

    var activeButton = '';
    var activeNav = '';
    switch(filename){
        case 'index.html':
            activeButton = 'card-experience';
            activeNav = 'nav-home';
            break;
        case 'portfolio.html':
            activeButton = 'card-model';
            activeNav = 'nav-portfolio';
            break;
        case 'contact.html':
            activeNav = 'nav-contact';
            break;
        default:
    }

    // Trigger "Active" button on page load
    var activeButtonTarget = document.getElementById(activeButton);
    if (activeButtonTarget) {
        activeButtonTarget.click();
    }

    // Trigger "Active" nav button on page load
    const activeNavTarget = document.getElementById(activeNav);
    if (activeNavTarget) {
        activeNavTarget.click();
    }

});