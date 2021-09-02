var type = "WebGL";

if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

var
  Container = PIXI.Container,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  loader = PIXI.Loader.shared,
  resources = PIXI.Loader.resources,
  Sprite = PIXI.Sprite,
  Graphics = PIXI.Graphics,
  Texture = PIXI.Texture,
  Text = PIXI.Text,
  collisionDetection = new Bump(); 

var
  stage,
  containerElement = $("#animation"),
  containerWidth, containerHeight,
  stageWidth, stageHeight,
  renderer = autoDetectRenderer(0, 0);

containerElement.html(renderer.view);

containerWidth = containerElement.innerWidth();
containerHeight = containerElement.innerHeight();

stageWidth = containerWidth;
stageHeight = containerHeight;

var stageContainer = {
  x: 0,
  y: 0,
  height: stageHeight,
  width: stageWidth
};

renderer.autoDensity = true;

renderer.resize(stageWidth, stageHeight);

stage = new Container();

const background = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630504998/bg1_w14ihb.png');
background.width = stageWidth;
background.height = stageHeight;
stage.addChild(background);

var computer, moon;

function buildComputer()
{
  computer = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630501240/IMG_8387_2_ydskhm.png');

  computer.width = computer.width / 2;
  computer.height = computer.height / 2;

  computer.anchor.set(0.5, 0.5);

  computer.x = stageWidth / 2;
  computer.y = stageHeight / 2;

  stage.addChild(computer);
};

function buildMoon()
{
  moon = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630505661/moon_white_light_y3jwte.png');

  moon.width = moon.width / 1;
  moon.height = moon.height / 1;

  moon.anchor.set(0.5, 0.5);

  moon.x = stageWidth / 2;
  moon.y = stageHeight / 2;

  stage.addChild(moon);
};

let count = 0;

function animateMoon() {

  moon.scale.x = 1 + Math.sin(count) * 0.04;
  moon.scale.y = 1 + Math.cos(count) * 0.04;

  count += 0.1;

}

function runAnimationTest() {

  // Loop this function at a default rate of 60 frames per second
  requestAnimationFrame(runAnimationTest);

  // perform animation
  animateMoon();

  // render the stage a.k.a. construct the stage graphically
  renderer.render(stage);

}

buildMoon();
buildComputer();


runAnimationTest();