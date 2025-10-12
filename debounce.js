function search(words){
    console.log(words);
}

function debounce(fun,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fun.apply(this,args);
        },delay)
    }
}

const debounceFuncation = debounce(search,1000);
debounceFuncation("h");
debounceFuncation("he");
debounceFuncation("hel");
debounceFuncation("hell");
debounceFuncation("hello");