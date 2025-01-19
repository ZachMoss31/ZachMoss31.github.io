// Class object for storing Portfolio elements (should create a pop-out element with 'x' exit button?)
class PortfolioObject {
    constructor(){
        this.id = ''; // The HTML id to add
        this.display = ''; //This is the main gif or image on the card, as well as on top of the pop up
        this.title = '';
        this.overview = '';
        this.demoVideo = '';
        this.tagSet = [];
        this.featureSet = []; //gif, <h3>, <p>, gif ... etc
        this.other = []; //further details or embeddings
    }
}

// ----------------------------------------------------------------------------------------------------- TO DO::
// This will be updated with a more data-driven approach later with .txt files to pull from 'for each directory in features', etc
portfolioObjectList = {};
function FillPortfolioObjects(){
    
    // Lost in Space
    space = new PortfolioObject();
    space.id = 'space';
    space.display = '../data/features/lost-in-space/LostSpace.png';
    space.title = 'Lost in Space';
    space.overview = 'Unity 2D project exploring 2D game asset creation from concept to digitalization';
    space.demoVideo = '../data/features/lost-in-space/LostInSpace.gif';
    space.tagSet.push('unity');
    space.featureSet.push('../data/features/lost-in-space/Cavern1.gif','../data/features/lost-in-space/Cavern2.gif','../data/features/lost-in-space/OnSurface2.gif');
    space.other.push('Test', 'Object','Data');
    portfolioObjectList[space.id] = space;

    // Puddle
    puddle = new PortfolioObject();
    puddle.id = 'puddle';
    puddle .display = '../data/features/puddle/Puddle.png';
    puddle .title = 'Puddle';
    puddle .overview = 'Unity 3D project exploring 3D asset utilization from 3rd party sources';
    puddle .demoVideo = '../data/features/puddle/Puddle.gif';
    puddle .tagSet.push('unity');
    puddle .featureSet.push('../data/features/puddle/PuddleEffect.gif', '../data/features/puddle/Sewers.gif');
    puddle .other.push('Test', 'Object','Data');
    portfolioObjectList[puddle.id] = puddle;

    // Bits of Shadow
    bits = new PortfolioObject();
    bits.id = 'bits';
    bits.display = '../data/features/bits-of-shadow/bits.png';
    bits.title = 'Bits of Shadow';
    bits.overview = 'Unity 3D project exploring 3D game engines and how they are used';
    bits.demoVideo = '../data/features/bits-of-shadow/MenuHD.gif';
    bits.tagSet.push('unity');
    bits.featureSet.push('../data/features/bits-of-shadow/Switch.gif','../data/features/bits-of-shadow/TestScene.gif', '../data/features/bits-of-shadow/Exploration1.gif');
    bits.other.push('Test', 'Object','Data');
    portfolioObjectList[bits.id] = bits;

    // 3D Model
    model = new PortfolioObject();
    model.id = 'model';
    model.display = '../data/features/modeling/Models.jpg';
    model.title = '3D Printing Weapons';
    model.overview = '3D models created in Autodesk Maya in preparation for later 3D printing';
    model.demoVideo = '../data/features/modeling/Models.gif';
    model.tagSet.push('model');
    model.featureSet.push('../data/features/modeling/AxeModel.gif','../data/features/modeling/Models.gif');
    model.other.push('Test', 'Object','Data');
    portfolioObjectList[model.id] = model;

    // Python GAN
    gan = new PortfolioObject();
    gan.id = 'gan';
    gan.display = '../data/features/gan/GAN Training.png';
    gan.title = 'Python - Machine Learning GAN';
    gan.overview = 'Python Generative Adversarial Network to generate images of handwritten digits';
    gan.demoVideo = '../data/features/gan/Class dist.jpg';
    gan.tagSet.push('python');
    gan.featureSet.push('../data/features/gan/GAN python.jpg','../data/features/gan/Class dist.jpg');
    gan.other.push('Test', 'Object','Data');
    portfolioObjectList[gan.id] = gan;
}

// Create the cards and fill them
function CreatePortfolioObjects(){
    
    // Use a portfolio object item here to fill a created card
    const displayArea = document.getElementById("display-area");

    Object.keys(portfolioObjectList).forEach(key => {
        // ! Would likely be better to create these class items on another page instead of creating on fly like this? Hide them?
        var portItem = portfolioObjectList[key];
        var card = document.createElement('div');
        card.id = portItem.id;
        card.classList.add('portfolio-object');
        displayArea.appendChild(card);

        card.innerHTML += `<h2>${portItem.title}</h2><p>${portItem.overview}</p>`;
        var demoImg = document.createElement('img');
        demoImg.classList.add('demo-image');
        demoImg.src = portItem.display;
        card.appendChild(demoImg);

        // Let's create a few tags for the object
        portItem.tagSet.forEach(element => {
            var tmpTag = document.createElement('div');
            tmpTag.classList.add('demo-tag');
            tmpTag.innerHTML += element;
            switch(element){
                case 'unity':
                    tmpTag.classList.add('unity');
                    break;
                case 'python':
                    tmpTag.classList.add('python');
                    break;
                case 'model':
                    tmpTag.classList.add('model');
                    break;
                default:
                    break;
            }
            card.appendChild(tmpTag);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    FillPortfolioObjects();
    CreatePortfolioObjects();
    
    function OpenModal(portObject){

        if(modalInnerContent.innerHTML.length > 0)
            modalInnerContent.innerHTML = '';
        
        if(portObject.id in portfolioObjectList){
            var portfolioObject = portfolioObjectList[portObject.id];
            modalInnerContent.innerHTML += `<h2>${portfolioObject.title}</h2><p>${portfolioObject.overview}</p>`;
            portfolioObject.featureSet.forEach( feature => {
                var demoVid = document.createElement('img');
                demoVid.classList.add('demo-vid');
                demoVid.src = feature;
                modalInnerContent.appendChild(demoVid);
            });

            modal.style.display = 'block';
            document.body.classList.add('body-no-scroll');
        }
    }

    function CloseModal(){
        modalInnerContent.innerHTML = '';
        modal.style.display = 'none';
        document.body.classList.remove('body-no-scroll');
    }

    // Grab initial objects
    var modal = document.getElementById("modal");
    var modalInnerContent = document.getElementById("modal-content-inner");
    var closeButton = document.getElementById("close");
    closeButton.addEventListener('click', () => CloseModal());

    // Close the Modal initially
    CloseModal();
    
    // Grab all portfolio objects and add events for them to fill modal
    var portObjects = document.querySelectorAll('.portfolio-object');
    portObjects.forEach(portObject => {
        portObject.addEventListener('click', () => OpenModal(portObject));
    });
});