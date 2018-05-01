export default class Checkerboard{
    
    constructor(seletor){
        
        this.distance = 100;
        this.initX = 50;
        this.initY = 50;
        this.radius = 44;
    
        let a = document.querySelector('#'+ seletor);
        
        this.drawer = a.getContext('2d');
    
        this.drawer.strokeRect(0, 0, 900, 1000);
        
        this.drawer.strokeRect(50,50,800,900);
        
        this.drawTransverLine();
        this.drawVerticalLine();
        this.drawSlashLine();
        this.drawPointLine();
        this.writeText(a);
    
        this.initChessArr();
        
    }
    
    drawLine(fx,fy,tx,ty){
        this.drawer.beginPath();
        this.drawer.moveTo(fx,fy);
        this.drawer.lineTo(tx,ty);
        this.drawer.stroke();
    }
    
    //画中间8条横线
    drawTransverLine(){
        
        let lineNum = 8;
        for (let i = 1;i <= lineNum; i++){
            this.drawLine(this.initX, i*this.distance+this.initY, lineNum*this.distance+this.initX, i*this.distance+this.initY);
        }
        
    }
    
    //画中间7条竖线
    drawVerticalLine(){
        
        for (let i = 1;i <= 7;i++){
            this.drawLine(i*this.distance+this.initX,50,i*this.distance+this.initX,450);
            this.drawLine(i*this.distance+this.initX,550,i*this.distance+this.initX,950);
        }
    }
    
    drawSlashLine(){
        
        let slashPoints = [[350, 50,550, 250], [550, 50,350, 250], [350, 750,550, 950], [550, 750,350, 950]];
        
        for (let i=0,len = slashPoints.length;i < len; i++ ){
            this.drawLine(slashPoints[i][0],slashPoints[i][1],slashPoints[i][2],slashPoints[i][3]);
        }
        
    }
    
    drawPointLine(){
        
        let drawPoints = [[150,250],[750,250],[250,350],[450,350],[650,350],[250,650],[450,650],[650,650],[150,750],[750,750]];
    
        for(let i= 0,len = drawPoints.length;i < len; i++){
            this._drawPointLine(drawPoints[i][0],drawPoints[i][1]);
        }
    
        let sidePoints = [[50,350,'left'],[50,650,'left'], [850,350,'right'],[850,650,'right']];
    
        for(let j= 0,len = sidePoints.length;j < len; j++){
            this._drawPointLine(sidePoints[j][0],sidePoints[j][1],sidePoints[j][2]);
        }
    }
    
    _drawPointLine(x,y,sideType = null){
        //point1 150 250 750 250 左上 左下 右上 右下 长度20
        //竖线
    
        //画左边线
        if(sideType === 'left'){
            this.drawLine(x+10,y-10,x+10,y-30);
            this.drawLine(x+10,y+10,x+10,y+30);
        
            this.drawLine(x+10,y-10,x+30,y-10);
            this.drawLine(x+10,y+10,x+30,y+10);
        }
        if(sideType === 'right'){
            this.drawLine(x-10,y-10,x-10,y-30);
            this.drawLine(x-10,y+10,x-10,y+30);
        
            this.drawLine(x-10,y-10,x-30,y-10);
            this.drawLine(x-10,y+10,x-30,y+10);
        }
        if(sideType == null){
            this.drawLine(x-10,y-10,x-10,y-30);
            this.drawLine(x-10,y+10,x-10,y+30);
            this.drawLine(x+10,y-10,x+10,y-30);
            this.drawLine(x+10,y+10,x+10,y+30);
    
            //横线
            this.drawLine(x-10,y-10,x-30,y-10);
            this.drawLine(x-10,y+10,x-30,y+10);
            this.drawLine(x+10,y-10,x+30,y-10);
            this.drawLine(x+10,y+10,x+30,y+10);
        }
    }
    
    writeText(checkerboard){
        this.drawer.font = "60px microsoft yahei";
        this.drawer.save(); //保存点
        // 将坐标中心作为起点
        this.drawer.translate(checkerboard.width / 2, checkerboard.height / 2);
        this.drawer.rotate(Math.PI/2);
        this.drawer.fillText("楚", -30, -270);
        this.drawer.fillText("河", -30, -150);
        this.drawer.restore();
        this.drawer.save();
        this.drawer.translate(checkerboard.width / 2, checkerboard.height / 2);
        this.drawer.rotate(Math.PI/-2);
        this.drawer.fillText("汉", -30, -270);
        this.drawer.fillText("界", -30, -150);
        this.drawer.restore();
    }
    
    initChessArr(){
    
        let Car_b1 = {x:1,y:1,text:"車"};
        let Horse_b1 = {x:2,y:1,text:"馬"};
        let Elephant_b1 = {x:3,y:1,text:"象"};
        let Scholar_b1 = {x:4,y:1,text:"士"};
        let Boss_b = {x:5,y:1,text:"将"};
        let Scholar_b2 = {x:6,y:1,text:"士"};
        let Elephant_b2 = {x:7,y:1,text:"象"};
        let Horse_b2 = {x:8,y:1,text:"馬"};
        let Car_b2 = {x:9,y:1,text:"車"};
        let Cannon_b1 = {x:2,y:3,text:"炮"};
        let Cannon_b2 = {x:8,y:3,text:"炮"};
        let Soldier_b1 = {x:1,y:4,text:"卒"};
        let Soldier_b2 = {x:3,y:4,text:"卒"};
        let Soldier_b3 = {x:5,y:4,text:"卒"};
        let Soldier_b4 = {x:7,y:4,text:"卒"};
        let Soldier_b5 = {x:9,y:4,text:"卒"};
        let Car_r1 = {x:1,y:10,text:"車"};
        let Horse_r1 = {x:2,y:10,text:"馬"};
        let Elephant_r1 = {x:3,y:10,text:"相"};
        let Scholar_r1 = {x:4,y:10,text:"仕"};
        let Boss_r = {x:5,y:10,text:"帥"};
        let Scholar_r2 = {x:6,y:10,text:"仕"};
        let Elephant_r2 = {x:7,y:10,text:"相"};
        let Horse_r2 = {x:8,y:10,text:"馬"};
        let Car_r2 = {x:9,y:10,text:"車"};
        let Cannon_r1 = {x:2,y:8,text:"炮"};
        let Cannon_r2 = {x:8,y:8,text:"炮"};
        let Soldier_r1 = {x:1,y:7,text:"兵"};
        let Soldier_r2 = {x:3,y:7,text:"兵"};
        let Soldier_r3 = {x:5,y:7,text:"兵"};
        let Soldier_r4 = {x:7,y:7,text:"兵"};
        let Soldier_r5 = {x:9,y:7,text:"兵"};
        
        this.cheer_arr_B = [Car_b1,Horse_b1,Elephant_b1,Scholar_b1,Boss_b,Scholar_b2,Elephant_b2,Horse_b2,Car_b2,
            Cannon_b1,Cannon_b2,Soldier_b1,Soldier_b2,Soldier_b3,Soldier_b4,Soldier_b5];
        this.cheer_arr_R = [Car_r1,Horse_r1,Elephant_r1,Scholar_r1,Boss_r,Scholar_r2,Elephant_r2,Horse_r2,Car_r2,
            Cannon_r1,Cannon_r2,Soldier_r1,Soldier_r2,Soldier_r3,Soldier_r4,Soldier_r5];
        
        for (let i=0,len = this.cheer_arr_B.length;i < len; i++){
            this.cheer_arr_B[i].color = "#000";
            this.cheer_arr_B[i].bgcolor = "#fff";
            this.cheer_arr_B[i].bgColor_b = "#000";
            this.cheer_arr_B[i].type = "black";
            this.drawChess(this.cheer_arr_B[i]);
            this.drawChessText(this.cheer_arr_B[i]);
        }
        
        for (let i=0,len = this.cheer_arr_R.length;i < len; i++){
            this.cheer_arr_R[i].color = "#f00";
            this.cheer_arr_R[i].bgcolor = "#fff";
            this.cheer_arr_R[i].bgColor_b = "#f00";
            this.cheer_arr_R[i].type = "black";
            this.drawChess(this.cheer_arr_R[i]);
            this.drawChessText(this.cheer_arr_R[i]);
        }
        
        
    }
    
    //画棋子
    drawChess(chess){
        
        this.drawer.beginPath();
        this.drawer.fillStyle =chess.bgcolor;
        this.drawer.strokeStyle = chess.bgColor_b;
        this.drawer.lineWidth =2;
        this.drawer.arc(chess.x*this.distance-50, chess.y*this.distance-50, this.radius, 0, Math.PI * 2, true);
        this.drawer.closePath();
        this.drawer.fill();
        this.drawer.stroke();
    }
    
    drawChessText(chess){
        this.drawer.font = "60px microsoft yahei";
        this.drawer.fillStyle = chess.color;
        let offset = this.drawer.measureText(chess.text).width/2;
        this.drawer.fillText(chess.text, chess.x*this.distance-offset-50, chess.y*this.distance+20-50);
    }
}
