/* Callback for when the button is clicked */
var callback = function() {
    /* Change some styles */
    this.parentElement.style.marginTop = "10%";
    this.style.display = "none";

    /* CONSTANTS */
    var CANVAS_WIDTH = 800;
    var CANVAS_HEIGHT = 600;

    var STICKMAN_WIDTH = 181;
    var STICKMAN_HEIGHT = 229;

    var GROUND_Y = 540;

    var STICKMAN_Y_ACCELERATION = 0.125;
    var STICKMAN_JUMP_SPEED = 250;
	
	/* OLD VALUE: 0.0001 */
	var SPEED_INCREASE = 1 / 250;

    var SPACE_KEY_CODE = 32;
	
	var HITS_PER_SECOND = 36;

    /* OOP */
    class Person {
		#canCurrentlyJump;
		#ableToJump;

        constructor(imageObj, x, y, ySpeed, canCurrentlyJump, ableToJump) {
            this.image = imageObj;
            this.x = x;
            this.y = y;
			this.lives = 3 * HITS_PER_SECOND;
			this.score = 0;
            this.ySpeed = ySpeed;
            this.#canCurrentlyJump = canCurrentlyJump;
            this.#ableToJump = ableToJump;
        }

        draw() {
            c.drawImage(this.image, this.x, this.y);
        }

        update() {
			this.#canCurrentlyJump = (this.y < (GROUND_Y - STICKMAN_HEIGHT)) ? false : true;
			
            this.ySpeed += STICKMAN_Y_ACCELERATION;
            this.y += this.ySpeed;
			if (this.y > ((GROUND_Y - STICKMAN_HEIGHT))) {
				this.y = (GROUND_Y - STICKMAN_HEIGHT);
				this.ySpeed = 0;
			}
			
			if (spaceKeyPressed && this.#canCurrentlyJump && this.#ableToJump) {
				this.y -= STICKMAN_JUMP_SPEED;
			}
        }
    }
	
	class Enemy {
		#xSpeed;
		
		constructor(imageObj, x, y) {
			this.image = imageObj;
            this.x = x;
            this.y = y;
			this.xSpeed = 5;
			this.hitAStickman = false;
        }
		
		draw() {
			c.drawImage(this.image, this.x, this.y);
		}
		
		update() {
			this.xSpeed += SPEED_INCREASE;
			this.x -= this.xSpeed;
			
			if (parseInt(this.x) >= stickman.x && 
				parseInt(this.x) <= stickman.x + STICKMAN_WIDTH && 
				this.y >= stickman.y &&
				this.y <= stickman.y + STICKMAN_HEIGHT) {
				startTimer = true;
				this.hitAStickman = true;
				x = 0;
				
				var newImg = new Image();
				newImg.src = "./images/stickman-hit.png";
				
				stickman.image = newImg;
				
				stickman.lives -= 1;
			}
		}
	}
	
	/* Rand Numbers */
	var randomInteger = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	};

    /* SETUP */
    var canvas = document.createElement("canvas");
    var c = canvas.getContext("2d");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    document.body.prepend(canvas);

    var stickmanImage = new Image();
    stickmanImage.src = "./images/stickman.png";

    var stickman = new Person(stickmanImage, 50, 40, 0, true, true);
	var spaceKeyPressed = false;
	
	var enemies = [];
	var enemyImage = new Image();
	enemyImage.src = "./images/enemy.png"
	enemyImage.width = STICKMAN_WIDTH;
	enemyImage.height = STICKMAN_HEIGHT;
	
	var x = 0;
	var startTimer = false;

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    function start() {
        window.requestAnimationFrame(mainLoop);
    }

    /* MAIN LOOP */
    function mainLoop() {
        update();
		spawn();
        draw();
        window.requestAnimationFrame(mainLoop);
    }


    /* PLAYER INPUT */
    function onKeyDown(event) {
        if (event.keyCode === SPACE_KEY_CODE) {
            spaceKeyPressed = true;
        }
    }

    function onKeyUp(event) {
        if (event.keyCode === SPACE_KEY_CODE) {
            spaceKeyPressed = false;
        }
    }

    /* UPDATING */
    function update() {
		if(startTimer) {
			x++;
		}
		
		if (x >= 2 * 60) {
			startTimer = false;
			x = 0;
			
			var newImg = new Image();
			newImg.src = "./images/stickman.png";
			
			stickman.image = newImg;
		}
		
		for(var i = 0; i < enemies.length; i++) {
			enemies[i].update();
		}
        stickman.update();
    }
	
	/* SPAWNING */
	function spawn() {
		for(var i = 0; i < 3; i++) {
			if(enemies.length < 3) {
				var enemy = new Enemy(enemyImage, CANVAS_WIDTH + ((i + 1) * randomInteger(500, 700)), (GROUND_Y - STICKMAN_HEIGHT + 50));
				enemies.push(enemy);
			}
		}
		
		for(var i = 0; i < enemies.length; i++) {
			if(enemies[i].x <= 0) {
				!enemies[i].hitAStickman ? stickman.score += 1 : null;
				enemies.splice(i, 1);
			}
		}
	}

    /* DRAWING */
    function draw() {
        c.fillStyle = "LightSkyBlue";
        c.fillRect(0, 0, CANVAS_WIDTH, GROUND_Y - 40);

        c.fillStyle = "ForestGreen";
        c.fillRect(0, GROUND_Y - 40, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y + 40);

        stickman.draw();
		
		for(var i = 0; i < enemies.length; i++) {
			enemies[i].draw();
		}
		
		c.fillStyle = "Black";
		c.font = "30px Comic Sans MS";
		c.textAlign = "left";
		stickman.lives = stickman.lives <= 0 ? 0 : stickman.lives;
		c.fillText(`Lives: ${Math.floor(stickman.lives / 36)}`, 10, 50);
		c.fillText(`Score: ${stickman.score}`, 200, 50);
		
		if(stickman.lives <= 0) {
			c.fillStyle = "Black";
			c.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
			c.fillStyle = "Red";
			c.font = "100px Chiller";
			c.textAlign = "center";
			c.fillText("GAME OVER", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
		}
    }

    /* START */
    start();
};

/* Deal with the button being clicked */
var btn = document.getElementById("play");
btn.addEventListener("click", callback);