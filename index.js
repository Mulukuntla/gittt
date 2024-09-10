function task1() {
  return new Promise(function (resolve, reject) {
      setTimeout(() => {
          resolve("Task 1 completed")
      
  }, 2000);
      
  })
 
}

function task2() {
  return new Promise(function (resolve, reject) {
      setTimeout(() => {
          resolve("Task 2 completed")
      
  }, 1000);
      
  })
  
}

function allTasksCompleted() {
  console.log('All tasks completed');
}

task1().then(function (result) {
  console.log(result)
  task2().then(function (result) {
      console.log(result)
      allTasksCompleted()
  })
})




// change task1 and task2 function and return promise from them

function task1(callback) {
  setTimeout(() => {
      console.log('Task 1 completed');
      callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
      console.log('Task 2 completed');
      callback();
  }, 1000);
}

function allTasksCompleted() {
  console.log('All tasks completed');
}




task1(() => {
  task2(() => { 
          allTasksCompleted();
  });
});



// resolve the above callback hell issue with promises