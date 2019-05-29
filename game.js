function Square() {
    var _this = this;
    this.color;
    this.x;
    this.y;
    this.width;
    this.height;
    this.render = function (ctx) {
        ctx.beginPath();
        ctx.fillStyle = _this.color;
        ctx.fillRect(_this.x,_this.y,_this.width,_this.height)
    }
}

function RedSquare() {
    Square.call(this);
    var _this = this;
    this.x = 0;
    this.width = 100;
    this.height = 100;
    this.y = cvs.height - this.height;
    this.color = 'red';
    this.onkeydown = function (e) {
        e = event || window.event;
        if(e.keyCode == 37){
            if(_this.x > 0){
                _this.x -= 10;
            }else{
                _this.x = 0
            }
        }else if(e.keyCode == 39){
            if(_this.x < cvs.width - _this.width){
                _this.x += 10;
            }else{
                _this.x =  cvs.width - _this.width
            }
        }
    };
    document.onkeydown = _this.onkeydown;
}

function BlackSquare() {
    Square.call(this);
    var _this = this;
    this.arr = [100,200];
    this.height = 100;
    this.width = this.arr[ Math.floor(Math.random() * 2)];
    this.y = 0;
    this.color = 'black';
    this.setXPosition = function () {
        if(_this.width == 100){
            this.randomPosition = [0,100,200]
        }else {
            this.randomPosition = [0,100]
        }
        this.x = this.randomPosition[ Math.floor(Math.random() * this.randomPosition.length)]
    }
    _this.setXPosition();
    this.setPosition = function () {
        if(_this.y < cvs.height ){
            _this.y++;
        }
    }
}

