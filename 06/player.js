
//version01//
// class Player {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.width = blockSize;
//     this.height = blockSize;
//     this.speed = blockSize;
//     this.moveCooldown = 100; // 冷却时间
//     this.lastMoveTime = 0;
//   }
  
//   setPosition(x, y) {
//     this.x = x;
//     this.y = y;
//   }
  
//   update() {
//     const currentTime = millis();
//     if (currentTime - this.lastMoveTime > this.moveCooldown) {
//       if (keyIsDown(LEFT_ARROW) && this.canMove(this.x - 1, this.y)) {
//         this.x--;
//         this.lastMoveTime = currentTime;
//       }
//       if (keyIsDown(RIGHT_ARROW) && this.canMove(this.x + 1, this.y)) {
//         this.x++;
//         this.lastMoveTime = currentTime;
//       }
//       if (keyIsDown(UP_ARROW) && this.canMove(this.x, this.y - 1)) {
//         this.y--;
//         this.lastMoveTime = currentTime;
//       }
//       if (keyIsDown(DOWN_ARROW) && this.canMove(this.x, this.y + 1)) {
//         this.y++;
//         this.lastMoveTime = currentTime;
//       }
//     }

//     this.checkLevelTransition(); // 检查是否切换关卡
//   }
//   canMove(x, y) {
//     return (
//       x >= 0 &&
//       y >= 0 &&
//       x < maze[0].length &&
//       y < maze.length &&
//       maze[y][x] === 0
//     );
//   }

//   draw() {
//     fill(255, 0, 0);
//     noStroke();
//     rect(this.x * blockSize, this.y * blockSize, this.width, this.height);
//   }

//   checkLevelTransition() {
//     const level = levels[currentLevel];
//     if (this.x === level.end.x && this.y === level.end.y) {
//       if (currentLevel < levels.length - 1) {
//         currentLevel++;
//         loadLevel(currentLevel);
//       }
//     }
    
//     else if (this.x === level.start.x && this.y === level.start.y) {
//       if (currentLevel > 0) {
//         currentLevel--;
//         loadLevel(currentLevel);
//       }
//     }
//   }
// }

//version02//
// class Player {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.width = blockSize; // 玩家占用的区域大小
//     this.height = blockSize;
//     this.speed = blockSize; // 玩家每次移动一个格子
    
//         this.moveCooldown = 100; // 冷却时间，单位为毫秒
//     this.lastMoveTime = 0;   // 上一次移动的时间
//       this.images = {
//     down: loadImage('assets/spritesheets/down.gif'), // 动图
//     up: loadImage('assets/spritesheets/up.gif'),
//     left: loadImage('assets/spritesheets/left.gif'),
//     right: loadImage('assets/spritesheets/right.gif'),
//     downStatic: loadImage('assets/static/down.png'), // 静态图
//     upStatic: loadImage('assets/static/up.png'),
//     leftStatic: loadImage('assets/static/left.png'),
//     rightStatic: loadImage('assets/static/right.png'),
//   };
//   this.currentImage = this.images.downStatic; // 默认朝下静止
//         this.movingDirection = null; // 记录当前按下的方向
//     this.keyStates = { // 初始化keyStates对象
//       left: false,
//       right: false,
//       up: false,
//       down: false,
//     };

//   }

//   setPosition(x, y) {
//     this.x = x;
//     this.y = y;
//   }
  
  
// //version01update//
// //  update() {
// //         const currentTime = millis(); // 获取当前时间（以毫秒为单位）
// //      let moved = false;

   
// //         if (currentTime - this.lastMoveTime > this.moveCooldown) {
// //     if (keyIsDown(LEFT_ARROW) && this.canMove(this.x - 1, this.y)) {
// //       this.x--;
// //             this.currentImage = this.images.left; // 左移动图

// //               this.lastMoveTime = currentTime;
// //       moved = true;

// //     }
// //     if (keyIsDown(RIGHT_ARROW) && this.canMove(this.x + 1, this.y)) {
// //       this.x++;
// //             this.currentImage = this.images.right; // 右移动图

// //               this.lastMoveTime = currentTime;
// //       moved = true;

// //     }
// //     if (keyIsDown(UP_ARROW) && this.canMove(this.x, this.y - 1)) {
// //       this.y--;
// //             this.currentImage = this.images.up; // 上移动图

// //               this.lastMoveTime = currentTime;
// //       moved = true;

// //     }
// //     if (keyIsDown(DOWN_ARROW) && this.canMove(this.x, this.y + 1)) {
// //       this.y++;
// //             this.currentImage = this.images.down; // 下移动图

// //               this.lastMoveTime = currentTime;
// //       moved = true;

// //     }
// //                       this.checkLevelTransition();

