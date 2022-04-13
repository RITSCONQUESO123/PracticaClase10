//VARIABLES SE SIGUEN DECLARANDO AFUERA DE LAS FUNCIONES 
var ball;
function setup() {
  createCanvas(400,400);
  //TODAS LAS PROPIEDADES VAN AQUI
  ball = createSprite(200,200,20,20);
  console.log("Hola ")
}

function draw() 
{
  background(30);
  //TODAS LAS FUNCIONES VAN AQUI
  drawSprites();

}




