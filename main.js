let canvas, img, seed, world, extracanvas;

let env;
// p5.disableFriendlyErrors = true;
// const windowWidth = 1200;
// 	const windowHeight = 600;\

let VWC;
let DSS;
let JBI;
let STE;
let BAM;
let IML;
let AMW;
let KUT;
let KPN;
let NYN;
let EJC;


// let input_val = createInput('');
let encendido;
let text1 = (`Geometric Organism Sediment

‘Can you sing with all the voices of the mountains? You can paint with all the colors of the wind!’
Geometric mutations are merging with unintended landscapes creating syntheses of existences beyond understanding. This sediment shows authenticity as mutations of sound.
`);
let text2 = (`Hallucinatory Specism Layer

’This bright millennium, On it's way, Let it come, Someday’
Emotional vertical fault lines indicate civilizational redirections. Fear. Treachery. Bloodlust! Wholistic ‘natural’ differences signify constructivist hallucinations.
`);
let text3 = (`Machine Flora & Fauna Sediment

’You'll see it's true’
Fusing non-organic logic & synthetic rainbow spectra creating radically pragmatic transhumanist visions: Imagine the unimaginable by seeing the invisible where uncanny scenarios grow flora/fauna/silicon compounds into quantum permafrost.`);
let text4 = (`Networked Organisms Layer

‘I won't give up, no, I won't give in till I reach the end, and then I'll start again’
Post-evolutionary multispecies histories & posthumanist narratives fusing GMO’s into new micro &/or macro superstructures.
`);
let text5 = (`Non-anthropocentric Sediment

‘There is no home like the one you’ve got, cause that home belongs to you’ 
Parts of an ecosystem too slow to adapt to the evolutionary speed & it is not the planet changing fast (climate, extinction..) but humans lack behavioral adaptation speed. `);
let text6 = (`Non-Endemic Alien Fusion Layer

‘The cold never bothered me anyway!’
We praise endemic compression, energy for digital plants, geoinsects, hybrid creatures. Organic life on earth proposes utopian future tech taxonomies: Network Infrstrctre, artfcl Satellites, ML/AI, IoT, Dizzney fusing with extraterrestrial ‘artefacts’.`);
let text7 = (`Highly Vulnerable Bacint Sediment

‘Destined to seek, destined to know’
Bacteria Intelligence create prototypical multitudes, utopian eternities & hotspots. Bacflora changes genetic makeups, environmental factors & bioinsecticide strains intersect with informational markers through diverse sediments.
`);
let text8 = (`Non-binary Trans-Pollination Layer

‘Que se podría hacer el amor por telepatía, Si te tuviera de frente la mente te la volaría’
Mutations & unintended non-binary artificial landscapes use software for intervarietal transpollination while productivity perceives ultra-rapid cycles: such high-activity layeres flourish & disappear within miliseconds, creating molecular stability.`);
let text9 = (`The Impossible Possibility Sediment

  ’Two years, and just like that, my head still takes me back, thought it was done, but I guess it's never really over’
  Contradictory anarchism breaks random fusion of non-organic logic and synthetic color spectra, primitively utilitarian: Imagine the unimaginable; refuse interpretation.
  `);
let text10 = (`Physics & Compression Layer

’You're the best thing I never knew I needed’
A layer interacting above 0,5% & beyond physical logic, taking extreme decisions while theories evolves & verified physics changes & displays agency through compression, the meaty eye of the needle.`);
let text11 = (`‘Homo Fusus’ hopepunksynesthesia Sediment

‘In the circle of life it's the wheel of fortune, it's the leap of faith, it's the band of hope’
Homo oeconomicus is an invention of calvinistic Incels since humans can individually adapt to any scenario, & humanity as a whole can blend senses, fuse & unite.`);


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  img = createImage(windowWidth, windowHeight);
  //img = createImage(windowWidth, windowHeight);

  img.loadPixels();
  on();
  seed = random(1200);
  world = generateWorld(randomInt());
  extracanvas = createGraphics(windowWidth, windowHeight);
  img = loadImage('assets/12.png'); // Load the image
  // img1 = loadImage('assets/12.png'); // Load the image
  encendido = true;


}

