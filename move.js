/**
 * @author [xiaoruo]
 * [startMove description]
 * @param  {[Object]} obj     [运动目标]
 * @param  {[String]} attr    [运动属性]
 * @param  {[number]} iTarget [运动结束值]
 */
function startMove(obj, attr, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var cur = 0;

        if (attr == 'opacity') {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            cur = parseInt(getStyle(obj, attr));
        }

        var speed = (iTarget - cur) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (cur == iTarget) {
            clearInterval(obj.timer);
        } else {
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;

                document.getElementById('txt1').value = obj.style.opacity;
            } else {
                obj.style[attr] = cur + speed + 'px';
            }
        }
    }, 30);
}

function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}
