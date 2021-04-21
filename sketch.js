var dog;
var dogHappy;
var database;
var foodS;
var foodStock;
var readStock;

function preload()
{
	dog_Img = loadImage ("images/dogImg.png")
  dog1_Img = loadImage ("images/dogImg1.png")
}

function setup() {
	createCanvas(1400, 800);
  database = firebase.database();

  dog = createSprite(700,500,10,10);

dog.addImage(dog_Img)
//dogHappy.addImage(dog1_Img)

//oodStock=database.ref('Food');
//foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock("foodS");
  dog.addImage(dogHappy);
}



  drawSprites();
  //add styles here

function readStock(data){

foods=data.val();

}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

 database.ref('/').update({

    Food:x
  })
}





}



