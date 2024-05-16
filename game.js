var scene;

function start(){
    scene = $('a-scene')[0];
    console.log('Hello World');
}

AFRAME.registerComponent("start-game",{
    init: start
})