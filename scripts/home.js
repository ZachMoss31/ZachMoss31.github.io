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
        if(button.id == "card-experience"){
            document.getElementById('card-experience').addEventListener('click', function() { BuildExperienceSection('experience'); });
        } else if (button.id == "card-education"){
            document.getElementById('card-education').addEventListener('click', function() { BuildExperienceSection('education'); });
        } else if (button.id == "card-cv") {
            document.getElementById('card-cv').addEventListener('click', function() { BuildExperienceSection('cv'); });
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

    // Trigger "Experience" button on page load
    const experienceButton = document.getElementById('card-experience');
    if (experienceButton) {
        experienceButton.click();
    }

    // Trigger "About" nav button on page load
    const homeNav = document.getElementById('nav-home');
    if (homeNav) {
        homeNav.click();
    }

});



// Default themes built into class
class Theme {
    constructor (background, hover, selected, selection, selectionText) {
        this.background = background;
        this.hover = hover;
        this.selected = selected;
        this.selection = selection;
        this.selectionText = selectionText;
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
function SetTheme () {
    var theme = new Theme('red', 'blue', 'green', 'yellow', 'purple');
    const root = document.documentElement;
    root.style.setProperty('--main-bg-color', theme.background);
    root.style.setProperty('--main-hover-color', theme.hover);
    root.style.setProperty('--main-selected-color', theme.selected);
    root.style.setProperty('--main-selection-color', theme.selection);
    root.style.setProperty('--main-selection-text-color', theme.selectionText)
}

//Home about section fill up my data with class 'Experience', class 'Education', and place those.
//Home needs a 'download' button at bottom and view as well, to show/hide my .pdf CV, and be able to download it if people choose.
//Home needs finishing touches to responsive seciton
//Portfolio page changes background color and selection themes etc when clicking modeling/vfx
//Portfolio page needs class 'Project' that has project info, name, date, description, icon, gif, and breakdown (for pop open with link for more 
//  intensive github based projects)

function BuildExperienceSection(sectionType = 'experience'){
    //Would love to dynamically add the folder path here with CSV...
    
    if(sectionType == 'experience'){

        var experienceArray = [];
        
        //Maya Model Section
        var mayaDescriptions = [
            "Prepared 3D models for printing and assembly alongside 3D modeling team",
            "Designed and created novel 3D models via Autodesk Maya through concept to completion",
            "Implemented procedural modeling methods using Python and PyQt frameworks"
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
        mainTitle.innerText = 'Professional Experience';
        mainCard.appendChild(mainTitle);
        experienceArray.forEach( experience => {
            var card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<h2>${experience.location}</h2><h3>${experience.title}</h3>`;
            experience.description.forEach(description => card.innerHTML += '<p>' + description + '</p>');
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
        mainTitle.innerText = 'Educational Experience';
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
        mainTitle.innerText = 'Resume';
        mainCard.appendChild(mainTitle);

        var pdfView = document.createElement('iframe');
        pdfView.classList.add('pdf');
        pdfView.src = "./data/Zach Moss_TechArtCV.pdf";
        mainCard.appendChild(pdfView);
    }
}