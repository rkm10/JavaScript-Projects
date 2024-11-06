function outer() {
    c = 3;
    function out(b) {
        function inner() {
            console.log(a, b, c);
        }
        var a = 2;
        return inner();
    }
    return out;
}

var a = 100;

var abc = outer()("rajkumar");