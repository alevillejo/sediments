let canvas, img, seed, world, extracanvas;
let mySound;
let env;
// p5.disableFriendlyErrors = true;
// const windowWidth = 1200;
// 	const windowHeight = 600;\

let t1 = 0.1; // attack time in seconds
let l1 = 0.7; // attack level 0.0 to 1.0
let t2 = 0.3; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0

// let input_val = createInput('');
let encendido;
let text1 = ('Geometric Organism Sediment Can you sing with all the voices of the mountains? You can paint with all the colors of the wind!Geometric mutations are merging with unintended landscapes creating syntheses of existences beyond understanding. This sediment shows authenticity as mutations of sound.');

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  img = createImage(windowWidth, windowHeight);
  //img = createImage(windowWidth, windowHeight);

  img.loadPixels();
  on();
  seed = random(1200);
  world = generateWorld(randomInt());
  extracanvas = createGraphics(windowWidth, windowHeight);
  img = loadImage('assets/11.png'); // Load the image
  encendido = true;
}

function preload() {
  mySound = loadSound('assets/177.mp3');
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  encendido = !encendido;
}

function draw() {
  background(255);
  image(img, 0, 0, img.width, img.height);
  let c = get(mouseX, mouseY);
  let hueValue = floor(hue(c));
  let saturationValue = saturation(c);
  let lightnessValue = lightness(c);
  let X = mouseX;
  let Y = mouseY;

  if (!encendido) {
    if (hueValue >= 1 && hueValue < 71) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      fill(0, 0, 0);
      // rect(mouseX, mouseY, 500, 500);
      textSize(20);
      fill(0);
      text(text1, X, Y, 500, 500);

      mySound.setVolume(0.3, 1);
      mySound.play();


    } else {
      mySound.setVolume(0, 1);
      // mySound.stop();

    }
    // mySound.setSpeed(map(mouseX, 0, width, 0, 1));
    if (hueValue <= 71 && hueValue >= 100) {
      fill(0);
      textSize(20);
      fill(0);
      text(text1, mouseX, mouseY);
    }

    if (hueValue < 100 && hueValue > 300) {
      fill(0);
      // rect(mouseX, mouseY, 200, 550);
      textSize(20);
      fill(0);
      text('Era: 2000 millon - other info goes here', mouseX, mouseY);
    }
  }
  print(Y);
  // image(extracanvas, 0, 0, windowWidth, windowHeight);

  // if (frameCount === 15) {
  //   noStroke();
  //   fill(255);
  //   textSize(64);
  //   textAlign(LEFT, TOP)
  //   text("Generating World...", 0, 0)
  //   seed = prompt("World Seed? (Leave blank for random)");
  //   seed = hash(seed.toLowerCase()) || randomInt();
  // } else if (frameCount > 15) {
  //   noSmooth();
  //   let world;
  //   if (seed === 1731) { // seed "69"
  //     world = generateWorld(randomInt());
  //   } else {
  //     world = generateWorld(seed);
  //   }
  //   drawWorld(world);

  // seed = random(1200);
  // world = generateWorld(seed);
  // drawWorld(world);
  // img.updatePixels();

  // if (mouseIsPressed) {
  // noStroke();
  // fill(255, 255, 255);
  // rect(mouseX, mouseY, 200, 50);


  // deltaTime = 0;
  // mySound.play();
  // filter(BLUR, 3);





  // }
  // else if (hueValue >= 350) {
  //   fill(0);
  //   // rect(mouseX, mouseY, 200, 550);
  //   textSize(20);
  //   fill(255, 255, 255);
  //   text('Era: 3000 millon -  info goes here', mouseX, mouseY);
  // }
  // if (seed !== 1731) { // seed "69"
  //   noLoop()

  // }
  // if (mouseIsPressed) {
  //   Loop()
  //   extracanvas.noStroke();
  //   extracanvas.fill(0);
  //   extracanvas.rect(mouseX, mouseY, 200, 50);
  // }

  // 
  // }
  // print(encendido);  
}

function mousePressed() {

}

