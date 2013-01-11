(function(){
    window.distance = function(xy1, xy2) {
        var dx = (xy1[0] - xy2[0])
        var dy = (xy1[1] - xy2[1])
        return Math.pow(Math.pow(dx, 2) + Math.pow(dy, 2), 0.5)
    }
})()
