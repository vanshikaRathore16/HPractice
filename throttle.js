function search(words){
    console.log(words);
}
function throttle(fun,delay){
    let lastcall = 0;
    let time = Date.now();
    return function(...args){
       if(time - lastcall < delay){
        return
       }
       lastcall = time;
       return fun(...args);
    }
}

const funwithTro = throttle(search,5000);
funwithTro("hi");
funwithTro("hii");
funwithTro("hiiii");
funwithTro("hiiiiii");
funwithTro("hiiiiiiii")