// //   }
// //      if (!moved) {
// //     if (this.currentImage === this.images.left) this.currentImage = this.images.leftStatic;
// //     else if (this.currentImage === this.images.right) this.currentImage = this.images.rightStatic;
// //     else if (this.currentImage === this.images.up) this.currentImage = this.images.upStatic;
// //     else if (this.currentImage === this.images.down) this.currentImage = this.images.downStatic;
// //     }
// //   }
//   //version02update//
//   update() {
//     const currentTime = millis();

//     if (currentTime - this.lastMoveTime > this.moveCooldown) {
//       let moved = false;

//       if (keyIsDown(LEFT_ARROW)) {
//         if (this.canMove(this.x - 1, this.y)) {
//           this.x--;
//           moved = true;
//         }
//         this.movingDirection = 'left';
//         this.keyStates.left = true;
//       } else if (keyIsDown(RIGHT_ARROW)) {
//         if (this.canMove(this.x + 1, this.y)) {
//           this.x++;
//           moved = true;
//         }
//         this.movingDirection = 'right';
//         this.keyStates.right = true;
//       } else if (keyIsDown(UP_ARROW)) {
//         if (this.canMove(this.x, this.y - 1)) {
//           this.y--;
//           moved = true;
//         }
//         this.movingDirection = 'up';
//         this.keyStates.up = true;
//       } else if (keyIsDown(DOWN_ARROW)) {
//         if (this.canMove(this.x, this.y + 1)) {
//           this.y++;
//           moved = true;
//         }
//         this.movingDirection = 'down';
//         this.keyStates.down = true;
//       }

//       if (this.movingDirection === 'left') {
//         this.currentImage = this.images.left;
//       } else if (this.movingDirection === 'right') {
//         this.currentImage = this.images.right;
//       } else if (this.movingDirection === 'up') {
//         this.currentImage = this.images.up;
//       } else if (this.movingDirection === 'down') {
//         this.currentImage = this.images.down;
//       }

//       this.lastMoveTime = currentTime;
//       this.checkLevelTransition();
//     }

//     // If no key is pressed, set the static image
//     if (!this.keyStates.left && !this.keyStates.right && !this.keyStates.up && !this.keyStates.down) {
//       this.setStaticImage();
//     }
//   }

//   setStaticImage() {
//     if (this.movingDirection === 'left') {
//       this.currentImage = this.images.leftStatic;
//     } else if (this.movingDirection === 'right') {
//       this.currentImage = this.images.rightStatic;
//     } else if (this.movingDirection === 'up') {
//       this.currentImage = this.images.upStatic;
//     } else if (this.movingDirection === 'down') {
//       this.currentImage = this.images.downStatic;
//     }
//   }

//   // Key release handler
//   keyReleased() {
//     if (keyCode === LEFT_ARROW) {
//       this.keyStates.left = false;
//       if (!this.keyStates.left && !this.keyStates.right && !this.keyStates.up && !this.keyStates.down) {
//         this.setStaticImage();
//       }
//     }
//     if (keyCode === RIGHT_ARROW) {
//       this.keyStates.right = false;
//       if (!this.keyStates.left && !this.keyStates.right && !this.keyStates.up && !this.keyStates.down) {
//         this.setStaticImage();
//       }
//     }
//     if (keyCode === UP_ARROW) {
//       this.keyStates.up = false;
//       if (!this.keyStates.left && !this.keyStates.right && !this.keyStates.up && !this.keyStates.down) {
//         this.setStaticImage();
//       }
//     }
//     if (keyCode === DOWN_ARROW) {
//       this.keyStates.down = false;
//       if (!this.keyStates.left && !this.keyStates.right && !this.keyStates.up && !this.keyStates.down) {
//         this.setStaticImage();
//       }
//     }
//   }

  
  
  
  
//   // 检查玩家是否可以移动到新的位置
//   canMove(x, y) {
//     if (x < 0 || x >= maze[0].length || y < 0 || y >= maze.length) {
//       return false; // 如果越界，不能移动
//     }
//     return maze[y][x] === 0; // 如果是空地（0），可以移动
//   }
  
//       checkLevelTransition() {
//     const currentLevelEnd = levels[currentLevel].end; // 当前关卡的结束位置
//     if (this.x === currentLevelEnd.x && this.y === currentLevelEnd.y) {
//       console.log("Level Complete! Moving to next level...");
//       this.nextLevel(); // 切换到下一个关卡
//     }
//   }

//   nextLevel() {
//     if (currentLevel < levels.length - 1) {
//       currentLevel++;
//       loadLevel(currentLevel); // 调用全局函数加载新关卡
//     } else {
//       console.log("Congratulations! You've completed all levels.");
//     }
//   }
  
//   draw() {
//     fill(255, 0, 0);
//     image(    this.currentImage,
// this.x * blockSize + blockSize / 2, this.y * blockSize + blockSize / 2, blockSize, blockSize);
//   }
// }