function generateWorld(seed) {

  const worldSeed = seed;
  const surfaceAmplitude = 10;
  const surfaceChunkiness = 50;
  const surfaceScale = 0.02;
  const distortionAmplitude = 80;
  const distortionScale = 0.001;
  const layerMix = 6;
  const faultRate = 85;
  const faultSize = 80;
  const faultMix = 4;
  const edgeDepth = 12;
  const edgeSharpness = 14;
  const depositHorizontalApproximation = 100;
  const depositFlatness = 3.5;
  const depositSharpness = 0.5;
  const depositMinAmplitude = 10;
  const depositMaxAmplitude = 30;
  const depositMinSize = 240;
  const depositMaxSize = 360;
  rPush(worldSeed * 6934)
  nSet(worldSeed * 2853)
  let world = new Uint8Array(windowWidth * windowHeight);
  let layers = windowHeight + faultSize + distortionAmplitude * 10;
  let layerSamples = [...Array(depositHorizontalApproximation)].map(function () {
    return Array(layers).fill(0)
  });
  let layerSampleFills = Array(depositHorizontalApproximation).fill(0);
  let minSampleFill = 10,
    deposit = 0;
  let minSampleIndex, depositType, depositSize, depositAmplitude, depositX, depositY, depositHeight;
  while (minSampleFill < layers) {
    minSampleIndex = 0;
    minSampleFill = Infinity;
    for (let x = 0; x < depositHorizontalApproximation; x++) {
      if (minSampleFill > layerSampleFills[x]) {
        minSampleFill = layerSampleFills[x]
        minSampleIndex = x;
      }
    }
    depositType = floor(random(1, 255 + pointNines));
    depositSize = floor(random(depositMinSize / windowWidth * depositHorizontalApproximation, depositMaxSize / 500 * depositHorizontalApproximation));
    depositAmplitude = random(depositMinAmplitude, depositMaxAmplitude);
    for (let x = -depositSize; x <= depositSize; x++) {
      depositX = minSampleIndex + x;
      if (depositX >= 0 && depositX < depositHorizontalApproximation) {
        depositHeight = max(0, (minSampleFill + ceil((pow(depositSize - abs(x), 1 / depositFlatness) - depositSharpness) * depositAmplitude)) - layerSampleFills[depositX]);
        for (let d = 0; d < depositHeight; d++) {
          depositY = layers - 1 - layerSampleFills[depositX];
          if (depositY >= 0) {
            layerSamples[depositX][depositY] = depositType;
            layerSampleFills[depositX]++;
          }
        }
      }
    }
    deposit++;
    if (deposit > 5000) {
      throw "endless deposit step";
    }
  }
  let layerDepth, sx, sy, sfx, sfy, sRegion, region, layer, regionED, block, surfaceDepression;
  for (let x = 0; x < windowWidth; x++) {
    for (let y = 0; y < windowHeight; y++) {
      sx = x + noise(5365 + x / 5, 6219 + y / 5) * layerMix - (layerMix / 2);
      sy = y + noise(2648 + x / 5, 3216 + y / 5) * layerMix;
      sx *= distortionScale;
      layerDepth = sy + noise(sx / 5) * distortionAmplitude;
      layerDepth += noise(sx) * (distortionAmplitude * 9 * noise(sx * 2.5));
      sfx = x + noise(4925 + x / 5, 9461 + y / 5) * faultMix - (faultMix / 2);
      sfy = y + noise(7645 + x / 5, 3216 + y / 5) * faultMix;
      sRegion = sfx + sfy * (noise(x / 1000, sfy / 2000) - 0.5);
      region = noise(sRegion / 20000) * faultRate;
      rSet(floor(region));
      layerDepth += round(random(-0.5, faultSize - 0.5 + pointNines));
      layer = layerSamples[floor(x / windowWidth * depositHorizontalApproximation)][floor(layerDepth)];
      block = layer;
      regionED = 1 - abs(mod(region + 0.5, 1) - 0.5) * 2;
      surfaceDepression = noise(x * surfaceScale) * surfaceAmplitude + noise(x * surfaceScale / 2) * surfaceAmplitude * 10;
      surfaceDepression += noise(x * surfaceScale * 5, y * surfaceScale * 5) * surfaceChunkiness;
      if (surfaceDepression + pow(regionED, edgeSharpness) * edgeDepth > y) {
        block = 0;
      }
      world[x + y * windowWidth] = block;
    }
  }
  rPop();
  nSet(0);
  return world;
}

function drawWorld(world) {
  // let windowWidth = 1200;
  // let windowHeight = 600;
  let col;
  rPush(0);
  for (let x = 0; x < windowWidth; x++) {
    for (let y = 0; y < windowHeight; y++) {
      if (world[x + y * windowWidth] === 0) {
        col = [0, 0, 123, 0];
      } else {
        rSet(world[x + y * windowWidth])
        col = [random(0, 255), random(0, 255), random(0, 255), 255]
        // col = [random(map(y, 0, windowHeight, 0, 255)), random(0, 100), random(0, 25), 255]
      }
      img.pixels[(x + y * windowWidth) * 4] = floor(col[0]);
      img.pixels[(x + y * windowWidth) * 4 + 1] = floor(col[1]);
      img.pixels[(x + y * windowWidth) * 4 + 2] = floor(col[2]);
      img.pixels[(x + y * windowWidth) * 4 + 3] = floor(col[3]);
    }
  }
  rPop();
}