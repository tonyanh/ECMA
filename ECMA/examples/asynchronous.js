function asynchronous(text, cb) {
    const rand = Math.random() * (3000 - 500) + 500;
    setTimeout(function() {
        console.log(`${text} - ${Math.round(rand)}ms`); 
        cb();
    }, rand)
} 
asynchronous("trunganh", function(){
    asynchronous("trunganh1", function() {

    })
})