//version03//

  
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = blockSize; // 玩家占用的区域大小
    this.height = blockSize;
    this.speed = blockSize; // 玩家每次移动一个格子
    
    this.moveCooldown = 100; // 冷却时间，单位为毫秒
    this.lastMoveTime = 0;   // 上一次移动的时间
    this.images = {
      down: loadImage('assets/spritesheets/down.gif'), // 动图
      up: loadImage('assets/spritesheets/up.gif'),
      left: loadImage('assets/spritesheets/left.gif'),
      right: loadImage('assets/spritesheets/right.gif'),
      downStatic: loadImage('assets/static/down.png'), // 静态图
      upStatic: loadImage('assets/static/up.png'),
      leftStatic: loadImage('assets/static/left.png'),
      rightStatic: loadImage('assets/static/right.png'),
    };
    this.currentImage = this.images.downStatic; // 默认朝下静止
    this.movingDirection = null; // 记录当前按下的方向
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  
  update() {
    const currentTime = millis();

    if (currentTime - this.lastMoveTime > this.moveCooldown) {
      let moved = false;

      if (keyIsDown(LEFT_ARROW)) {
        if (this.canMove(this.x - 1, this.y)) {
          this.x--;
          moved = true;
        }
        this.movingDirection = 'left';
      } else if (keyIsDown(RIGHT_ARROW)) {
        if (this.canMove(this.x + 1, this.y)) {
          this.x++;
          moved = true;
        }
        this.movingDirection = 'right';
      } else if (keyIsDown(UP_ARROW)) {
        if (this.canMove(this.x, this.y - 1)) {
          this.y--;
          moved = true;
        }
        this.movingDirection = 'up';
      } else if (keyIsDown(DOWN_ARROW)) {
        if (this.canMove(this.x, this.y + 1)) {
          this.y++;
          moved = true;
        }
        this.movingDirection = 'down';
      }

      // 更新人物的动态图像
      if (this.movingDirection === 'left') {
        this.currentImage = this.images.left;
      } else if (this.movingDirection === 'right') {
        this.currentImage = this.images.right;
      } else if (this.movingDirection === 'up') {
        this.currentImage = this.images.up;
      } else if (this.movingDirection === 'down') {
        this.currentImage = this.images.down;
      }

      // 如果没有按键按下，切换到静态图像
      if (!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) && !keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)) {
        this.setStaticImage();
      }

      this.lastMoveTime = currentTime;
      this.checkLevelTransition();
    }
  }

  setStaticImage() {
    // 根据方向设置静态图像
    if (this.movingDirection === 'left') {
      this.currentImage = this.images.leftStatic;
    } else if (this.movingDirection === 'right') {
      this.currentImage = this.images.rightStatic;
    } else if (this.movingDirection === 'up') {
      this.currentImage = this.images.upStatic;
    } else if (this.movingDirection === 'down') {
      this.currentImage = this.images.downStatic;
    }
  }

  // 检查玩家是否可以移动到新的位置
  canMove(x, y) {
    if (x < 0 || x >= maze[0].length || y < 0 || y >= maze.length) {
      return false; // 如果越界，不能移动
    }
    return maze[y][x] === 0; // 如果是空地（0），可以移动
  }

  checkLevelTransition() {
    const currentLevelEnd = levels[currentLevel].end; // 当前关卡的结束位置
    if (this.x === currentLevelEnd.x && this.y === currentLevelEnd.y) {
      console.log("Level Complete! Moving to next level...");
      this.nextLevel(); // 切换到下一个关卡
    }
  }

  nextLevel() {
    if (currentLevel < levels.length - 1) {
      currentLevel++;
      loadLevel(currentLevel); // 调用全局函数加载新关卡
    } else {
      console.log("Congratulations! You've completed all levels.");
    }
  }
  
  draw() {
    let imagePositionX=this.x * blockSize + blockSize / 2;
    let imagePositionY=this.y * blockSize + blockSize / 2;
    fill(255, 0, 0);
    image(this.currentImage,
          imagePositionX, imagePositionY, blockSize, blockSize);
    if (!draw.lastLogTime) draw.lastLogTime = millis(); // 初始化时间
  if (!draw.lastPosition) draw.lastPosition = { x: this.x, y: this.y }; // 初始化位置

  let currentTime = millis();
  
  // 判断位置是否发生变化并且时间间隔是否足够
  if ((currentTime - draw.lastLogTime > 1500) && 
      (this.x !== draw.lastPosition.x || this.y !== draw.lastPosition.y)) {
    console.log('Image Position:', { x: imagePositionX, y: imagePositionY });
    draw.lastLogTime = currentTime; // 更新打印时间
    draw.lastPosition = { x: this.x, y: this.y }; // 更新打印位置
  }
  }
}

