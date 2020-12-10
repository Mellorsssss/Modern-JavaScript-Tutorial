function f(x) {
    alert(x);
}

function delay(func, delayTime){
    return function(){

        setTimeout(()=>func.apply(this, arguments), delayTime);// 箭头函数的arguments是function()的，如果使用一般的函数，
                                                               // 此处的表达会啰嗦很多
    }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"