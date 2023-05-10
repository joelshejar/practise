const myPromiseAll = (taskList) => {
  const results = []
  let promisesCompleted = 0

  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index)=>{
      promise.then((result)=>{
        results[index] = result
        promisesCompleted+=1
        if(promisesCompleted === taskList.length){
          resolve(results)
        }
      })
      .catch((error)=>{
        reject(error)
      })
    })
  })
}

//test
function task(time) {
return new Promise(function (resolve, reject) {
setTimeout(function () {
resolve(time);
}, time);
});
}
const taskList = [task(1000), task(5000), task(3000)];
//run promise.all
myPromiseAll(taskList)
.then(results => {
console.log("got results", results)
})
.catch(console.error);