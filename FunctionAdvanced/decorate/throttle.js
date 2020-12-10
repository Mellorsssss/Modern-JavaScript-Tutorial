function f(a) {
    console.log(a);
}

function throttle(func, ms){
    let calledMSBefore = false; // 用来判断是否在ms以内已经调用过方法
    let saveThis;
    let saveArgs;

    function wrapper(){
        if (calledMSBefore){// 保存上下文用于interval结束之后的调用
            [saveThis, saveArgs] = [this, arguments];
            return;
        }
        func.apply(this, arguments);
        calledMSBefore = true;
        setTimeout(function (){
            calledMSBefore = false;
            if (saveThis && saveArgs){
                wrapper.apply(saveThis, saveArgs);// 我原先的写法是直接调用func.apply，如果调用wrapper.apply更为简洁
            }
        }, ms);
    }
    return wrapper;
}

// f1000 最多每 1000ms 将调用传递给 f 一次
let f1000 = throttle(f, 1000);

f1000(1); // 显示 1
f1000(2); // (节流，尚未到 1000ms)
f1000(3); // (节流，尚未到 1000ms)