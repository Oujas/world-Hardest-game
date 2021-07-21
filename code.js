var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rectangle=createSprite(0,200,100,100)
rectangle.shapeColor="lightBlue"
var rectangle2=createSprite(380,200,100,100)
rectangle2.shapeColor="yellow"
var player=createSprite(30,200,10,10)
player.shapeColor="green"

var border1=createSprite(200,150,400,3)
var border2=createSprite(200,250,400,3)

var ball1=createSprite(110,200,10,10)
ball1.shapeColor="red"
var ball2=createSprite(180,200,10,10)
ball2.shapeColor="red"
var ball3=createSprite(250,200,10,10)
ball3.shapeColor="red"
var ball4=createSprite(320,200,10,10)
ball4.shapeColor="red"

ball1.velocityY=+4
ball2.velocityY=-4
ball3.velocityY=+4
ball4.velocityY=-4
var life=0
function draw() {
background("white")
text("lives="+life,200,50)



ball1.bounceOff(border1)
ball1.bounceOff(border2)
ball2.bounceOff(border1)
ball2.bounceOff(border2)
ball3.bounceOff(border1)
ball3.bounceOff(border2)
ball4.bounceOff(border1)
ball4.bounceOff(border2)


if (player.isTouching(ball1)||player.isTouching(ball2)||player.isTouching(ball3)||player.isTouching(ball4)){
player.x=30
player.y=200
life=life+1
}




if (keyWentDown(RIGHT_ARROW)){
player.velocityX=+2
}
if (keyWentUp(RIGHT_ARROW)){
player.velocityX=0
}
  
if (keyWentDown(LEFT_ARROW)){
player.velocityX=-2
}
if (keyWentUp(LEFT_ARROW)){
player.velocityX=0
}
  
  
  
drawSprites() 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
