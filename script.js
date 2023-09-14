let rectWidth = 50;
let rectHeight = 10;
let x = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200 /* <<0-10 || 11-21>>*/, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];

let xA = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 /* <<0-10 || 11-21>>*/, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200];

let xB = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300 /* <<0-10 || 11-21>>*/, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400];

let y = [400, 400 / 11 * 2, 400 / 11 * 3, 400 / 11 * 4, 400 / 11 * 5, 400 / 11 * 6, 400 / 11 * 7, 400 / 11 * 8, 400 / 11 * 9, 400 / 11 * 10, 400 / 11 * 1 /* <<0-10 || 11-21>>*/, 400, 400 / 11 * 2, 400 / 11 * 3, 400 / 11 * 4, 400 / 11 * 5, 400 / 11 * 6, 400 / 11 * 7, 400 / 11 * 8, 400 / 11 * 9, 400 / 11 * 10, 400 / 11 * 1];
let slider;
let sliderA;
let sliderB;
let numZippers = 20;
let count = 0;
let count2A = 0;
let count2B = 0;
let zip = []
let zip2A = []
let zip2B = []
let changeTZG1 = false
let changeTZG2A = false
let changeTZG2B = false
let zipperWinScreen = false;
let ZG1;
let ZG2;
rectangle = [];

var fade;
var fadeAmount = 1
function preload() {
  zipperHead = loadImage("zipper head stock photo (2).png")
  zipperHeadA = loadImage("zipper head stock photo (2).png")
  zipperTeeth = loadImage("zipper teeth.png")
}
function setup() {
  createCanvas(600, 400);
  ZG1 = createButton("Zipper Game")
  ZG1.position(200, height / 2);
  ZG1.mousePressed(TZG1)
  ZG2 = createButton("Next Level")
  ZG2.position(100, height / 2);
  ZG2.mousePressed(TZG2A)
  ZG2.hide()
  slider = createSlider(0, 380, 0, 1);
  slider.position(500, height / 2);
  slider.style("transform", "rotate(90deg)",);
  sliderA = createSlider(0, 380, 0, 1);
  sliderA.position(440, height / 2);
  sliderA.style("transform", "rotate(90deg)",);
  sliderB = createSlider(0, 380, 0, 1);
  sliderB.position(500, height / 2);
  sliderB.style("transform", "rotate(270deg)",);

  fade = 0;

  for (let i = 0; i <= 21; i++) {
    zip[i] = true;
  }

  for (let i = 0; i <= 21; i++) {
    zip2A[i] = true;
  }

  slider.hide();
  sliderA.hide();
  sliderB.hide();
}

function TZG1() {
  changeTZG1 = true
}
function TZG2A() {
  changeTZG2A = true
}
function TZG2B() {
  changeTZG2B = true
}

