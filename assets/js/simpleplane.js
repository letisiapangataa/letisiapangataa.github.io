const app = new PIXI.Application({ transparent: true });

// document.body.appendChild(app.view);
var myView = document.getElementById('animation').appendChild(app.view);
var renderer = PIXI.autoDetectRenderer(myView); 

const loader = PIXI.Loader.shared;

loader
.add('background', 'https://res.cloudinary.com/louiy9obu/image/upload/v1630504998/bg1_w14ihb.png')
.add('moon', 'https://res.cloudinary.com/louiy9obu/image/upload/v1630505661/moon_white_light_y3jwte.png')
.add('computer', 'https://res.cloudinary.com/louiy9obu/image/upload/v1630501240/IMG_8387_2_ydskhm.png')
.load(setup)
.load(animateMoon)

//Listen for loading events
loader.onProgress.add((loader) => {
  console.log(loader.progress);
}); 

var background, moon, computer;

function setup() {
  const background = new PIXI.Sprite(
    loader.resources["background"].texture
  );
  background.width = app.screen.width;
  background.height = app.screen.height;

  background.anchor.set(0.5);

  background.x = app.screen.width / 2;
  background.y = app.screen.height / 2;

  const moon = new PIXI.Sprite(
    loader.resources["moon"].texture
  );
  moon.width = moon.width / 1.6;
  moon.height = moon.height / 1.2;

  moon.anchor.set(0.5, 0.5);

  moon.x = app.screen.width / 2;
  moon.y = app.screen.height / 2;


  const computer = new PIXI.Sprite(
    loader.resources["computer"].texture
  );
  computer.width = computer.width / 3.3;
  computer.height = computer.height / 2.4;

  computer.anchor.set(0.5, 0.5);

  computer.x = app.screen.width / 2;
  computer.y = app.screen.height / 2;

  app.stage.addChild(background);
  app.stage.addChild(moon);
  app.stage.addChild(computer);
}

let count = 0;

function animateMoon() {

  moon.scale.x = 1 + Math.sin(count) * 0.04;
  moon.scale.y = 1 + Math.cos(count) * 0.04;

  count += 0.1;

}

app.ticker.add(() => {
  animateMoon();
  //   // just for fun, let's rotate mr rabbit a little
  // computer.rotation += 0.1;
});