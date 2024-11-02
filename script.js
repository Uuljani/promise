

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data =["Banana","orange"];
      resolve(data)
      reject()
    }, 300);
  });

  promise1.then((data) => {
    data.push("mango");
    return data
  })
  .then((data) => {
    console.log(data)
  })
  