function draw() {
  background(0);
  noStroke();

  //-----------------(ZIPPER CODE)-----------------------//
  console.log(count)

  if (changeTZG1 == true) {
    ZG1.hide()
    slider.show()

    //code for Text~
    // if(x[0]>225 && zip[0] == true)  { count++; zip[0] = false;  }
    if (x[1] > 225 && zip[1] == true) { count++; zip[1] = false; }
    if (x[2] > 225 && zip[2] == true) { count++; zip[2] = false; }
    if (x[3] > 225 && zip[3] == true) { count++; zip[3] = false; }
    if (x[4] > 225 && zip[4] == true) { count++; zip[4] = false; }
    if (x[5] > 225 && zip[5] == true) { count++; zip[5] = false; }
    if (x[6] > 225 && zip[6] == true) { count++; zip[6] = false; }
    if (x[7] > 225 && zip[7] == true) { count++; zip[7] = false; }
    if (x[8] > 225 && zip[8] == true) { count++; zip[8] = false; }
    if (x[9] > 225 && zip[9] == true) { count++; zip[9] = false; }
    if (x[10] > 225 && zip[10] == true) { count++; zip[10] = false; }
    //      Add to count if ones on Right make it to a spcific X coordinate  ^^^
    if (x[11] < 275 && zip[11] == true) { count++; zip[11] = false; }
    if (x[12] < 275 && zip[12] == true) { count++; zip[12] = false; }
    if (x[13] < 275 && zip[13] == true) { count++; zip[13] = false; }
    if (x[14] < 275 && zip[14] == true) { count++; zip[14] = false; }
    if (x[15] < 275 && zip[15] == true) { count++; zip[15] = false; }
    if (x[16] < 275 && zip[16] == true) { count++; zip[16] = false; }
    if (x[17] < 275 && zip[17] == true) { count++; zip[17] = false; }
    if (x[18] < 275 && zip[18] == true) { count++; zip[18] = false; }
    if (x[19] < 275 && zip[19] == true) { count++; zip[19] = false; }
    if (x[20] < 275 && zip[20] == true) { count++; zip[20] = false; }
    if (x[21] < 275 && zip[21] == true) { count++; zip[21] = false; }

    if (slider.value() <= 5) {
      for (let i = 0; i <= 21; i++) {
        text("use this", 400, 150)
        text("slider ->", 400, 200)
        zip[i] = true;
        ZG2.hide();
      }

      count = 0;
    }
    if (count == numZippers && slider.value() >= 370) {
      text("Great Job", 40, 50);
      textSize(30);
      fill(255);
      ZG2.show()
    }
    if (slider.value() >= 370 && count <= numZippers - 1) {
      text("I think you ", 40, 50);
      text("missed a ", 40, 100);
      text("couple!!!", 40, 150)
      text("make sure to ", 400, 50)
      text("go slow ", 400, 100)
      textSize(30);
      fill(255);
    }
    image(zipperHead, 255, slider.value(), 40, 30);
    for (let i = 0; i < 11; i++) {
      rectangle[i] = rect(x[i], y[i], rectWidth, rectHeight);
    }
    for (let i = 11; i <= 21; i++) {
      rectangle[i] = rect(x[i], y[i], rectWidth, rectHeight);
    }
    for (let i = 0; i < 11; i++) {
      if (slider.value() < 400 / 11) {
        x[10] = 200 + slider.value();
      }
      if (slider.value() < 400 / 11 * 2 && slider.value() > 400 / 11) {
        x[1] = 200 + slider.value() - 400 / 11;
      }
      if (slider.value() < 400 / 11 * 3 && slider.value() > 400 / 11 * 2) {
        x[2] = 200 + slider.value() - 400 / 11 * 2;
      }
      if (slider.value() < 400 / 11 * 4 && slider.value() > 400 / 11 * 3) {
        x[3] = 200 + slider.value() - 400 / 11 * 3;
      }
      if (slider.value() < 400 / 11 * 5 && slider.value() > 400 / 11 * 4) {
        x[4] = 200 + slider.value() - 400 / 11 * 4;
      }
      if (slider.value() < 400 / 11 * 6 && slider.value() > 400 / 11 * 5) {
        x[5] = 200 + slider.value() - 400 / 11 * 5;
      }
      if (slider.value() < 400 / 11 * 7 && slider.value() > 400 / 11 * 6) {
        x[6] = 200 + slider.value() - 400 / 11 * 6;
      }
      if (slider.value() < 400 / 11 * 8 && slider.value() > 400 / 11 * 7) {
        x[7] = 200 + slider.value() - 400 / 11 * 7;
      }
      if (slider.value() < 400 / 11 * 9 && slider.value() > 400 / 11 * 8) {
        x[8] = 200 + slider.value() - 400 / 11 * 8;
      }
      if (slider.value() < 400 / 11 * 10 && slider.value() > 400 / 11 * 9) {
        x[9] = 200 + slider.value() - 400 / 11 * 9;
      }
      if (slider.value() < 400 && slider.value() > 400 / 11 * 10) {
        x[0] = 200 + slider.value() - 400 / 11 * 10;
      }
    }
    for (let i = 11; i <= 21; i++) {
      if (slider.value() < 400 / 11) {
        x[21] = 300 - slider.value();
      }
      if (slider.value() < 400 / 11 * 2 && slider.value() > y[21]) {
        x[12] = 300 - slider.value() + y[21];
      }
      if (slider.value() < 400 / 11 * 3 && slider.value() > y[12]) {
        x[13] = 300 - slider.value() + y[12];
      }
      if (slider.value() < 400 / 11 * 4 && slider.value() > y[13]) {
        x[14] = 300 - slider.value() + y[13];
      }
      if (slider.value() < 400 / 11 * 5 && slider.value() > y[14]) {
        x[15] = 300 - slider.value() + y[14];
      }
      if (slider.value() < 400 / 11 * 6 && slider.value() > y[15]) {
        x[16] = 300 - slider.value() + y[15];
      }
      if (slider.value() < 400 / 11 * 7 && slider.value() > y[16]) {
        x[17] = 300 - slider.value() + y[16];
      }
      if (slider.value() < 400 / 11 * 8 && slider.value() > y[17]) {
        x[18] = 300 - slider.value() + y[17];
      }
      if (slider.value() < 400 / 11 * 9 && slider.value() > y[18]) {
        x[19] = 300 - slider.value() + y[18];
      }
      if (slider.value() < 400 / 11 * 10 && slider.value() > y[19]) {
        x[20] = 300 - slider.value() + y[19];
      }
      if (slider.value() < 400 && slider.value() > y[20]) {
        x[11] = 300 - slider.value() + y[20];
      }
    }
  }






  if (changeTZG2A == true) {
    changeTZG1 = false
    ZG2.hide();
    sliderA.show();
    sliderB.show();
    slider.hide();


    // rectangles.splice(0,1)


    //code for Text~
    // if(x[0]>225 && zip[0] == true)  { count++; zip[0] = false;  }
    if (xA[1] > 125 && zip2A[1] == true) { count2A++; zip2A[1] = false; }
    if (xA[2] > 125 && zip2A[2] == true) { count2A++; zip2A[2] = false; }
    if (xA[3] > 125 && zip2A[3] == true) { count2A++; zip2A[3] = false; }
    if (xA[4] > 125 && zip2A[4] == true) { count2A++; zip2A[4] = false; }
    if (xA[5] > 125 && zip2A[5] == true) { count2A++; zip2A[5] = false; }
    if (xA[6] > 125 && zip2A[6] == true) { count2A++; zip2A[6] = false; }
    if (xA[7] > 125 && zip2A[7] == true) { count2A++; zip2A[7] = false; }
    if (xA[8] > 125 && zip2A[8] == true) { count2A++; zip2A[8] = false; }
    if (xA[9] > 125 && zip2A[9] == true) { count2A++; zip2A[9] = false; }
    if (xA[10] > 125 && zip2A[10] == true) { count2A++; zip2A[10] = false; }
    //      Add to count2A if ones on Right make it to a spcific xA coordinate  ^^^
    if (xA[11] < 175 && zip2A[11] == true) { count2A++; zip2A[11] = false; }
    if (xA[12] < 175 && zip2A[12] == true) { count2A++; zip2A[12] = false; }
    if (xA[13] < 175 && zip2A[13] == true) { count2A++; zip2A[13] = false; }
    if (xA[14] < 175 && zip2A[14] == true) { count2A++; zip2A[14] = false; }
    if (xA[15] < 175 && zip2A[15] == true) { count2A++; zip2A[15] = false; }
    if (xA[16] < 175 && zip2A[16] == true) { count2A++; zip2A[16] = false; }
    if (xA[17] < 175 && zip2A[17] == true) { count2A++; zip2A[17] = false; }
    if (xA[18] < 175 && zip2A[18] == true) { count2A++; zip2A[18] = false; }
    if (xA[19] < 175 && zip2A[19] == true) { count2A++; zip2A[19] = false; }
    if (xA[20] < 175 && zip2A[20] == true) { count2A++; zip2A[20] = false; }
    if (xA[21] < 175 && zip2A[21] == true) { count2A++; zip2A[21] = false; }

    if (sliderA.value() <= 5) {
      for (let i = 0; i <= 21; i++) {
        zip2A[i] = true;
      }

      count2A = 0;
    }
    if (count2A == numZippers && sliderA.value() >= 370) {
      text("Just ", 40, 50);
      text("One ", 40, 80);
      text("More ", 40, 110);
      textSize(30);
      fill(255);
    }
    if (sliderA.value() >= 370 && count2A <= numZippers - 1) {
      text("not quite", 20, 50);
      text("right ", 40, 100);

      textSize(30);
      fill(255);
    }
    image(zipperHead, 155, sliderA.value(), 40, 30);
    for (let i = 0; i < 11; i++) {
      rect(xA[i], y[i], rectWidth, rectHeight);
    }
    for (let i = 11; i <= 21; i++) {
      rect(xA[i], y[i], rectWidth, rectHeight);
    }
    for (let i = 0; i < 11; i++) {
      if (sliderA.value() < 400 / 11) {
        xA[10] = 100 + sliderA.value();
      }
      if (sliderA.value() < 400 / 11 * 2 && sliderA.value() > 400 / 11) {
        xA[1] = 100 + sliderA.value() - 400 / 11;
      }
      if (sliderA.value() < 400 / 11 * 3 && sliderA.value() > 400 / 11 * 2) {
        xA[2] = 100 + sliderA.value() - 400 / 11 * 2;
      }
      if (sliderA.value() < 400 / 11 * 4 && sliderA.value() > 400 / 11 * 3) {
        xA[3] = 100 + sliderA.value() - 400 / 11 * 3;
      }
      if (sliderA.value() < 400 / 11 * 5 && sliderA.value() > 400 / 11 * 4) {
        xA[4] = 100 + sliderA.value() - 400 / 11 * 4;
      }
      if (sliderA.value() < 400 / 11 * 6 && sliderA.value() > 400 / 11 * 5) {
        xA[5] = 100 + sliderA.value() - 400 / 11 * 5;
      }
      if (sliderA.value() < 400 / 11 * 7 && sliderA.value() > 400 / 11 * 6) {
        xA[6] = 100 + sliderA.value() - 400 / 11 * 6;
      }
      if (sliderA.value() < 400 / 11 * 8 && sliderA.value() > 400 / 11 * 7) {
        xA[7] = 100 + sliderA.value() - 400 / 11 * 7;
      }
      if (sliderA.value() < 400 / 11 * 9 && sliderA.value() > 400 / 11 * 8) {
        xA[8] = 100 + sliderA.value() - 400 / 11 * 8;
      }
      if (sliderA.value() < 400 / 11 * 10 && sliderA.value() > 400 / 11 * 9) {
        xA[9] = 100 + sliderA.value() - 400 / 11 * 9;
      }
      if (sliderA.value() < 400 && sliderA.value() > 400 / 11 * 10) {
        xA[0] = 100 + sliderA.value() - 400 / 11 * 10;
      }
    }
    for (let i = 11; i <= 21; i++) {
      if (sliderA.value() < 400 / 11) {
        xA[21] = 200 - sliderA.value();
      }
      if (sliderA.value() < 400 / 11 * 2 && sliderA.value() > y[21]) {
        xA[12] = 200 - sliderA.value() + y[21];
      }
      if (sliderA.value() < 400 / 11 * 3 && sliderA.value() > y[12]) {
        xA[13] = 200 - sliderA.value() + y[12];
      }
      if (sliderA.value() < 400 / 11 * 4 && sliderA.value() > y[13]) {
        xA[14] = 200 - sliderA.value() + y[13];
      }
      if (sliderA.value() < 400 / 11 * 5 && sliderA.value() > y[14]) {
        xA[15] = 200 - sliderA.value() + y[14];
      }
      if (sliderA.value() < 400 / 11 * 6 && sliderA.value() > y[15]) {
        xA[16] = 200 - sliderA.value() + y[15];
      }
      if (sliderA.value() < 400 / 11 * 7 && sliderA.value() > y[16]) {
        xA[17] = 200 - sliderA.value() + y[16];
      }
      if (sliderA.value() < 400 / 11 * 8 && sliderA.value() > y[17]) {
        xA[18] = 200 - sliderA.value() + y[17];
      }
      if (sliderA.value() < 400 / 11 * 9 && sliderA.value() > y[18]) {
        xA[19] = 200 - sliderA.value() + y[18];
      }
      if (sliderA.value() < 400 / 11 * 10 && sliderA.value() > y[19]) {
        xA[20] = 200 - sliderA.value() + y[19];
      }
      if (sliderA.value() < 400 && sliderA.value() > y[20]) {
        xA[11] = 200 - sliderA.value() + y[20];
      }
    }





    if (xB[1] > 325 && zip2B[1] == true) { count2B++; zip2B[1] = false; }
    if (xB[2] > 325 && zip2B[2] == true) { count2B++; zip2B[2] = false; }
    if (xB[3] > 325 && zip2B[3] == true) { count2B++; zip2B[3] = false; }
    if (xB[4] > 325 && zip2B[4] == true) { count2B++; zip2B[4] = false; }
    if (xB[5] > 325 && zip2B[5] == true) { count2B++; zip2B[5] = false; }
    if (xB[6] > 325 && zip2B[6] == true) { count2B++; zip2B[6] = false; }
    if (xB[7] > 325 && zip2B[7] == true) { count2B++; zip2B[7] = false; }
    if (xB[8] > 325 && zip2B[8] == true) { count2B++; zip2B[8] = false; }
    if (xB[9] > 325 && zip2B[9] == true) { count2B++; zip2B[9] = false; }
    if (xB[10] > 325 && zip2B[10] == true) { count2B++; zip2B[10] = false; }
    //      Add to count2B if ones on Right make it to a spcific xB coordinate  ^^^
    if (xB[11] < 375 && zip2B[11] == true) { count2B++; zip2B[11] = false; }
    if (xB[12] < 375 && zip2B[12] == true) { count2B++; zip2B[12] = false; }
    if (xB[13] < 375 && zip2B[13] == true) { count2B++; zip2B[13] = false; }
    if (xB[14] < 375 && zip2B[14] == true) { count2B++; zip2B[14] = false; }
    if (xB[15] < 375 && zip2B[15] == true) { count2B++; zip2B[15] = false; }
    if (xB[16] < 375 && zip2B[16] == true) { count2B++; zip2B[16] = false; }
    if (xB[17] < 375 && zip2B[17] == true) { count2B++; zip2B[17] = false; }
    if (xB[18] < 375 && zip2B[18] == true) { count2B++; zip2B[18] = false; }
    if (xB[19] < 375 && zip2B[19] == true) { count2B++; zip2B[19] = false; }
    if (xB[20] < 375 && zip2B[20] == true) { count2B++; zip2B[20] = false; }
    if (xB[21] < 375 && zip2B[21] == true) { count2B++; zip2B[21] = false; }

    if (sliderB.value() <= 5) {
      for (let i = 0; i <= 21; i++) {
        zip2B[i] = true;
      }

      count2B = 0;
    }
    if ((count2B == numZippers && sliderB.value() >= 370) && (count2A == numZippers && sliderA.value() >= 370)) {
      zipperWinScreen = true;
    }
    if (sliderB.value() >= 370 && count2B <= numZippers - 1) {
      text("not quite", 500, 50);
      text("right ", 500, 100);

      textSize(30);
      fill(255);
    }

    if (count2B == numZippers && sliderB.value() >= 370) {
      text("Just ", 30, 50);
      text("One ", 30, 80);
      text("More ", 30, 110);
      textSize(30);
      fill(255);
    }
    image(zipperHead, 355, sliderB.value(), 40, 30);
    for (let i = 0; i < 11; i++) {
      rect(xB[i], y[i], rectWidth, rectHeight);
    }
    for (let i = 11; i <= 21; i++) {
      rect(xB[i], y[i], rectWidth, rectHeight);
    }
    for (let i = 0; i < 11; i++) {
      if (sliderB.value() < 400 / 11) {
        xB[10] = 300 + sliderB.value();
      }
      if (sliderB.value() < 400 / 11 * 2 && sliderB.value() > 400 / 11) {
        xB[1] = 300 + sliderB.value() - 400 / 11;
      }
      if (sliderB.value() < 400 / 11 * 3 && sliderB.value() > 400 / 11 * 2) {
        xB[2] = 300 + sliderB.value() - 400 / 11 * 2;
      }
      if (sliderB.value() < 400 / 11 * 4 && sliderB.value() > 400 / 11 * 3) {
        xB[3] = 300 + sliderB.value() - 400 / 11 * 3;
      }
      if (sliderB.value() < 400 / 11 * 5 && sliderB.value() > 400 / 11 * 4) {
        xB[4] = 300 + sliderB.value() - 400 / 11 * 4;
      }
      if (sliderB.value() < 400 / 11 * 6 && sliderB.value() > 400 / 11 * 5) {
        xB[5] = 300 + sliderB.value() - 400 / 11 * 5;
      }
      if (sliderB.value() < 400 / 11 * 7 && sliderB.value() > 400 / 11 * 6) {
        xB[6] = 300 + sliderB.value() - 400 / 11 * 6;
      }
      if (sliderB.value() < 400 / 11 * 8 && sliderB.value() > 400 / 11 * 7) {
        xB[7] = 300 + sliderB.value() - 400 / 11 * 7;
      }
      if (sliderB.value() < 400 / 11 * 9 && sliderB.value() > 400 / 11 * 8) {
        xB[8] = 300 + sliderB.value() - 400 / 11 * 8;
      }
      if (sliderB.value() < 400 / 11 * 10 && sliderB.value() > 400 / 11 * 9) {
        xB[9] = 300 + sliderB.value() - 400 / 11 * 9;
      }
      if (sliderB.value() < 400 && sliderB.value() > 400 / 11 * 10) {
        xB[0] = 300 + sliderB.value() - 400 / 11 * 10;
      }
    }
    for (let i = 11; i <= 21; i++) {
      if (sliderB.value() < 400 / 11) {
        xB[21] = 400 - sliderB.value();
      }
      if (sliderB.value() < 400 / 11 * 2 && sliderB.value() > y[21]) {
        xB[12] = 400 - sliderB.value() + y[21];
      }
      if (sliderB.value() < 400 / 11 * 3 && sliderB.value() > y[12]) {
        xB[13] = 400 - sliderB.value() + y[12];
      }
      if (sliderB.value() < 400 / 11 * 4 && sliderB.value() > y[13]) {
        xB[14] = 400 - sliderB.value() + y[13];
      }
      if (sliderB.value() < 400 / 11 * 5 && sliderB.value() > y[14]) {
        xB[15] = 400 - sliderB.value() + y[14];
      }
      if (sliderB.value() < 400 / 11 * 6 && sliderB.value() > y[15]) {
        xB[16] = 400 - sliderB.value() + y[15];
      }
      if (sliderB.value() < 400 / 11 * 7 && sliderB.value() > y[16]) {
        xB[17] = 400 - sliderB.value() + y[16];
      }
      if (sliderB.value() < 400 / 11 * 8 && sliderB.value() > y[17]) {
        xB[18] = 400 - sliderB.value() + y[17];
      }
      if (sliderB.value() < 400 / 11 * 9 && sliderB.value() > y[18]) {
        xB[19] = 400 - sliderB.value() + y[18];
      }
      if (sliderB.value() < 400 / 11 * 10 && sliderB.value() > y[19]) {
        xB[20] = 400 - sliderB.value() + y[19];
      }
      if (sliderB.value() < 400 && sliderB.value() > y[20]) {
        xB[11] = 400 - sliderB.value() + y[20];
      }
    }
  }
  if (zipperWinScreen == true) {
    sliderA.hide();
    sliderB.hide();
    changeTZG2A = false
    textSize(130);
    fill(255, 0, 0, fade)
    text("You Win ", 50, 230);

    //noFill()
    //textSize(30)
    if (fade < 0) fadeAmount = 1;

    if (fade > 255) fadeAmount = -10;

    fade += fadeAmount;
  }

}
 

