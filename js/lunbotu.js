var images=["../image/7.jpg","../image/8.jpg","../image/20170313224401.jpg"];
    var timer;
    onload = function() {
        timer = setInterval("changeImage()", 3000);
    }
    var index = 0;
    function changeImage() {
        var banner = document.getElementById("banner");
        index ++;
        banner.src = images[index % 3];
    }
    function stopImage() {
        clearInterval(timer);
    }
    function startImage() {
        timer = setInterval("changeImage()", 1000);
    }