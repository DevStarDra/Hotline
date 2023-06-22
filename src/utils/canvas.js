import { StarPurple500 } from "@mui/icons-material";

const sw = 210;
const sh = 250;
const ratio = 0.3;
const DrawRectangle = [ 
  {
    sx: 224,
    sy: 264,
  },
  {
    sx: 4,
    sy: 4,
  },
  {
    sx: 224,
    sy: 4,
  },
];

const MAX_LENGTH = 10000;
const MIN_INDEX = 20;
const MAX_INDEX = 50;
const delta = sw*ratio+5;

export class GameCanvas {
  constructor(id, image) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.originImage = image;
    this.betlist = [];
    this.slidePerColumn = this.canvas.width/(delta);
  }

  drawImage(index, x, y) {
    // Draw the cut portion of the image to the canvas
    this.ctx.drawImage(
      this.originImage,
      DrawRectangle[index].sx,
      DrawRectangle[index].sy,
      sw,
      sh,
      x,
      y,
      sw * ratio,
      sh * ratio
    );
  }

  drawInit(){ 
    this.clear();
    this.generateRandomList();
    this.drawImageWithStartPos(0);
  }

  drawGold(x, y) {
    this.ctx.drawImage(
      this.originImage,
      4,
      264,
      sw,
      sh,
      x,
      y,
      sw * ratio,
      (sh + 10) * ratio
    );
  } 
  drawRectAnimation(index, x, y, depth){ 
    if(depth > 6) return;  
    this.drawImage(index, x, y);
    if(depth % 2 == 0) this.drawGold(x,y);
    setTimeout(()=>{
        this.drawRectAnimation(index, x, y, depth + 1);
    }, depth*40);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawWithAnimation(value, callback){
    console.log(value);
    this.generateRandomList(); 
    let finalIndex = this.findIndex(value);
    let index1 = finalIndex - 5;

    // let index2 = finalIndex - Math.floor(Math.random()*10); 
    console.log(finalIndex, index1);
    let y = (this.canvas.height - sh*ratio)/2;
    this.clear(); 
    let count = 0, startPos = 0, speed = 25*delta/40*0.3, state = 0 , speed2 = 100;
    let animation1 = setInterval(()=>{
        this.clear();
        this.drawImageWithStartPos(startPos);
        startPos += speed; 
        if(speed < 25*delta/40) speed *= 1.05;
        if(startPos + speed >= delta*(finalIndex + 1- Math.floor(this.slidePerColumn/2))) {   
            setTimeout(()=>{
                // this.drawImageWithStartPos(startPos);  
                    let speed3 = 25*delta/40*0.1;
                    let animation3 = setInterval(()=>{
                        startPos -= speed3; 
                        this.clear();
                        this.drawImageWithStartPos(startPos)
                        if(startPos + speed3 <= delta*(finalIndex-Math.floor(this.slidePerColumn/2))){
                            this.clear();
                            startPos += -25;
                            this.drawImageWithStartPos(startPos);
                            // setTimeout(()=>{ 
                                console.log('draw rect')
                                this.drawRectAnimation(this.betlist[finalIndex], finalIndex*delta - startPos, y, 0);
                                callback();
                            // }, 100)
                            // this.drawRectAnimation();
                            clearInterval(animation3);
                        }
                    }, 40);
                    // let animation2 = setInterval(()=>{  
                    //     startPos += speed2; 
                    //     this.clear()
                    //     this.drawImageWithStartPos(startPos);
                    //     if(startPos + speed2 >= delta*(finalIndex-1-Math.floor(this.slidePerColumn/2))){ 
                    //         let speed3 = 25*delta/40*0.05;
                    //         let animation3 = setInterval(()=>{
                    //             startPos += speed3; 
                    //             this.clear();
                    //             this.drawImageWithStartPos(startPos)
                    //             if(startPos + speed3 >= delta*(finalIndex-Math.floor(this.slidePerColumn/2))){
                    //                 this.clear();
                    //                 startPos += -25;
                    //                 this.drawImageWithStartPos(startPos);
                    //                 // setTimeout(()=>{ 
                    //                     console.log('draw rect')
                    //                     this.drawRectAnimation(this.betlist[finalIndex], finalIndex*delta - startPos, y, 0);
                    //                 // }, 100)
                    //                 // this.drawRectAnimation();
                    //                 clearInterval(animation3);
                    //             }
                    //         }, 40);
                    //         clearInterval(animation2);
                    //     }
                    // }, 40);
            }, 40);
            clearInterval(animation1);
        }
    }, 40);
    // startPos = 0 ;
    // speed2 = 25*delta/40*0.1;
    // let animation2 = setInterval(()=>{  
    //     startPos += speed2;
    //     // speed2 ;
    //     this.clear()
    //     this.drawImageWithStartPos(startPos);
    //     if(startPos + speed2 >= delta*index1){
    //         clearInterval(animation2);
    //     }
    // }, 40);

    // this.drawRectAnimation(value, Math.floor(slidePerColumn/2)*delta -20, y, 0);
  }

  drawImageWithCenterIndex(centerIndex, prevDelta){
    let stIndex = Math.floor(centerIndex - this.slidePerColumn/2);
    if(stIndex < 0) return;
    let y = (this.canvas.height - sh*ratio)/2;
    for(let i = stIndex; i < stIndex + this.slidePerColumn; i ++){
        this.drawImage(this.betlist[i], (i-stIndex)*delta, y);
    }
  }

  drawImageWithStartPos(startPos){
    let y = (this.canvas.height - sh*ratio)/2;
    for(let i = 0; i < MAX_LENGTH; i ++){
        this.drawImage(this.betlist[i], i*delta - startPos, y);
    }
  }

  generateRandomList(){
    this.betlist = []; 
    for(let i = 0; i < MAX_LENGTH; i ++){
        if(i%2==0) this.betlist.push(0);
        else this.betlist.push(1);
        if(i%20==0){
            this.betlist.push(2); 
        }
    }
  }

  findIndex(value){
    let startIndex = MIN_INDEX + Math.floor(Math.random() * (MAX_INDEX - MIN_INDEX)/2); 
    for(let i = startIndex; i < MAX_INDEX; i ++){
        if(value == this.betlist[i]) return i;
    }
  }
}
