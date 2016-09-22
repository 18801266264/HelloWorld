//var word : string = "请输入想要输出的金字塔层数"
var num = 10;
function Pyramid(totalLine) {
    for (var currentLine = 1; currentLine <= totalLine; currentLine++) {
        var print = "";
        for (var spaceCount = totalLine - currentLine; spaceCount > 0; spaceCount--) {
            print += " ";
        }
        for (var starCount = 1; starCount <= (currentLine * 2) - 1; starCount++) {
            print += "*";
        }
        console.log(print);
    }
}
Pyramid(num);
