import Garden from './garden/garden';
import spores from './spore/spores';
import drawLine from './util/line-drawing';

let canvasElement = document.getElementById('canvas');
let canvas = canvasElement.getContext('2d');

let garden = new Garden(canvas, 300, 200, spores);
let selectedSpore = 'mPlantSpore';
let draw = false;
let lastPoint = null;

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



let animate = () => {
    garden.updateGarden();
    garden.renderGarden();

    requestAnimationFrame(animate);
};

animate();