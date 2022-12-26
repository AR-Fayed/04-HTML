
class Bishop {
    color;
    coordinates;
    constructor(color,coordinates){
        this.color=color;
        this.coordinates=coordinates;
    }
    canMove(x,y){
       return true;
    }
    moveBy(x,y){
        this.coordinates[0] = x;
        this.coordinates[1] = y;
    }
}
let Bishop = new Bishop("white",[3,1]);