function preload() {

  myFont = loadFont('font/ArtifaktElementRegular.ttf');
  VWC = loadSound('assets/177.mp3');
  DSS = loadSound('assets/DSS.mp3');
  JBI = loadSound('assets/JBI.mp3');
  STE = loadSound('assets/STE.mp3');
  BAM = loadSound('assets/BAM.mp3');
  IML = loadSound('assets/IML.mp3');
  AMW = loadSound('assets/AMW.mp3');
  KUT = loadSound('assets/KUT.mp3');
  KPN = loadSound('assets/KPN.mp3');
  NYN = loadSound('assets/NYN.mp3');
  EJC = loadSound('assets/EJC.mp3');



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
  // for (x = 0; x <= 3; x++) {
  //   img.filter(BLUR, x);
  //   print(x);
  // }


  let c = get(mouseX, mouseY);
  let hueValue = floor(hue(c));
  let saturationValue = saturation(c);
  let lightnessValue = lightness(c);
  let X = mouseX;
  let Y = mouseY;

  if (!encendido) {
    // img.filter(BLUR);
    // img.filter(BLUR, 0);

    //1

    if (hueValue >= 1 && hueValue <= 30) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 510, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text1, X, Y, 500, 500);

      VWC.setVolume(0.3, 1);
      VWC.play();


    } else {
      VWC.setVolume(0, 1);
    }

    //2

    if (hueValue >= 31 && hueValue <= 60) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text2, X, Y, 500, 500);

      DSS.setVolume(0.3, 1);
      DSS.play();
    } else {
      DSS.setVolume(0, 1);
    }

    //3

    if (hueValue >= 61 && hueValue <= 90) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text3, X, Y, 500, 500);

      JBI.setVolume(0.3, 1);
      JBI.play();
    } else {
      JBI.setVolume(0, 1);
    }

    //4

    if (hueValue >= 91 && hueValue <= 120) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text4, X, Y, 500, 500);

      STE.setVolume(0.3, 1);
      STE.play();
    } else {
      STE.setVolume(0, 1);
    }

    //5

    if (hueValue >= 121 && hueValue <= 150) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text5, X, Y, 500, 500);

      BAM.setVolume(0.3, 1);
      BAM.play();
    } else {
      BAM.setVolume(0, 1);
    }

    //6

    if (hueValue >= 151 && hueValue <= 180) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text6, X, Y, 500, 500);

      IML.setVolume(0.3, 1);
      IML.play();
    } else {
      IML.setVolume(0, 1);
    }

    //7

    if (hueValue >= 181 && hueValue <= 210) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text7, X, Y, 500, 500);

      AMW.setVolume(0.3, 1);
      AMW.play();
    } else {
      AMW.setVolume(0, 1);
    }

    //8


    if (hueValue >= 211 && hueValue <= 240) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text8, X, Y, 500, 500);

      KUT.setVolume(0.3, 1);
      KUT.play();
    } else {
      KUT.setVolume(0, 1);
    }

    //9

    if (hueValue >= 241 && hueValue <= 270) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text9, X, Y, 500, 500);

      KPN.setVolume(0.3, 1);
      KPN.play();
    } else {
      KPN.setVolume(0, 1);
    }

    //10

    if (hueValue >= 271 && hueValue <= 300) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text10, X, Y, 500, 500);

      NYN.setVolume(0.3, 1);
      NYN.play();
    } else {
      NYN.setVolume(0, 1);
    }

    //11

    if (hueValue >= 301 && hueValue <= 360) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      noStroke();
      fill('rgba(117, 178, 168, 0.5)');
      rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(0);
      textFont(myFont);
      text(text11, X, Y, 500, 500);

      EJC.setVolume(0.3, 1);
      EJC.play();
    } else {
      EJC.setVolume(0, 1);
    }


  }








  print(hueValue);
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
  // VWC.play();
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
        col = [random(map(y, 0, worldHeight, 0, 255)), random(0, 100), random(0, 25), 255]
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