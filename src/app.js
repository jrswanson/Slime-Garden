import Garden from './garden/garden';
import spores from './spore/spores';

let canvasElement = document.getElementById('canvas');
let canvas = canvasElement.getContext('2d');

let garden = new Garden(canvas, 300, 200, spores);
let selectedSpore = 'mPlantSpore';
let draw = false;

canvasElement.addEventListener('mousedown', e => {
    draw = true;

    let x = [Math.floor(e.offsetX / 2)];
    let y = [Math.floor(e.offsetY / 2)];
    garden.updatePixel(x, y, selectedSpore);
});

canvasElement.addEventListener('mousemove', e => {
    if (draw) {
        let x = [Math.floor(e.offsetX / 2)];
        let y = [Math.floor(e.offsetY / 2)];
        garden.updatePixel(x, y, selectedSpore);
    }
});

canvasElement.addEventListener('mouseup', e => {
    draw = false;
});

canvasElement.addEventListener('mouseleave', e => {
    draw = false;
});



const clearStart = () => {
    let screen = document.getElementById('start-screen');
    screen.id = 'hidden';
};

window.clearStart = clearStart;

const clearHelp = () => {
    let screen = document.getElementById('help-dialog');
    if (screen) {
        screen.id = 'hidden';
    }
};

window.clearHelp = clearHelp;



const selectRPlant = () => {
    selectedSpore = 'rPlantSpore';
};

window.selectRPlant = selectRPlant;

const selectMPlant = () => {
    selectedSpore = 'mPlantSpore';
};

window.selectMPlant = selectMPlant;

const selectKPlant = () => {
    selectedSpore = 'kPlantSpore';
};

window.selectKPlant = selectKPlant;



const selectRFungus = () => {
    selectedSpore = 'rFungusSpore';
};

window.selectRFungus = selectRFungus;

const selectMFungus = () => {
    selectedSpore = 'mFungusSpore';
};

window.selectMFungus = selectMFungus;

const selectKFungus = () => {
    selectedSpore = 'kFungusSpore';
};

window.selectKFungus = selectKFungus;



const selectRAnimal = () => {
    selectedSpore = 'rAnimalSpore';
};

window.selectRAnimal = selectRAnimal;

const selectMAnimal = () => {
    selectedSpore = 'mAnimalSpore';
};

window.selectMAnimal = selectMAnimal;

const selectKAnimal = () => {
    selectedSpore = 'kAnimalSpore';
};

window.selectKAnimal = selectKAnimal;



const resetGarden = () => {
    garden = new Garden(canvas, 300, 200, spores);
};

window.resetGarden = resetGarden;

const demoGarden = () => {
    garden = new Garden(canvas, 300, 200, spores);
    garden.updatePixel(100, 50, 'mPlantSpore');
    garden.updatePixel(101, 50, 'kFungusSpore');
    garden.updatePixel(102, 50, 'mPlantSpore');
    garden.updatePixel(100, 51, 'mPlantSpore');
    garden.updatePixel(101, 51, 'kFungusSpore');
    garden.updatePixel(102, 51, 'mPlantSpore');
    garden.updatePixel(100, 52, 'mPlantSpore');
    garden.updatePixel(101, 52, 'kFungusSpore');
    garden.updatePixel(102, 52, 'mPlantSpore');

    garden.updatePixel(220, 130, 'kPlantSpore');
    garden.updatePixel(221, 130, 'kPlantSpore');
    garden.updatePixel(222, 130, 'kPlantSpore');
    garden.updatePixel(220, 131, 'kPlantSpore');
    garden.updatePixel(221, 131, 'kPlantSpore');
    garden.updatePixel(222, 131, 'kPlantSpore');
    garden.updatePixel(220, 132, 'kPlantSpore');
    garden.updatePixel(221, 132, 'kPlantSpore');
    garden.updatePixel(222, 132, 'kPlantSpore');


    garden.updatePixel(30, 170, 'kAnimalSpore');
    garden.updatePixel(31, 170, 'rPlantSpore');
    garden.updatePixel(32, 170, 'rPlantSpore');
    garden.updatePixel(33, 170, 'kAnimalSpore');
    garden.updatePixel(30, 171, 'rPlantSpore');
    garden.updatePixel(31, 171, 'rPlantSpore');
    garden.updatePixel(32, 171, 'rPlantSpore');
    garden.updatePixel(33, 171, 'rPlantSpore');
    garden.updatePixel(30, 172, 'rPlantSpore');
    garden.updatePixel(31, 172, 'rPlantSpore');
    garden.updatePixel(32, 172, 'rPlantSpore');
    garden.updatePixel(33, 172, 'rPlantSpore');
    garden.updatePixel(30, 173, 'kAnimalSpore');
    garden.updatePixel(31, 173, 'rPlantSpore');
    garden.updatePixel(32, 173, 'rPlantSpore');
    garden.updatePixel(33, 173, 'kAnimalSpore');
};

window.demoGarden = demoGarden;


let animate = () => {
    garden.updateGarden();
    garden.renderGarden();

    requestAnimationFrame(animate);
};

animate();