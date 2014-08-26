$(function () {
    var proto = { min: 0, max: 360 };
    var degSlider = $("#degrees .slider").slider(proto),
        radSlider = $("#radians .slider").slider(proto),
        ctx = document.getElementById('circle').getContext('2d');
       
    setBoth(0);
    function setBoth(d) {
        var r = Math.PI*d/180;
        degSlider.slider("value", d);
        radSlider.slider("value", d);
        $("#degrees .display").val(d);
        $("#radians .display").val(r);
        ctx.clearRect(0,0,200,200);
        ctx.beginPath();
        ctx.arc(100,100,75,0,Math.PI*2,true);
        ctx.stroke();
        
        ctx.fillStyle = "#8ed6ff";
        ctx.moveTo(175,100);
        ctx.beginPath();
        ctx.arc(100,100,75,0,-r,true);
        ctx.lineTo(100,100);
        ctx.closePath();
        ctx.fill();
    }
    
    $(".slider").on("slide", function onChange(event, ui) {
        console.log(ui.value);
        setBoth(ui.value);
    });
       
});
