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

stage.interactive = false;

loader
.add('background', 'https://res.cloudinary.com/louiy9obu/image/upload/v1630504998/bg1_w14ihb.png')
.add('moon', 'https://res.cloudinary.com/louiy9obu/image/upload/v1630505661/moon_white_light_y3jwte.png')
.add('computer', 'https://res.cloudinary.com/louiy9obu/image/upload/v1630501240/IMG_8387_2_ydskhm.png')
.load(backgroundChange)
.load(buildMoon)
.load(animateMoon)
.load(buildComputer)
.load(scaleToWindow)
// .load(runAnimationTest)

//Listen for loading events
loader.onProgress.add((loader) => {
  console.log(loader.progress);
}); 

function backgroundChange() {
  const background = new PIXI.Sprite(
    loader.resources["background"].texture
  );
  background.width = stageWidth;
  background.height = stageHeight;
  stage.addChild(background);
}

var computer, moon;

function buildComputer()
{
  const computer = new PIXI.Sprite(
    loader.resources["computer"].texture
  );

  computer.width = computer.width / 2;
  computer.height = computer.height / 2;

  computer.anchor.set(0.5, 0.5);

  computer.x = stageWidth / 2;
  computer.y = stageHeight / 2;

  stage.addChild(computer);
};

function buildMoon()
{
  const moon = new PIXI.Sprite(
    loader.resources["moon"].texture
  );

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
  // animateMoon();

  // render the stage a.k.a. construct the stage graphically
  renderer.render(stage);

}

// hack fit size css
document.body.onresize = () => { scaleToWindow() };
function scaleToWindow() {
    console.log('XD');
    const canvas = stage.view;
    let scaleX, scaleY, scale, center;
    scaleX = window.innerWidth / canvas.offsetWidth;
    scaleY = window.innerHeight / canvas.offsetHeight;
    scale = Math.min(scaleX, scaleY);
    canvas.style.transformOrigin = "0 0";
    canvas.style.transform = "scale(" + scale + ")";

    if (canvas.offsetWidth > canvas.offsetHeight) {
        if (canvas.offsetWidth * scale < window.innerWidth) { 
            center = "horizontally" 
        } else {
            center = "vertically"
        };
    } else {
        if (canvas.offsetHeight * scale < window.innerHeight) { center = "vertically" }
        else { center = "horizontally"; };
    }

    let margin;
    if (center === "horizontally") {
        margin = (window.innerWidth - canvas.offsetWidth * scale) / 2;
        canvas.style .marginTop = 0 + "px";canvas.style .marginBottom = 0 + "px";
        canvas.style .marginLeft = margin + "px";canvas.style .marginRight = margin + "px";
    }
    if (center === "vertically") {
        margin = (window.innerHeight - canvas.offsetHeight * scale) / 2;
        canvas.style .marginTop  = margin + "px";canvas.style .marginBottom = margin + "px";
        canvas.style .marginLeft = 0      + "px";canvas.style .marginRight  = 0      + "px";
    }
    canvas.style.paddingLeft = 0 + "px";canvas.style.paddingRight  = 0 + "px";
    canvas.style.paddingTop  = 0 + "px";canvas.style.paddingBottom = 0 + "px";
    canvas.style.display = "-webkit-inline-box";
    return scale;
}


backgroundChange();
buildMoon();
buildComputer();


runAnimationTest();