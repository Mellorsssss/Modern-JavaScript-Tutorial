function work(a,b) {
    return +a + +b;
}

function spy(func) {
    function wrapper(...args) {// args是数组对象，arguments是类数组对象，使用前者来保证可以使用join方法
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];
    return wrapper;
}

work = spy(work)
work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}



