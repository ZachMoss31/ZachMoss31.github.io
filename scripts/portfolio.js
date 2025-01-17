// Class object for storing Portfolio elements (should create a pop-out element with 'x' exit button?)
class PortfolioObject {
    constructor(){
        this.display = ''; //This is the main gif or image on the card, as well as on top of the pop up
        this.title = '';
        this.overview = '';
        this.demoVideo = '';
        this.tagSet = [];
        this.featureSet = []; //gif, <h3>, <p>, gif ... etc
        this.other = []; //further details or embeddings
    }
}

portfolioObjectList = [];
function FillPortfolioSection(){
    // Bits of Shadow
    bits = new PortfolioObject();
    bits.display = '../data/features/bits-of-shadow/bits.png';
    bits.title = 'Bits of Shadow';
    bits.overview = 'Unity 3D project exploring 3D game engines and how they are used';
    bits.demoVideo = '../data/features/bits-of-shadow/MenuHD.gif';
    bits.tagSet.push('unity');
    bits.featureSet.push('../data/features/bits-of-shadow/Switch.gif','../data/features/bits-of-shadow/TestScene.gif');
    bits.other.push('Test', 'Object','Data');
    portfolioObjectList.push(bits);

    // Puddle
    puddle = new PortfolioObject();
    puddle .display = '../data/features/puddle/Puddle.png';
    puddle .title = 'Puddle';
    puddle .overview = 'Unity 3D project exploring 3D asset utilization from 3rd party sources';
    puddle .demoVideo = '../data/features/bits-of-shadow/MenuHD.gif';
    puddle .tagSet.push('unity');
    puddle .featureSet.push('../data/features/bits-of-shadow/Switch.gif','../data/features/bits-of-shadow/TestScene.gif');
    puddle .other.push('Test', 'Object','Data');
    portfolioObjectList.push(puddle );

    // Lost in Space
    space = new PortfolioObject();
    space.display = '../data/features/lost-in-space/LostSpace.png';
    space.title = 'Lost in Space';
    space.overview = 'Unity 2D project exploring 2D game asset creation from concept to digitalization';
    space.demoVideo = '../data/features/bits-of-shadow/MenuHD.gif';
    space.tagSet.push('unity');
    space.featureSet.push('../data/features/bits-of-shadow/Switch.gif','../data/features/bits-of-shadow/TestScene.gif');
    space.other.push('Test', 'Object','Data');
    portfolioObjectList.push(space);

    // 3D Model
    model = new PortfolioObject();
    model.display = '../data/features/modeling/Models.jpg';
    model.title = '3D Printing Weapons';
    model.overview = '3D models created in Autodesk Maya in preparation for later 3D printing';
    model.demoVideo = '../data/features/modeling/Models.gif';
    model.tagSet.push('model');
    model.featureSet.push('../data/features/modeling/AxeModel.gif','../data/features/modeling/Models.gif');
    model.other.push('Test', 'Object','Data');
    portfolioObjectList.push(model);

    // Python GAN
    gan = new PortfolioObject();
    gan.display = '../data/features/gan/GAN Training.png';
    gan.title = 'Python - Machine Learning GAN';
    gan.overview = 'Python Generative Adversarial Network to generate images of handwritten digits';
    gan.demoVideo = '../data/features/gan/Class dist.jpg';
    gan.tagSet.push('python');
    gan.featureSet.push('../data/features/gan/GAN python.jpg','../data/features/gan/Class dist.jpg');
    gan.other.push('Test', 'Object','Data');
    portfolioObjectList.push(gan);
}

function BuildPortfolioObject(){
    
    //use a portfolio object item here to fill a created card
    const displayArea = document.getElementById("display-area");
    for (var i = 0; i < portfolioObjectList.length; i++){
        
        // ! Would likely be better to create these class items on another page instead of creating on fly like this?
        var card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('port');
        displayArea.appendChild(card);

        card.innerHTML += `<h2>${portfolioObjectList[i].title}</h2><p>${portfolioObjectList[i].overview}</p>`;
        var demoImg = document.createElement('img');
        demoImg.classList.add('demo-image');
        demoImg.src = portfolioObjectList[i].display;
        card.appendChild(demoImg);

        // Let's create a few tags for the object
        portfolioObjectList[i].tagSet.forEach(element => {
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
    }
}

document.addEventListener('DOMContentLoaded', () => {
    FillPortfolioSection();
    BuildPortfolioObject();
});