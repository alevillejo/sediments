let canvas, img, seed, world, extracanvas;
var renderer;
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
let text1 = (`--- GEOMETRIC ORGANISM 


‘CAN YOU SING WITH ALL THE VOICES OF THE MOUNTAINS? YOU CAN PAINT WITH ALL THE COLORS OF THE WIND!’

GEOMETRIC MUTATIONS ARE MERGING WITH UNINTENDED LANDSCAPES CREATING SYNTHESES OF EXISTENCES BEYOND UNDERSTANDING. THIS SEDIMENT SHOWS AUTHENTICITY AS MUTATIONS OF SOUND.
`);
let text2 = (`--- HALLUCINATORY SPECISM 


’THIS BRIGHT MILLENNIUM, ON IT'S WAY, LET IT COME, SOMEDAY’

EMOTIONAL VERTICAL FAULT LINES INDICATE CIVILIZATIONAL REDIRECTIONS. FEAR. TREACHERY. BLOODLUST! WHOLISTIC ‘NATURAL’ DIFFERENCES SIGNIFY CONSTRUCTIVIST HALLUCINATIONS.
`);
let text3 = (`--- MACHINE FLORA & FAUNA


’YOU'LL SEE IT'S TRUE’

FUSING NON-ORGANIC LOGIC & SYNTHETIC RAINBOW SPECTRA CREATING RADICALLY PRAGMATIC TRANSHUMANIST VISIONS: IMAGINE THE UNIMAGINABLE BY SEEING THE INVISIBLE WHERE UNCANNY SCENARIOS GROW FLORA/FAUNA/SILICON COMPOUNDS INTO QUANTUM PERMAFROST.`);
let text4 = (`--- NETWORKED ORGANISMS


‘I WON'T GIVE UP, NO, I WON'T GIVE IN TILL I REACH THE END, AND THEN I'LL START AGAIN’

POST-EVOLUTIONARY MULTISPECIES HISTORIES & POSTHUMANIST NARRATIVES FUSING GMO’S INTO NEW MICRO &/OR MACRO SUPERSTRUCTURES.
`);
let text5 = (`--- NON-ANTHROPOCENTRIC SEDIMENT


‘THERE IS NO HOME LIKE THE ONE YOU’VE GOT, CAUSE THAT HOME BELONGS TO YOU’ 

PARTS OF AN ECOSYSTEM TOO SLOW TO ADAPT TO THE EVOLUTIONARY SPEED & IT IS NOT THE PLANET CHANGING FAST (CLIMATE, EXTINCTION..) BUT HUMANS LACK BEHAVIORAL ADAPTATION SPEED. `);
let text6 = (`--- NON-ENDEMIC ALIEN FUSION


‘THE COLD NEVER BOTHERED ME ANYWAY!’

WE PRAISE ENDEMIC COMPRESSION, ENERGY FOR DIGITAL PLANTS, GEOINSECTS, HYBRID CREATURES. ORGANIC LIFE ON EARTH PROPOSES UTOPIAN FUTURE TECH TAXONOMIES: NETWORK INFRSTRCTRE, ARTFCL SATELLITES, ML/AI, IOT, DIZZNEY FUSING WITH EXTRATERRESTRIAL ‘ARTEFACTS’.`);
let text7 = (`--- HIGHLY VULNERABLE BACINT


‘DESTINED TO SEEK, DESTINED TO KNOW’

BACTERIA INTELLIGENCE CREATE PROTOTYPICAL MULTITUDES, UTOPIAN ETERNITIES & HOTSPOTS. BACFLORA CHANGES GENETIC MAKEUPS, ENVIRONMENTAL FACTORS & BIOINSECTICIDE STRAINS INTERSECT WITH INFORMATIONAL MARKERS THROUGH DIVERSE SEDIMENTS.
`);
let text8 = (`--- NON-BINARY TRANS-POLLINATION


‘QUE SE PODRÍA HACER EL AMOR POR TELEPATÍA, SI TE TUVIERA DE FRENTE LA MENTE TE LA VOLARÍA’

MUTATIONS & UNINTENDED NON-BINARY ARTIFICIAL LANDSCAPES USE SOFTWARE FOR INTERVARIETAL TRANSPOLLINATION WHILE PRODUCTIVITY PERCEIVES ULTRA-RAPID CYCLES: SUCH HIGH-ACTIVITY LAYERES FLOURISH & DISAPPEAR WITHIN MILISECONDS, CREATING MOLECULAR STABILITY.`);
let text9 = (`--- THE IMPOSSIBLE POSSIBILITY SEDIMENT


  ’TWO YEARS, AND JUST LIKE THAT, MY HEAD STILL TAKES ME BACK, THOUGHT IT WAS DONE, BUT I GUESS IT'S NEVER REALLY OVER’

  CONTRADICTORY ANARCHISM BREAKS RANDOM FUSION OF NON-ORGANIC LOGIC AND SYNTHETIC COLOR SPECTRA, PRIMITIVELY UTILITARIAN: IMAGINE THE UNIMAGINABLE; REFUSE INTERPRETATION.
  `);
