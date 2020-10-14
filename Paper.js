class Paper{

constructor(x,y){

    var options={
     
     isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:5
    

    }
    this.body=Bodies.circle(x,y,10,options);
    this.radius=10;
    World.add(world,this.body);



}
display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
fill("red");
circle(0,0,this.radius);
pop();
}



}
