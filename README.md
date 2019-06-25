# Slime-Garden
Slime Garden is a biology inspired simulation where spores of different types compete for growth space within a digital medium. It uses Javascript, HTML Canvas and CSS

[Live Demo](https://jrswanson.github.io/Slime-Garden/)

## Features
* A game window animated with Javascript and Canvas
* 9 different species of spores with different growth strategies
* A reset button so refreshes aren't needed
* Drag to draw functionality

## View Window
The game board was rendered using HTML Canvas and Vanilla Javascript.
![alt text](https://raw.githubusercontent.com/jrswanson/Slime-Garden/master/images/slime-garden-demo.png "Example Garden")

## Spores
In order to prevent poor performance, each spore refers to a static object in memory. Because each pixel had to be described with specific properities, dynamically updating objects would have caused massive time and space complexity problems. However, the spores needed to behave in a lifelike way. I solved this with probabality. Each spore has stats for growth rate, life span, toughness, etc. These scores, rather than being static incrementers, are compared against a "roll" of the Math.random JS method. Each turn, the spore's life span score must be higher than its roll to survive and reproduce. Similar types of selection take place in competitions for space. This format allowed me to have only 13 objects in memory with no mutative operations on re-render.
