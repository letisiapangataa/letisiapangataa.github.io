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

const background = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630422544/background_jyteaq.png');
background.width = stageWidth;
background.height = stageHeight;
stage.addChild(background);

var text, rectangle, Waves1, Waves2;

function buildTextObject() {

  // build some text
  text = new Text(
    "Letisia's Technology Portfolio", { // "Hello World!" will be the initial text value
      fontFamily: "Helvetica",
      fontSize: 50,
      fill: "white"
    }
  );

  // set the text position roughly at the centre of the stage
  text.position.set(stageWidth / 2, stageHeight / 2);

  // set the text movement speed
  text.vx = 5;
  text.vy = 5;

  // add the text to the stage so it becomes visible once rendered below
  stage.addChild(text);

}

function buildSquare()
{
  rectangle = new Graphics();
  rectangle.lineStyle(4, 0xFF3300, 1);
  rectangle.beginFill(0x66CCFF);
  rectangle.drawRect(0, 0, 64, 64);
  rectangle.endFill();
  rectangle.x = 170;
  rectangle.y = 170;
  rectangle.vx = 7;
  rectangle.vy = 7;
  stage.addChild(rectangle);
};

function buildWaves()
{
  Waves1 = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630422570/wave_ffexp3.png');
  Waves2 = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630422570/wave_ffexp3.png');
  Waves3 = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630422570/wave_ffexp3.png');


  Waves1.anchor.set(1.5, 0.17);
  Waves2.anchor.set(1, 0.16);
  Waves3.anchor.set(0.8, 0.17);

  Waves1.x = stageWidth / 2;
  Waves1.y = stageHeight / 2;

  Waves2.x = stageWidth / 2;
  Waves2.y = stageHeight / 2;

  Waves3.x = stageWidth / 2;
  Waves3.y = stageHeight / 2;

  stage.addChild(Waves1, Waves2, Waves3);
};

function animateText() {

  // first a bit of logic to determine whether the movement direction should be changed

  // if the (text + text's width) is already at or just outside the stage's right border
  // or if it's at or just outside the stage's left border, then ...
  if (
    ( text.x + text.width ) >= stageWidth ||
    ( text.x <= 0 )
  ) {

    // reverse the direction by changing the text.vx value to negative
    // multiply the existing value by -1
    text.vx *= -1;

  }

  // now do the same check for the top and bottom stage borders
  if (
    ( text.y + text.height ) >= stageHeight ||
    ( text.y <= 0 )
  ) {

    // reverse the direction by changing the text.vx value to negative
    // multiply the existing value by -1
    text.vy *= -1;

  }

  // add the text's movement speed to the text's horizontal position
  text.x += text.vx;
  // add the text's movement speed to the text's vertical position
  text.y += text.vy;

}

function animateRectangle() {

  // first a bit of logic to determine whether the movement direction should be changed

  // if the (text + text's width) is already at or just outside the stage's right border
  // or if it's at or just outside the stage's left border, then ...
  if (
    ( rectangle.x + rectangle.width ) >= stageWidth ||
    ( rectangle.x <= 0 )
  ) {

    // reverse the direction by changing the text.vx value to negative
    // multiply the existing value by -1
    rectangle.vx *= -1;

  }

  // now do the same check for the top and bottom stage borders
  if (
    ( rectangle.y + rectangle.height ) >= stageHeight ||
    ( rectangle.y <= 0 )
  ) {

    // reverse the direction by changing the text.vx value to negative
    // multiply the existing value by -1
    rectangle.vy *= -1;

  }

  // add the text's movement speed to the text's horizontal position
  rectangle.x += rectangle.vx;
  // add the text's movement speed to the text's vertical position
  rectangle.y += rectangle.vy;

}

let count = 0;

function animateWaves() {

  Waves1.scale.x = 1 + Math.sin(count) * 0.04;
  Waves1.scale.y = 1 + Math.cos(count) * 0.04;

  Waves2.scale.x = 1 + Math.sin(count) * 0.04;
  Waves2.scale.y = 1 + Math.cos(count) * 0.04;

  count += 0.1;

}

function runAnimationTest() {

  // Loop this function at a default rate of 60 frames per second
  requestAnimationFrame(runAnimationTest);

  // perform animation
  animateText();
  animateRectangle();
  animateWaves();

  // render the stage a.k.a. construct the stage graphically
  renderer.render(stage);

}

function resize() {
  if (window.innerWidth / window.innerHeight >= ratio) {
      var w = window.innerHeight * ratio;
      var h = window.innerHeight;
  } else {
      var w = window.innerWidth;
      var h = window.innerWidth / ratio;
  }
  renderer.view.style.width = w + 'px';
  renderer.view.style.height = h + 'px';
}
window.onresize = function(event) {
  resize();
};

buildTextObject();
buildSquare();
buildWaves();
runAnimationTest();
