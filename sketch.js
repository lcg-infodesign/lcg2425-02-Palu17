function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background("black");
  
  const gridSize = 5;
  const cellSize = min(width, height) / gridSize; // dimensione delle celle
  const squareSize = cellSize * 0.9; //ridotta un poco pr avere del margine
  
  //centro la griglia:
  const startX = (width - cellSize * gridSize) / 2;
  const startY = (height - cellSize * gridSize) / 2; 

  for (let i = 0; i < gridSize * gridSize; i++) {
    const col = i % gridSize; // ottengo la colonna con il modlo
    const row = floor(i / gridSize); // ottengo la riga
    const centerX = startX + col * cellSize + cellSize/2; //calcolo il centro X
    const centerY = startY + row * cellSize + cellSize/2; // calcolo il centro Y
    
    drawCell(centerX, centerY, squareSize); //chiamo la funzione per disegnare la cella
  }
}

function drawCell(x, y, size) {
  const circleSize = size/4; //dimensioni del cerchio
  
  // Cerchio centrale nero (non so come toglierlo senza sfanculare tutto)
  fill("black");
  stroke("black");
  circle(x, y, circleSize);
  
  // queste sono le linee
  stroke("#21FFFF");
  const numLines = 50;
  const lineLength = size/4;
  const maxAngle = PI/6;
  
  for (let i = 0; i < numLines; i++) {
    const baseAngle = random(TWO_PI);
    const startX = x + cos(baseAngle) * (circleSize/2);
    const startY = y + sin(baseAngle) * (circleSize/2);
    const tangentAngle = baseAngle + HALF_PI + random(-maxAngle, maxAngle);
    
    line(
      startX, 
      startY, 
      startX + cos(tangentAngle) * lineLength,
      startY + sin(tangentAngle) * lineLength
    );
  }
}

function mousePressed() {
  redraw();
}