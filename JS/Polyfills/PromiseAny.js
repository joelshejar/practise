const any = (promisesArray) =>{
  const promiseErrors = Array.create(promisesArray.length)
  let counter = 0

  return new Promise((res,rej)=>{
    promisesArray.forEach((promise)=>{
      promise.then((result)=>{
        res(result)
      })
      .catch((error)=>{
        counter+=1
        promiseErrors[counter] = error
        if(counter === promisesArray.length){
          rej(promiseErrors)
        }
      })
    })
  })
}

//test

const testOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("one");
  }, 500);
});
const testTwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("two");
  }, 600);
});
const testThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("three");
  }, 200);
});

any([testOne, testTwo, testThree])
  .then(function (value) {
    // first and third fails, 2nd resolves
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });