const race = (promisesArr)=>{
  return new Promise((res,rej)=>{
    promisesArr.forEach((promise)=>{
      Promise.resolve(promise)
      .then(res,rej)
      //or .then((resolve)=>res(promise))
      .catch(rej)
      //or .catch((error)=>rej(error))
    })
  })
}

//test

// const test1 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 500, 'one');
//   });
//   const test2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 100, 'two');
//   });
//   const test3 = new Promise(function (resolve, reject) {
//   setTimeout(reject, 200, 'three');
//   });
//   race([test1, test2, test3]).then(function (value) {
//   // first two resolve, 3rd fails, but promise2 is faster
//   console.log(value);
//   }).catch(function (err){
//   console.log(err);
//   });
