var countdownBtn = document.getElementById("countdownBtn");
var dialog = document.getElementById('dialog');
var closeBtn = document.getElementById("closeBtn");
var startBtn = document.getElementById('startBtn');
var countdown = document.getElementById('countdown');
var COUNT_DOWN_NUM = 60;
closeBtn.onclick = () => {
    dialog.style.visibility = "hidden";
}
countdownBtn.onclick = () => {
    dialog.style.visibility = "visible";
}
startBtn.onclick = () => {
    dialog.style.visibility = "hidden";
    countdown.style.visibility = 'visible';
    countdownClock();
}
var countdownClock = () => {
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var minutesNum = Math.floor(COUNT_DOWN_NUM/60);
    var secondsNum = Math.floor(COUNT_DOWN_NUM%60);
    var interval =  setInterval(()=> {
        if(minutesNum == 0 && secondsNum <=10) countdown.style.color = 'red';
        if(secondsNum > 0) secondsNum --;
        else {
            if(minutesNum>0) {
                secondsNum = 59;
                minutesNum --;
            } else {
                clearInterval(interval);
                countdown.style.visibility = 'hidden';
            }
        }
        var minutesString = minutesNum > 9 ? (''+minutesNum) : ('0'+minutesNum);
        var secondsString = secondsNum > 9 ? (''+secondsNum) : ('0'+secondsNum);
        minutes.innerHTML = minutesString;
        seconds.innerHTML = secondsString;
    },1000)

}

//点击对话框外区域 关闭对话框
window.onclick = (e) => {
    closeDialog(e)
}
var closeDialog = (e) => {
    if(dialog.style.visibility === 'visible') {


        var dialogPos = dialog.getBoundingClientRect();
        var countdownBtnPos = countdownBtn.getBoundingClientRect();
        var leftBtn = countdownBtnPos.left;
        var rightBtn = countdownBtnPos.right;
        var topBtn = countdownBtnPos.top;
        var bottomBtn = countdownBtnPos.bottom;

        var left = dialogPos.left;
        var right = dialogPos.right;
        var top = dialogPos.top;
        var bottom = dialogPos.bottom;

        var clickX = e.x;
        var clickY = e.y;
        if((clickX<left || clickX>right || clickY<top || clickY>bottom) &&
        (clickX<leftBtn || clickX>rightBtn || clickY<topBtn || clickY>bottomBtn)) {
            dialog.style.visibility = 'hidden';
        }
    }
}

//画Logo
var draw = () => {
	var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');


	ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 8;
    var x = 4
	ctx.moveTo(4, 4+20);
	ctx.lineTo(4, 4+60);
	ctx.lineTo(4+34.641, 4+80);
	ctx.lineTo(4+69.282, 4+60);
	ctx.lineTo(4+69.282, 4+20);
    ctx.lineTo(4+34.641, 4+0);
    ctx.lineTo(4, 4+20);
    ctx.closePath();
    ctx.stroke()


    ctx.beginPath();
    ctx.fillStyle = 'rgb(237, 64, 87)';
    var x = 4
	ctx.moveTo(4, 4+20);
	ctx.lineTo(4, 4+60);
	ctx.lineTo(4+34.641, 4+80);
	ctx.lineTo(4+69.282, 4+60);
	ctx.lineTo(4+69.282, 4+20);
    ctx.lineTo(4+34.641, 4+0);
    ctx.lineTo(4, 4+20);
    ctx.fill()

    ctx.fillStyle = "white"
    ctx.font = "20px serif";
    ctx.textAlign = 'center';
    ctx.fillText("西瓜",40,40);
    ctx.fillText("创客",40,60);


}
window.onload = draw;