<template>
    <section class="checkerboard-wrap">
        <canvas id="checkerboard" width="900" height="1000"></canvas>
    </section>
</template>
<script>
    export default{
        name : 'Checkerboard',
        data(){
            return {
                drawing:''
            }
        },
        methods:{
            drawLine(fx,fy,tx,ty){
                if(fx < tx){
                    let leftLine = setInterval(() => {
                        if (fx < tx) {
                            this.drawing.beginPath();
                            this.drawing.moveTo(fx, fy);
                            this.drawing.lineTo(fx += 100, ty);
                            this.drawing.stroke();
                        }else{
                            clearInterval(leftLine);
                        }
                    },200)
                }else {
                    let rightLine = setInterval(() => {
                        if (fx > tx) {
                            this.drawing.beginPath();
                            this.drawing.moveTo(fx, fy);
                            this.drawing.lineTo(fx -= 100, ty);
                            this.drawing.stroke();
                        }else{
                            clearInterval(rightLine);
                        }
                    },200)
                }
            },
            drawVerLine(fx,fy,tx,ty){
                if (fy < ty){
                    let upLine = setInterval(() => {
                        if (fy < ty){
                            this.drawing.beginPath();
                            this.drawing.moveTo(fx,fy);
                            this.drawing.lineTo(tx,fy+=50);
                            this.drawing.stroke();
                        }else{
                            clearInterval(upLine);
                        }
                    },100)
                }else{
                    let downLine = setInterval(() => {
                        if (fy > ty){
                            this.drawing.beginPath();
                            this.drawing.moveTo(fx,fy);
                            this.drawing.lineTo(tx,fy-=50);
                            this.drawing.stroke();
                        }else{
                            clearInterval(downLine);
                        }
                    },100)
                }

            },
            //画斜线 350 50 550 250  550 50 350 250   550 950 350 750  350 950 550 750
            drawSlash(fx,fy,tx,ty){
                if(fx < tx){
                    if (fy < ty){
                        //350 50 550 250
                        let aTime = setInterval(() => {
                            if (fx < tx){
                                this.drawing.beginPath();
                                this.drawing.moveTo(fx, fy);
                                this.drawing.lineTo(fx += 100, fy += 100);
                                this.drawing.stroke();
                            }else{
                                clearInterval(aTime);
                            }
                        },100)
                    }else{
                        //350 950 550 750
                        let aTime = setInterval(() => {
                            if (fx < tx){
                                this.drawing.beginPath();
                                this.drawing.moveTo(fx, fy);
                                this.drawing.lineTo(fx += 100, fy -= 100);
                                this.drawing.stroke();
                            }else{
                                clearInterval(aTime);
                            }
                        },100)
                    }
                }
                //550 50 350 250 550 950 350 750
                if(fx > tx ){
                    if (fy > ty){
                        let aTime = setInterval(() => {
                            if (fy > ty){
                                this.drawing.beginPath();
                                this.drawing.moveTo(fx, fy);
                                this.drawing.lineTo(fx -= 100, fy -= 100);
                                this.drawing.stroke();
                            }else{
                                clearInterval(aTime);
                            }
                        },100)
                    }else{
                        let aTime = setInterval(() => {
                            if (fy < ty){
                                this.drawing.beginPath();
                                this.drawing.moveTo(fx, fy);
                                this.drawing.lineTo(fx -= 100, fy += 100);
                                this.drawing.stroke();
                            }else{
                                clearInterval(aTime);
                            }
                        },100)
                    }
                }
            },
            drawPointLine(x,y){
                //point1 150 250 750 250 左上 左下 右上 右下 长度20
                //竖线
                this.drawpoin(x-10,y-10,x-10,y-30);
                this.drawpoin(x-10,y+10,x-10,y+30);
                this.drawpoin(x+10,y-10,x+10,y-30);
                this.drawpoin(x+10,y+10,x+10,y+30);

                //横线
                this.drawpoin(x-10,y-10,x-30,y-10);
                this.drawpoin(x-10,y+10,x-30,y+10);
                this.drawpoin(x+10,y-10,x+30,y-10);
                this.drawpoin(x+10,y+10,x+30,y+10);

            },
            drawPointSideLine(x,y,sideType){

                //画左边线
                if(sideType == 'left'){
                    this.drawpoin(x+10,y-10,x+10,y-30);
                    this.drawpoin(x+10,y+10,x+10,y+30);

                    this.drawpoin(x+10,y-10,x+30,y-10);
                    this.drawpoin(x+10,y+10,x+30,y+10);
                }
                if(sideType == 'right'){
                    this.drawpoin(x-10,y-10,x-10,y-30);
                    this.drawpoin(x-10,y+10,x-10,y+30);

                    this.drawpoin(x-10,y-10,x-30,y-10);
                    this.drawpoin(x-10,y+10,x-30,y+10);
                }
                //画右边线

            },
            drawpoin(fx,fy,tx,ty){
                this.drawing.beginPath();
                this.drawing.moveTo(fx,fy);
                this.drawing.lineTo(tx,ty);
                this.drawing.stroke();
            },
            writeText(checkerboard){
                this.drawing.font = "60px microsoft yahei";
                this.drawing.save(); //保存点
                // 将坐标中心作为起点
                this.drawing.translate(checkerboard.width / 2, checkerboard.height / 2);
                this.drawing.rotate(Math.PI/2);
                this.drawing.fillText("楚", -30, -270);
                this.drawing.fillText("河", -30, -150);
                this.drawing.restore();
                this.drawing.save();
                this.drawing.translate(checkerboard.width / 2, checkerboard.height / 2);
                this.drawing.rotate(Math.PI/-2);
                this.drawing.fillText("汉", -30, -270);
                this.drawing.fillText("界", -30, -150);
                this.drawing.restore();
            }

        },
        mounted(){
            let checkerboard = document.querySelector('#checkerboard');

            this.drawing = checkerboard.getContext('2d');

            this.drawing.strokeRect(0, 0, 900, 1000);

            this.drawing.strokeRect(50,50,800,900);

            //画河线 黑红
            this.drawLine(50,450,850,450);
            this.drawLine(850,550,50,550);

            //画兵线
            this.drawLine(50,350, 850, 350);
            this.drawLine(850,650,50,650);

            //画炮线
            this.drawLine(50, 250, 850,250);
            this.drawLine(50, 150, 850,150);

            this.drawLine(850, 750,50,750);
            this.drawLine(850, 850,50,850);



            //this.drawVerLine(850, 950,850,550);
            setTimeout(() => {
                //画竖线
                this.drawVerLine(150, 50,150,450);
                this.drawVerLine(250, 50,250,450);
                this.drawVerLine(350, 50,350,450);
                this.drawVerLine(450, 50,450,450);
                this.drawVerLine(550, 50,550,450);
                this.drawVerLine(650, 50,650,450);
                this.drawVerLine(750, 50,750,450);

                this.drawVerLine(750, 950,750,550);
                this.drawVerLine(650, 950,650,550);
                this.drawVerLine(550, 950,550,550);
                this.drawVerLine(450, 950,450,550);
                this.drawVerLine(350, 950,350,550);
                this.drawVerLine(250, 950,250,550);
                this.drawVerLine(150, 950,150,550);
            },1000);

            //画斜线 350 50 550 250  550 50 350 250   550 950 350 750  350 950 550 750
            setTimeout(() => {
                this.drawSlash(350, 50, 550, 250);
                this.drawSlash(550, 50, 350, 250);

                this.drawSlash(550, 950, 350, 750);
                this.drawSlash(350, 950, 550, 750);
            },1000);

            //画折线点
            setTimeout(() => {
                let drawPoints = [[150,250],[750,250],[250,350],[450,350],[650,350],[250,650],[450,650],[650,650],[150,750],[750,750]];

                for(let i= 0,len = drawPoints.length;i < len; i++){
                    this.drawPointLine(drawPoints[i][0],drawPoints[i][1]);
                }

                let sidePoints = [[50,350,'left'],[50,650,'left'], [850,350,'right'],[850,650,'right']];

                for(let j= 0,len = sidePoints.length;j < len; j++){
                    this.drawPointSideLine(sidePoints[j][0],sidePoints[j][1],sidePoints[j][2]);
                }

            },2000);

            setTimeout(() => {
                this.writeText(checkerboard);
            },2500)

            checkerboard.onclick = function (e) {
                //Math.sqrt(Math.pow(temp_i-ev.offsetX,2)+Math.pow(temp_j-ev.offsetY,2));

                let p = {x:e.layerX,y:e.layerY}
                console.log(p)
            }


        }
    }
</script>
<style lang="scss">
    .checkerboard-wrap{
        width: 100%;
        height: 100%;
        padding: 0 0 0 220px;
        min-width: 1200px;
        text-align: center;
    }
</style>