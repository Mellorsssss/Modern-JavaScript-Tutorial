function debounce(func, debounceTime){
    let lastCallTimeId;
    return function(){
        clearTimeout(lastCallTimeId); // 即使lastCallTimeId对应的call已经完成，此处也不会出错；
                                      // 换而言之，clearTimeout的参数并没有那么重要
        lastCallTimeId = setTimeout(()=>func.apply(this, arguments), debounceTime);
    }
}

let f = debounce(alert, 1000);

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500); 
setTimeout(()=>f("d"), 1600);