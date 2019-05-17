const empty = {
    growthRate: 0,
    growthPattern: [],
    toughness: 0,
    lifeSpan: 0,
    type: -1,
    name: 'empty',
    color: '#1D1D1D'
};

const rDead = {
    growthRate: 0,
    growthPattern: [],
    toughness: 1,
    lifeSpan: 0.5,
    type: 0,
    name: 'rDead',
    color: '#68543c'
};

const mDead = {
    growthRate: 0,
    growthPattern: [],
    toughness: 1,
    lifeSpan: 0.99,
    type: 0,
    name: 'mDead',
    color: '#6f491d'
};

const kDead = {
    growthRate: 0,
    growthPattern: [],
    toughness: 1,
    lifeSpan: 0.999,
    type: 0,
    name: 'kDead',
    color: '#442d12'
};

const rPlantSpore = {
    growthRate: 0.99,
    growthPattern: [
        [-3, 0],
        [-2, 2],
        [0, 3],
        [2, 2],
        [3, 0],
        [2, -2],
        [0, -3],
        [-2, -2]
    ],
    toughness: 0.3,
    lifeSpan: 0.5,
    type: 1,
    name: 'rPlantSpore',
    color: '#b7ff6a'
};

const mPlantSpore = {
    growthRate: 0.2,
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
    toughness: 0.5,
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
    toughness: 0.9,
    lifeSpan: 0.99,
    type: 1,
    name: 'kPlantSpore',
    color: '#038400'
};

const rFungusSpore = {
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
    toughness: 0.3,
    lifeSpan: 0.7,
    type: 2,
    name: 'rFungusSpore',
    color: '#b3ffe5'
};

const mFungusSpore = {
    growthRate: 0.2,
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
    toughness: 0.5,
    lifeSpan: 0.9,
    type: 2,
    name: 'mFungusSpore',
    color: '#00fcff'
};

const kFungusSpore = {
    growthRate: 0.1,
    growthPattern: [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ],
    toughness: 0.9,
    lifeSpan: 0.99,
    type: 2,
    name: 'kFungusSpore',
    color: '#0083c7'
};

const rAnimalSpore = {
    growthRate: 0.9,
    growthPattern: [
        [-3, 0],
        [-2, 2],
        [0, 3],
        [2, 2],
        [3, 0],
        [2, -2],
        [0, -3],
        [-2, -2]
    ],
    toughness: 0.3,
    lifeSpan: 0.85,
    type: 3,
    name: 'rAnimalSpore',
    color: '#ff7c66'
};

const mAnimalSpore = {
    growthRate: 0.7,
    growthPattern: [
        [-2, 0],
        [-1, 1],
        [0, 2],
        [1, 1],
        [2, 0],
        [1, -1],
        [0, -2],
        [-1, -1]
    ],
    toughness: 0.5,
    lifeSpan: 0.9,
    type: 3,
    name: 'mAnimalSpore',
    color: '#ff2400'
};

const kAnimalSpore = {
    growthRate: 0.5,
    growthPattern: [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ],
    toughness: 0.9,
    lifeSpan: 0.99,
    type: 3,
    name: 'kAnimalSpore',
    color: '#9d1600'
};


export default {
    empty,
    rDead,
    mDead,
    kDead,
    rPlantSpore,
    mPlantSpore,
    kPlantSpore,
    rFungusSpore,
    mFungusSpore,
    kFungusSpore,
    rAnimalSpore,
    mAnimalSpore,
    kAnimalSpore
};