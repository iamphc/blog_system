// const { User } = require('./src/server-src/modules'); 

// var obj1 = {
//   loginId: 'ss1zz1a',
//   loginPwd: 'asdsada1sda',
//   name: 'phc',
//   address: {
//     province: 'abb',
//     city: 'beijing'
//   }
// }

// var obj2 = {
//   loginId: 'ssa2zz1a',
//   loginPwd: 'asdsada1sda',
//   name: 'phc',
//   address: {
//     province: 'abb',
//     city: 'beijing'
//   }
// }

// async function test1() {
//   const user = new User(obj);
//   const res = await user.save();

//   console.log(res);
// }

// async function test2() {
//   const result = await User.create([obj1, obj2], {
//     validateBeforeSave: false
//   });
//   console.log(result);
// }

// async function test3() {
//   User.validate(obj1);
// }

// test2();

const express = require('express')
const app = new express()
const port = 8997;

app.get('/abc', (req, res) => {
  console.log(req.headers['host'])

  res.send('123');
});
app.listen(port, () => {
  console.log('server list on' + port)
});