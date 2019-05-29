var gGame = null;
var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');
function onLoad() {
    gGame = new Game();
    gGame.update();
    gGame.loop();
}
function Game() {
     var _this = this;
     this.redSquare = new RedSquare();
     this.blackSquare = [];
     this.frame = 0;
     this.lastFrame = 0;
     this.CDTime = 500;
     this.flag = 1;
     this.update = function () {
         _this.blackSquare.push(new BlackSquare());
     };
     this.render = function (ctx) {
         ctx.clearRect(0,0,cvs.width,cvs.height);
         _this.redSquare.render(ctx);
         _this.blackSquare.forEach(function (val) {
             val.setPosition();
             val.render(ctx);
         })
     };
     /*重绘每一帧*/
     this.loop = function () {
          ++_this.frame;
         _this.render(ctx);
         if(_this.frame > _this.lastFrame + _this.CDTime) {
             _this.update();
             _this.lastFrame = _this.frame;
         }
         /*_this.blackSquare.forEach(function (val,index) {
             if(val.y > cvs.height){
                 _this.blackSquare.splice(index,1)
             }
         })*/
         _this.blackSquare.forEach(function (val) {
             if(Math.abs(val.x - _this.redSquare.x )< 100 && Math.abs(val.y - _this.redSquare.y )< 100) {
                 _this.flag = 0;
             }
         });
         if(_this.flag == 1){
             window.requestAnimationFrame(_this.loop);
         }
     }
}
