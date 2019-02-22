const request = require("request");
//fs = file system built into nodejs
const fs = require("fs");

// Note: we're going to be using fakeAxios instead of axios. It's just a simulation.
// It doesn't really contact the internet so it's much faster. It uses promises
// so should get the point across exactly the same.
const fakeAxios = require("./fakeAxios");

// What order are these printed in? Draw a picture like from the video.
// Think about it, then uncomment it and run it.
// How could we change it?
// console.log("1");
// fakeAxios.get("some url").then(response => {
//   console.log("2");
// });
// console.log("3");

// Look, it's the same with async callbacks. Think about it, then uncomment it and run it.
// console.log("1");
// setTimeout(() => console.log("2"), 100);
// console.log("3");

// Watch this video until 17:30:
// https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en

// Challenge. Write a function called setTimeout2 that takes milliseconds first and a callback
// second, but otherwise behaves like setTimeout.
function setTimeout2(time, cb) {
  setTimeout(cb, time);
}

//node style callback: superagent('url', (err,data)=>{ console.log(data)} )

// How can we get this code to not resemble callback hell (nesting)?
// Try to clean it up and produce the same result (console.log the results array).
// const results = [];
// fakeAxios.post("www.getlatlon.fake", { ip: "fake" }).then(response1 => {
//   results.push(response1.data);
//   fakeAxios.post("www.getaddressfromlatlon.fake", { latlon: response1.data }).then(response2 => {
//     results.push(response2.data);
//     fakeAxios.get("www.registerhereforspam.fake", { address: response2.data }).then(response3 => {
//       results.push(response3.data);
//       console.log("results", results);
//     });
//   });
// });
// chaining instead of nesting hell
// const results2 = [];
// fakeAxios
//   .post("www.gettatlon.fake", { ip: "fake" })
//   .then(res => {
//     results2.push(res.data);
//     return fakeAxios.post("www.getaddressfromlatlon.fake", { latlon: res.data });
//   })
//   .then(res => {
//     results2.push(res.data);
//     return fakeAxios.get("www.registerhereforspam.fake", { address: res.data });
//   })
//   .then(res => {
//     results2.push(res.data);
//     console.log("results2", results2);
//   });

// request("https://jsonplaceholder.typicode.com/users/1", (err, res) => {
//   if (err) {
//   } else if (res) {
//     console.log("res", res.body);
//   }
// });
// request("https://jsonplaceholder.typicode.com/users/hi", (err, res) => {
//   if (err) {
//     console.log("err", err);
//   } else if (res) {
//     console.log("res", res.statusCode);
//   }
// });

// fs.readFile("./lecture/async.js", "utf-8", (err, res) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(res);
// });
// function readFilePromise(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, "utf-8", (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// }
// readFilePromise("./lecture/async.js").then(res => console.log("final res", res));
// readFilePromise("./lecture/asnc.js").catch(err => console.log("error", err));
// promises
// const p = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000);
// });
// p.then(() => {
//   console.log("done");
// });

// function delay(time) {
//   return new Promise(res => {
//     console.log("hi");
//     setTimeout(res, time);
//   });
// }

// delay(2000).then(res => console.log("done"));

// mult promises at the same time
// Promise.all([
//   fakeAxios.get('1'),
//   fakeAxios.get('2')
// ]).then(([res1, res2])=>{

// })

function multiPromise(arr) {
  let promise1 = false;
  let promise2 = false;
  let resolved = [];
  console.log(arr[0].then(res => console.log(res)));
  // arr[0]
  //   .then(resolve => {
  //     resolved.push(resolve.data);
  //   })
  //   .then(() => (promise1 = true));
  // arr[1]
  //   .then(resolve => {
  //     resolved.push(resolve(arr[1]));
  //   })
  //   .then(() => (promise2 = true));
  // if (promise1 === true && promise2 === true) {
  //   return resolved;
  // }
  console.log(resolved);
}

multiPromise([fakeAxios.get("1"), fakeAxios.get("2")]).then(([res1, res2]) => {
  console.log("res1", res1.data);
  console.log("res2", res2.data);
});
