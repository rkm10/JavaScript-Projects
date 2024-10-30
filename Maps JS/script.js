function a() {
    var d = 69;
    console.log(b);
    c();
    function c() {
        console.log(d);
    }
}

var b = 100;
a(); 