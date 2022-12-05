const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('OOPS error!!')
    },2500)
})

console.log('before')

promise.then((data)=> {
    console.log('1',data)
}).catch((error)=>{
    console.log(error)
})
console.log('after')