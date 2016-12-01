/**
 * Created by 10192141 on 2016/9/2.
 */
var num = 1; // 4 * 4的块
var state = []; // status 变量名不可用？？？

function onClicked(obj) {
    var id = obj.id.split("-");
    var row = parseInt(id[0]);
    var column = parseInt(id[1]);
    if (obj.className == 'btn') {
        obj.className = 'clickedBtn';
        obj.innerHTML = "O";
        state[row][column] = 1;
    } else {
        obj.className = 'btn';
        obj.innerHTML = "×";
        state[row][column] = 0;
    }
    changeNeighbor(row, column);
    checkState();
}

function changeStatus(obj) {
//    var obj = object[0];//jquery 对象转为 document对象
    var id = obj.id.split("-");
    var row = parseInt(id[0]);
    var column = parseInt(id[1]);
    if (obj.className == 'btn') {
        obj.className = 'clickedBtn';
        obj.innerHTML = "O";
        state[row][column] = 1;
    } else {
        obj.className = 'btn';
        obj.innerHTML = "×";
        state[row][column] = 0;
    }
}


/**从语言角度来说，javascript不支持函数重载**/
function change(row, column) {
    if (0 <= row && row < num && column >= 0 && column < num) {
        state[row][column] = state[row][column] ^ 1;
        changeStatus(document.getElementById(row + "-" + column));  //$("#" + row + "-" + column)  jquery对象
    }
}

function changeNeighbor(row, column) {
    change(row - 1, column);
    change(row + 1, column);
    change(row, column - 1);
    change(row, column + 1);
}

function checkState() {
    if (state && state.length) {
        for (var i = 0; i < state.length; i++) {
            if (state[i] && state.length) {
                for (var j = 0; j < state.length; j++) {
                    if (state[i][j] == 0)
                        return false;
                }
            }
        }
    }
    alert(" You Win!");
    return true;
}

function appendBtn(num) {
    var btnArea = $(".btnArea");
    btnArea.empty();  //删除匹配的元素集合中所有的子节点。
    state = []; //清空状态
    for (var j = 0; j < num; j++) {
        var div = $("<div></div>");
        state[j] = [];
        for (var i = 0; i < num; i++) {
            state[j][i] = 0;
            btnArea.append(div);
            var btn = $("<button></button>");
            btn.attr("id", j + "-" + i);
            btn.addClass("btn");
            btn.text("×");
            div.append(btn);
        }
    }
    btnArea.css("width", num * 58);
    btnArea.css("height", num * 58);
    $(".btnArea button").on("click", function () {
        onClicked(this);
    });
}

function levelUp() {
    if (num < 10) {
        num = num + 1;
        appendBtn(num);
    }
}

function levelDown() {
    if (num > 1) {
        num -= 1;
        appendBtn(num);
    }
}

$(function () {
    appendBtn(num);
});