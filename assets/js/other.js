const app = new PIXI.Application();
document.getElementById('animation').appendChild(app.view);
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;


app.stage.interactive = true;

const bg = PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630504998/bg1_w14ihb.png');
bg.anchor.set(0.5);

bg.x = app.screen.width / 2;
bg.y = app.screen.height / 2;

const filter = new PIXI.filters.ColorMatrixFilter();

const container = new PIXI.Container();
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

const bgFront = new PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630504998/bg1_w14ihb.png');
bgFront.anchor.set(0.5);
bgFront.width = app.screen.width;
bgFront.height = app.screen.height;

container.addChild(bgFront);

const moon = new PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630505661/moon_white_light_y3jwte.png');
moon.anchor.set(0.5);

moon.width = moon.width / 5;
moon.height = moon.height / 2;

moon.x = app.stage.width / 4;
moon.y = app.stage.height / 4.5;

const computer = new PIXI.Sprite.from('https://res.cloudinary.com/louiy9obu/image/upload/v1630501240/IMG_8387_2_ydskhm.png');
computer.anchor.set(0.5);

computer.width = computer.width / 4;
computer.height = computer.height / 2.8;

computer.x = app.stage.width / 2;
computer.y = app.stage.height / 2;

container.addChild(moon);

container.addChild(computer);

app.stage.addChild(container);

// app.stage.filters = [filter];

let count = 0;

app.ticker.add((delta) => {

    moon.scale.x = 0.63 + Math.sin(count) * 0.042;
    moon.scale.y = 0.84 + Math.cos(count) * 0.042;

    count += 0.1;

});
