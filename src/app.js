import Garden from './garden/garden';
import spores from './spore/spores';

let canvasElement = document.getElementById('canvas');
let canvas = canvasElement.getContext('2d');

let garden = new Garden(canvas, 300, 200, spores);
let selectedSpore = 'mPlantSpore';

canvasElement.addEventListener('click', e => {
    let x = [Math.floor(e.offsetX / 2)];
    let y = [Math.floor(e.offsetY / 2)];
    garden.updatePixel(x, y, selectedSpore);
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

const selectMFungus = () => {
    selectedSpore = 'mFungusSpore';
};

window.selectMFungus = selectMFungus;

const selectMAnimal = () => {
    selectedSpore = 'mAnimalSpore';
};

window.selectMAnimal = selectMAnimal;

let animate = () => {
    garden.updateGarden();
    garden.renderGarden();

    requestAnimationFrame(animate);
};

animate();