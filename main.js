canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_array = ["Pic 1.jpg", "Pic 2.jpg" , "Pic 3.jpg"];
random_number = Math.floor(Math.random() * 3)

console.log("Value of the Random_number is" + random_number);

rover_width = 100;
rover_height = 90;

// background_image = "mars.jpg"; 
background_image = nasa_array[random_number];
console.log("Background Image is =" + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '37') {
        left();
        console.log("Left");
    }

    if (keypressed == '38') {
        up();
        console.log("Up");
    }

    if (keypressed == '39') {
        right();
        console.log("Right");
    }

    if (keypressed == '40') {
        down();
        console.log("Down");
    }
}

function up() {
    if (rover_y >=0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x =" + rover_x + ", y =" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (rover_y <=500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x =" + rover_x + ", y =" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if (rover_x >=0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x =" + rover_x + ", y =" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (rover_x <=700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x =" + rover_x + ", y =" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

