function asynchronous(text) {
    const rand = Math.random() * (3000 - 500) + 500;
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // console.log(`${text} - ${Math.round(rand)}ms`); 
            resolve(`${text} - ${Math.round(rand)}ms`)
        }, rand)
    })
} 

asynchronous("trung anh").then(function(response) {
    console.log(response)
    return asynchronous("Trung anh1")
})
.then(function(response) {
    console.log(response)
})