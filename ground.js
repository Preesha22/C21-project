class Ground
{
    constructor(){
        this.x = 500
        this.y = 900
        this.w = 1900
        this.h = 10
    }

 display() {
   rect(this.x, this.y, this.w, this.h);
}
}