let text10 = (`--- PHYSICS & COMPRESSION LAYER


’YOU'RE THE BEST THING I NEVER KNEW I NEEDED’

A LAYER INTERACTING ABOVE 0,5% & BEYOND PHYSICAL LOGIC, TAKING EXTREME DECISIONS WHILE THEORIES EVOLVES & VERIFIED PHYSICS CHANGES & DISPLAYS AGENCY THROUGH COMPRESSION, THE MEATY EYE OF THE NEEDLE.`);
let text11 = (`--- HOMO FUSUS

--- HOPEPUNKSYNESTHESIA


‘IN THE CIRCLE OF LIFE IT'S THE WHEEL OF FORTUNE, IT'S THE LEAP OF FAITH, IT'S THE BAND OF HOPE’

HOMO OECONOMICUS IS AN INVENTION OF CALVINISTIC INCELS SINCE HUMANS CAN INDIVIDUALLY ADAPT TO ANY SCENARIO, & HUMANITY AS A WHOLE CAN BLEND SENSES, FUSE & UNITE.`);



function setup() {
  noCursor();
  // fullscreen();  
  renderer = createCanvas(windowWidth, windowHeight);
  renderer.canvas.style.display = 'block';
  img = createImage(windowWidth, windowHeight);
  //img = createImage(windowWidth, windowHeight);

  img.loadPixels();
  on();
  img = loadImage('assets/blur.png'); // Load the image
  img1 = loadImage('assets/1.png'); // Load the image
  // img1 = loadImage('assets/1.png'); // Load the image
  // img2 = loadImage('assets/2.png'); // Load the image
  // img3 = loadImage('assets/3.png'); // Load the image
  // img4 = loadImage('assets/4.png'); // Load the image
  // img5 = loadImage('assets/5.png'); // Load the image
  // img6 = loadImage('assets/6.png'); // Load the image
  // img7 = loadImage('assets/12.png'); // Load the image
  randoImgArray = [loadImage('assets/13.png'), loadImage('assets/2.png'), loadImage('assets/3.png'), loadImage('assets/4.png'), loadImage('assets/5.png'), loadImage('assets/6.png'), loadImage('assets/12.png')];
  // img1 = loadImage('assets/12.png'); // Load the image
  encendido = true;
  randoImg = random(randoImgArray);




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
  background(0);
  // image(img, 0, 0, img.width, img.height);

  // for (x = 0; x <= 3; x++) {
  //   img.filter(BLUR, x);
  //   print(x);
  // }


  let c = get(mouseX, mouseY);
  // print(c);
  let hueValue = floor(hue(c));
  let saturationValue = saturation(c);
  let lightnessValue = lightness(c);
  let X = mouseX;
  let Y = mouseY;

  if (!EJC.isPlaying()) {
    EJC.setVolume(0.3, 1);
    EJC.play();
  }



  if (!encendido) {
    // image(randoImg, 0, 0, img.width, img.height);
    image(randoImg, 0, 0, img.width - 50, img.height - 50);
    // img.filter(BLUR);
    // img.filter(BLUR, 0);

    //1


    if (mouseY >= 100 && mouseY <= 150) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 510, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      // text1.toUpperCase();
      text(text1, X, Y, 500, 500);
      if (!VWC.isPlaying()) {
        VWC.setVolume(0.3, 1);
        VWC.play();
      }

    } else {
      VWC.setVolume(0, 1);
      VWC.stop();
    }

    //2

    if (mouseY >= 151 && mouseY <= 200) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      text(text2, X, Y, 500, 500);
      if (!DSS.isPlaying()) {
        DSS.setVolume(0.3, 1);
        DSS.play();
      }

    } else {
      DSS.setVolume(0, 1);
      DSS.stop();
    }

    //3

    if (mouseY >= 201 && mouseY <= 250) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      text(text3, X, Y, 500, 500);
      if (!JBI.isPlaying()) {
        JBI.setVolume(0.3, 1);
        JBI.play();
      }

    } else {
      JBI.setVolume(0, 1);
      JBI.stop();
    }

    //4

    if (mouseY >= 251 && mouseY <= 300) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      text(text4, X, Y, 500, 500);
      if (!STE.isPlaying()) {
        STE.setVolume(0.3, 1);
        STE.play();
      }

    } else {
      STE.setVolume(0, 1);
      STE.stop();
    }

    //5

    if (mouseY >= 301 && mouseY <= 350) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      text(text5, X, Y, 500, 500);
      if (!BAM.isPlaying()) {
        BAM.setVolume(0.3, 1);
        BAM.play();
      }

    } else {
      BAM.setVolume(0, 1);
      BAM.stop();
    }

    //6

    if (mouseY >= 351 && mouseY <= 400) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      text(text6, X, Y, 500, 500);
      if (!IML.isPlaying()) {
        IML.setVolume(0.3, 1);
        IML.play();
      }

    } else {
      IML.setVolume(0, 1);
      IML.stop();
    }

    //7

    if (mouseY >= 401 && mouseY <= 450) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      text(text7, X, Y, 500, 500);
      if (!AMW.isPlaying()) {
        AMW.setVolume(0.3, 1);
        AMW.play();
      }

    } else {
      AMW.setVolume(0, 1);
      AMW.stop();
    }

    //8


    if (mouseY >= 451 && mouseY <= 500) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      text(text8, X, Y, 500, 500);
      if (!KUT.isPlaying()) {
        KUT.setVolume(0.3, 1);
        KUT.play();
      }

    } else {
      KUT.setVolume(0, 1);
      KUT.stop();
    }

    //9

    if (mouseY >= 501 && mouseY <= 550) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      text(text9, X, Y, 500, 500);
      if (!KPN.isPlaying()) {
        KPN.setVolume(0.3, 1);
        KPN.play();
      }

    } else {
      KPN.setVolume(0, 1);
      KPN.stop();
    }

    //10

    if (mouseY >= 551 && mouseY <= 600) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 150;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      text(text10, X, Y, 500, 500);
      if (!NYN.isPlaying()) {
        NYN.setVolume(0.3, 1);
        NYN.play();
      }

    } else {
      NYN.setVolume(0, 1);
      NYN.stop();
    }

    //11

    if (mouseY >= 601) {
      if (mouseX > windowWidth / 2) {
        X = mouseX - 500;
      }
      if (mouseY > windowHeight / 2) {
        Y = mouseY - 200;
      }
      // let bbox = textBounds(text1, mouseX, mouseY, 12);
      // noStroke();
      // fill('rgba(117, 178, 168, 0.5)');
      // rect(X - 10, Y - 10, 500, 230);
      textSize(20);
      fill(233, 199, 6);
      textFont(myFont);
      text(text11, X, Y, 500, 500);
      if (!EJC.isPlaying()) {
        EJC.setVolume(0.3, 1);
        EJC.play();
      }

    } else {
      EJC.setVolume(0, 1);
      EJC.stop();
    }


  }








  // print(lightnessValue);
  // print(saturationValue);
  print(mouseY);
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