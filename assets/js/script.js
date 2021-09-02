var type = "WebGL";

if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

var
  Container = PIXI.Container,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
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

renderer.autoResize = true;

renderer.resize(stageWidth, stageHeight);

stage = new Container();

const background = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630504998/bg1_w14ihb.png');
background.width = stageWidth;
background.height = stageHeight;
stage.addChild(background);

var waves1, waves2, waves3, waves4, waves5, computer, sun, leaves;


// function buildWaves()
// {
//   waves1 = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630422570/wave_ffexp3.png');
//   waves2 = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630422570/wave_ffexp3.png');
//   waves3 = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630422570/wave_ffexp3.png');
//   waves4 = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630422570/wave_ffexp3.png');
//   waves5 = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630422570/wave_ffexp3.png');

//   waves1.anchor.set(1.5, 0.17);
//   waves2.anchor.set(1, 0.10);
//   waves3.anchor.set(0.5, 0.13);
//   waves4.anchor.set(-0.2, 0.10);
//   waves5.anchor.set(-0.7, 0.10);

//   waves1.x = stageWidth / 2;
//   waves1.y = stageHeight / 2;

//   waves2.x = stageWidth / 2;
//   waves2.y = stageHeight / 2;

//   waves3.x = stageWidth / 2;
//   waves3.y = stageHeight / 2;

//   waves4.x = stageWidth / 2;
//   waves4.y = stageHeight / 2;

//   waves5.x = stageWidth / 2;
//   waves5.y = stageHeight / 2;

//   stage.addChild(waves1, waves2, waves3, waves4, waves5);
// };

// function buildComputer()
// {
//   computer = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630501240/IMG_8387_2_ydskhm.png');

//   computer.width = computer.width / 2;
//   computer.height = computer.height / 2;

//   computer.anchor.set(0.5, 0.5);

//   computer.x = stageWidth / 2;
//   computer.y = stageHeight / 2;

//   stage.addChild(computer);
// };

function buildSun()
{
  sun = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630505661/moon_white_light_y3jwte.png');

  sun.width = sun.width / 1;
  sun.height = sun.height / 1;

  sun.anchor.set(0.5, 0.5);

  sun.x = stageWidth / 2;
  sun.y = stageHeight / 2;

  stage.addChild(sun);

  computer = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630501240/IMG_8387_2_ydskhm.png');

  computer.width = computer.width / 2;
  computer.height = computer.height / 2;

  computer.anchor.set(0.5, 0.5);

  computer.x = stageWidth / 2;
  computer.y = stageHeight / 2;

  stage.addChild(computer);
};

// function buildLeaves()
// {
//   leaves = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630422571/leaf-2_bwoyu8.png');

//   leaves.width = leaves.width / 1;
//   leaves.height = leaves.height / 1;

//   leaves.anchor.set(1.5, 0.27, 1, 2);

//   leaves.x = stageWidth / 2+40;
//   leaves.y = stageHeight / 2;

//   leaves.pivot.set(20,2);

//   stage.addChild(leaves);
// };

// function animateText() {

//   // first a bit of logic to determine whether the movement direction should be changed

//   // if the (text + text's width) is already at or just outside the stage's right border
//   // or if it's at or just outside the stage's left border, then ...
//   if (
//     ( text.x + text.width ) >= stageWidth ||
//     ( text.x <= 0 )
//   ) {

//     // reverse the direction by changing the text.vx value to negative
//     // multiply the existing value by -1
//     text.vx *= -1;

//   }

//   // now do the same check for the top and bottom stage borders
//   if (
//     ( text.y + text.height ) >= stageHeight ||
//     ( text.y <= 0 )
//   ) {

//     // reverse the direction by changing the text.vx value to negative
//     // multiply the existing value by -1
//     text.vy *= -1;

//   }

//   // add the text's movement speed to the text's horizontal position
//   text.x += text.vx;
//   // add the text's movement speed to the text's vertical position
//   text.y += text.vy;

// }

// function animateRectangle() {

//   // first a bit of logic to determine whether the movement direction should be changed

//   // if the (text + text's width) is already at or just outside the stage's right border
//   // or if it's at or just outside the stage's left border, then ...
//   if (
//     ( rectangle.x + rectangle.width ) >= stageWidth ||
//     ( rectangle.x <= 0 )
//   ) {

//     // reverse the direction by changing the text.vx value to negative
//     // multiply the existing value by -1
//     rectangle.vx *= -1;

//   }

//   // now do the same check for the top and bottom stage borders
//   if (
//     ( rectangle.y + rectangle.height ) >= stageHeight ||
//     ( rectangle.y <= 0 )
//   ) {

//     // reverse the direction by changing the text.vx value to negative
//     // multiply the existing value by -1
//     rectangle.vy *= -1;

//   }

//   // add the text's movement speed to the text's horizontal position
//   rectangle.x += rectangle.vx;
//   // add the text's movement speed to the text's vertical position
//   rectangle.y += rectangle.vy;

// }

let count = 0;

// function animateWaves() {

//   waves1.scale.x = 1 + Math.sin(count) * 0.04;
//   waves1.scale.y = 1 + Math.cos(count) * 0.04;

//   waves2.scale.x = 1 + Math.sin(count) * 0.04;
//   waves2.scale.y = 1 + Math.cos(count) * 0.04;

//   count += 0.1;

// }

// function animateComputer() {

//   computer.scale.x = 1 + Math.sin(count) * 0.04;
//   computer.scale.y = 1 + Math.cos(count) * 0.04;

//   count += 0.1;

// }

function animateSun() {

  sun.scale.x = 1 + Math.sin(count) * 0.04;
  sun.scale.y = 1 + Math.cos(count) * 0.04;

  count += 0.1;

}

// function animateBackground() {

//   background.scale.x = 1 + Math.sin(count) * 0.04;
//   background.scale.y = 1 + Math.cos(count) * 0.04;

//   count += 0.1;

// }

function runAnimationTest() {

  // Loop this function at a default rate of 60 frames per second
  requestAnimationFrame(runAnimationTest);

  // perform animation
  // animateText();
  // animateRectangle();
  // animateWaves();
  // animateComputer();
  animateSun();
  // animateBackground();

  // render the stage a.k.a. construct the stage graphically
  renderer.render(stage);

}

// buildTextObject();
// buildSquare();

// buildWaves();
// buildLeaves();
buildSun();
// buildComputer();

// computer = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630501240/IMG_8387_2_ydskhm.png');

// computer.width = computer.width / 2;
// computer.height = computer.height / 2;

// computer.anchor.set(0.5, 0.5);

// computer.x = stageWidth / 2;
// computer.y = stageHeight / 2;

// stage.addChild(computer);


runAnimationTest();
