
class Garden {
    constructor(canvas, width, height, spores) {
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.spores = spores;
        this.garden = this.generateGarden();
        this.competeArr = this.generateCompeteArr();
    }

    generateGarden() {
        let arr = [];

        for (let i = 0; i < this.width; i++) {
            let subArr = [];
            for (let j = 0; j < this.height; j++) {
                subArr.push(this.spores.empty);
            }
            arr.push(subArr);
        }

        return arr;
    }

    generateCompeteArr() {
        let arr = [];

        for (let i = 0; i < this.width; i++) {
            let subArr = [];
            for (let j = 0; j < this.height; j++) {
                subArr.push({});
            }
            arr.push(subArr);
        }

        return arr;
    }

    updatePixel(x, y, sporeName) {
        this.garden[x][y] = this.spores[sporeName];
    }

    reproduction(x, y, spore) {
        for (let i = 0; i < spore.growthPattern.length; i++) {
            let move = spore.growthPattern[i];
            let moveX = x + move[0];
            let moveY = y + move[1];
            if (moveX >= 0 && moveX < this.width &&
                moveY >= 0 && moveY < this.height) {
                let pixel = this.competeArr[x + move[0]][y + move[1]];
                pixel[spore.name] = spore;
            }
        }
    }

    processCompetition(x, y, collection, type) {
        let spores = Object.values(collection);
        let currSpore = null;
        let currScore = 0;
        for (let i = 0; i < spores.length; i++) {
            let roll = Math.random();
            let growthRate = spores[i].growthRate;
            let bodySize = spores[i].bodySize;
            if (growthRate > roll
                && bodySize - roll > currScore
                && spores[i].type === type) {
                currSpore = spores[i];
                currScore = bodySize - roll;
            }
        }
        if (currSpore) this.garden[x][y] = currSpore;
    }

    sortCompetition(x, y, collection) {
        if (this.garden[x][y].type === -1) {
            this.processCompetition(x, y, collection, 1);
        } else if (this.garden[x][y].type === 0) {
            this.processCompetition(x, y, collection, 2);
        } else {
            this.processCompetition(x, y, collection, 3);
        }
    }

    updateGarden() {
        for (let i = 0; i < this.garden.length; i++) {
            let subArr = this.garden[i];
            for (let j = 0; j < subArr.length; j++) {
                let spore = subArr[j];
                let roll = Math.random() < spore.lifeSpan;
                if (spore.type === 1 && !roll) {
                    this.garden[i][j] = this.spores.dead;
                } else if (spore.type === 0 && roll) {
                    null;
                } else if (spore.type > 0 && roll) {
                    this.reproduction(i, j, spore);
                } else {
                    this.garden[i][j] = this.spores.empty;
                }
            }
        }

        for (let i = 0; i < this.competeArr.length; i++) {
            let subArr = this.competeArr[i];
            for (let j = 0; j < subArr.length; j++) {
                let competeCollection = this.competeArr[i][j];
                this.sortCompetition(i, j, competeCollection);
                this.competeArr[i][j] = {};
            }
        }
    }

    renderGarden() {
        for (let i = 0; i < this.garden.length; i++) {
            let subArr = this.garden[i];
            for (let j = 0; j < subArr.length; j++) {
                this.canvas.fillStyle = subArr[j].color;
                this.canvas.fillRect(i * 2, j * 2, 2, 2);
            }
        }
    }
}

export default Garden;