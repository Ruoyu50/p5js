// let maze = [];
let player;
let blockSize =20;
let currentLevel = 0;
let levels = [level1, level2, level3];
let bg1, bg2, bg3;
let currentBackground;

function preload() {
  // 预加载背景图
  bg1 = loadImage("assets/background/bg1.png");
  bg2 = loadImage("assets/background/bg2.png");
  bg3 = loadImage("assets/background/bg3.png");
  Key = loadImage("assets/object/key.png")
  
  // // 动态加载关卡文件
  // loadLevelFromFile("02.js");
}

// 初始化画布
function setup() {
 
  console.log("Current Level:", currentLevel); // 调试当前关卡
  // console.log("Maze:", maze); // 检查迷宫数据是否正确加载
  console.log("Levels:", levels);
    if (!Array.isArray(levels) || levels.length === 0) {
    console.error("关卡数据未加载或为空！");
    return;
  }
  
  
  // const mazeWidth = levels[currentLevel].maze[0].length * blockSize;
  // const mazeHeight = levels[currentLevel].maze.length * blockSize;
  createCanvas(500,500);
  loadLevel(currentLevel);
  player = new Player(levels[currentLevel].start.x, levels[currentLevel].start.y);
}

function draw() {
  push();
  background(0);
  imageMode(CENTER);
  image(currentBackground, width / 2, height / 2, width, height);
  drawMaze(); // 绘制迷宫
  player.update(); // 更新玩家位置
  player.draw(); // 绘制玩家
    drawKey(); // 绘制钥匙
  pop();
}

function drawKey() {
  imageMode(CENTER);
  // 使用当前关卡的key位置绘制钥匙
  image(Key, keyPosition.x * blockSize + blockSize / 2, keyPosition.y * blockSize + blockSize / 2, blockSize, blockSize);
}

// 绘制迷宫
function drawMaze() {
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === 1) {
        fill(100,100,100,500); // 墙壁是黑色
        noStroke();
        rect(col * blockSize, row * blockSize, blockSize, blockSize);
      }
    }
  }
}




// 加载指定关卡
function loadLevel(levelIndex) {
  if (levelIndex < 0 || levelIndex >= levels.length) {
    console.error("关卡索引超出范围:", levelIndex);
    return;
  }
  
  
  
  
  const level = levels[levelIndex];
  
  
  
  
  maze = level.maze; // 加载关卡迷宫数据
  
  
  
     if (level.background === "bg1") {
    currentBackground = bg1;
  } else if (level.background === "bg2") {
    currentBackground = bg2;
  } else if (level.background === "bg3") {
    currentBackground = bg3;
  }
    console.log(`Loading level ${levelIndex} with background ${level.background}`);
  
  if (level.start && typeof level.start.x === 'number' && typeof level.start.y === 'number') {
    console.log("Start position:", level.start); // 确保start坐标正确
  } else {
    console.error("Invalid start position:", level.start); // 输出错误
  }
  
  
  
  

  //testKey//
// let keyRow, keyCol;
//   do {
//   const offsetX = Math.floor(Math.random() * 3 - 1); // -1, 0, 1
//   const offsetY = Math.floor(Math.random() * 3 - 1); // -1, 0, 1
//   keyRow = level.end.y + offsetY;
//   keyCol = level.end.x + offsetX;
// } while (
//   keyRow < 0 || keyRow >= maze.length || 
//   keyCol < 0 || keyCol >= maze[0].length || 
//   maze[keyRow]?.[keyCol] === 1 || 
//   (keyRow === level.end.y && keyCol === level.end.x)
// );


//   console.log("钥匙位置：", keyPosition);
  
  
  
  
  
  // 设置钥匙位置
  if (level.Key && typeof level.Key.x === 'number' && typeof level.Key.y === 'number') {
    keyPosition = level.Key;  // 更新钥匙位置
    console.log("钥匙位置：", keyPosition); // 确认钥匙位置
  } else {
    console.error("没有设置有效的钥匙位置！");
  }

  // 确保start坐标正确
  if (level.start && typeof level.start.x === 'number' && typeof level.start.y === 'number') {
    console.log("Start position:", level.start);
  } else {
    console.error("Invalid start position:", level.start);
  }
  
  
  
  
  
  
  
}