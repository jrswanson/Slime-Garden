const empty = {
    growthRate: 0,
    growthPattern: [],
    bodySize: 0,
    lifeSpan: 0,
    type: -1,
    name: 'empty',
    color: '#1D1D1D'
};

const dead = {
    growthRate: 0,
    growthPattern: [],
    bodySize: 1,
    lifeSpan: 0.999,
    type: 0,
    name: 'dead',
    color: '#6f491d'
};

const rPlantSpore = {
    growthRate: 0.99,
    growthPattern: [
        [-1, 0],
        [-2, 2],
        [0, 1],
        [2, 2],
        [1, 0],
        [2, -2],
        [0, -1],
        [-2, -2]
    ],
    bodySize: 0.3,
    lifeSpan: 0.7,
    type: 1,
    name: 'rPlantSpore',
    color: '#c0ffa2'
};

const mPlantSpore = {
    growthRate: 0.3,
    growthPattern: [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1]
    ],
    bodySize: 0.5,
    lifeSpan: 0.9,
    type: 1,
    name: 'mPlantSpore',
    color: '#52FF00'
};

const kPlantSpore = {
    growthRate: 0.1,
    growthPattern: [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ],
    bodySize: 0.9,
    lifeSpan: 0.99,
    type: 1,
    name: 'kPlantSpore',
    color: '#2f9100'
};

const mFungusSpore = {
    growthRate: 0.1,
    growthPattern: [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1]
    ],
    bodySize: 0.5,
    lifeSpan: 0.9,
    type: 2,
    name: 'mFungusSpore',
    color: '#00fcff'
};

const mAnimalSpore = {
    growthRate: 0.7,
    growthPattern: [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1]
    ],
    bodySize: 0.5,
    lifeSpan: 0.9,
    type: 3,
    name: 'mAnimalSpore',
    color: '#ff2400'
};


export default {
    empty,
    dead,
    rPlantSpore,
    mPlantSpore,
    kPlantSpore,
    mFungusSpore,
    mAnimalSpore
};