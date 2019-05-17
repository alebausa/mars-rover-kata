//Defining the object and giving it properties

var rover = {
  direction: "N", 
  x: 0, 
  y: 0
};
var x = rover.x;
var y = rover.y;

//Defining the turning
             
function turnLeft(rover){
  console.log("You have turned the Rover left");
  if(rover.direction == "N"){
      rover.direction = "W";
      console.log("Rover is now facing west");
      console.log(rover);
  } else if (rover.direction == "W"){
      rover.direction = "S";
      console.log("Rover is now facing south");
      console.log(rover);
  } else if (rover.direction == "S"){
      rover.direction = "E";
      console.log("Rover is now facing east");
      console.log(rover);
  } else if (rover.direction == "E"){
    rover.direction = "N";
      console.log("Rover is now facing north");
      console.log(rover)
    }
}

function turnRight(rover){
  console.log("You have turned the Rover right");
  if(rover.direction == "N"){
      rover.direction = "E";
      console.log("Rover is now facing east");
      console.log(rover);
  } else if (rover.direction == "E"){
      rover.direction = "S";
      console.log("Rover is now facing south");
      console.log(rover);
  } else if (rover.direction == "S"){
      rover.direction = "W";
      console.log("Rover is now facing west");
      console.log(rover);
  } else if (rover.direction == "W"){
    rover.direction = "N";
      console.log("Rover is now facing north");
      console.log(rover)
    }
}

//Defining the moving forwards 
//North is y - 1
//South is y + 1
//East is x + 1
//West is x - 1

function moveForward(rover){
  console.log("You have moved the rover forward");
  if (rover.direction == "S" && rover.y >= 0 && rover.y < 9){
    rover.y += 1;
    console.log(rover);
  } else if (rover.direction == "N" && rover.y > 0 && rover.y <= 9){
    rover.y -= 1;
    console.log(rover);
  } else if (rover.direction == "E" && rover.x >= 0 && rover.x < 9){
    rover.x += 1;
    console.log(rover);
  } else if (rover.direction == "W" && rover.x > 0 && rover.x <= 9){
    rover.x -= 1;
    console.log(rover);
  } else {
    console.log("Can't perform that movement, you are out of the grid")
  }
}

//Move backward

function moveBackward(rover){
  console.log("You have moved the rover backward");
  if (rover.direction == "S" && rover.y > 0 && rover.y <= 9){
    rover.y -= 1;
    console.log(rover);
  } else if (rover.direction == "N" && rover.y >= 0 && rover.y < 9){
    rover.y += 1;
    console.log(rover);
  } else if (rover.direction == "E" && rover.x > 0 && rover.x <= 9){
    rover.x -= 1;
    console.log(rover);
  } else if (rover.direction == "W" && rover.x >= 0 && rover.x < 9){
    rover.x += 1;
    console.log(rover);
  } else {
    console.log("Can't perform that movement, you are out of the grid")
  }
}

//Adding controls

function keyPressed(){
  if (event.key === "r"){
    turnRight(rover);
  } else if (event.key === "l"){
    turnLeft(rover);
  } else if (event.key === "f"){
    moveForward(rover);
  } else if (event.key === "b"){
    moveBackward(rover);
  } else if (event.key === "w"){
    rover.direction = "W";
    console.log(rover);
  } else if (event.key === "s"){
    rover.direction = "S";
    console.log(rover);
  } else if (event.key === "n"){
    rover.direction = "N";
    console.log(rover);
  } else if (event.key === "e"){
    rover.direction = "E";
    console.log(rover);
  } else {
    console.log("That command has no actions associated");
  }
}

function load(){
  console.log("This is where your rover is starting off:");
  console.log(rover);
}