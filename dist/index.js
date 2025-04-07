// "use strict";
// let id = 'This type is a string';
// console.log(id);
// // tuple
// //designated types 
// let person = [1, "This a basic tuple with designated types", true];
// console.log(person);
// //tuple array
// let students;
// students = [
//     [1, 'This is for tuple'],
//     [1, 'Number and String'],
// ];
// console.log(students);
// // Union
// //either or OR
// let interns;
// interns = "This is basic union in typescript";
// console.log(interns);
// //enums
// //define set of constants either numeric or string
// var Direction1;
// (function (Direction1) {
//     Direction1[Direction1["Up"] = 1] = "Up";
//     Direction1[Direction1["Down"] = 2] = "Down";
//     Direction1[Direction1["Left"] = 3] = "Left";
//     Direction1[Direction1["Right"] = 4] = "Right";
// })(Direction1 || (Direction1 = {}));
// var Direction2;
// (function (Direction2) {
//     Direction2["Up"] = "This is enums / Define set of constants either numeric or a string";
//     Direction2["Down"] = "Down";
//     Direction2["Left"] = "Left";
//     Direction2["Right"] = "Right";
// })(Direction2 || (Direction2 = {}));
// console.log(Direction2.Up);
// const user = {
//     id: 1,
//     name: 'This is Object with types'
// };
// console.log(user);
// //type assertion
// let cid = "This is type assertion";
// let customerId = cid;
// // let customerId = cid as number
// console.log(customerId);
// //Types in Functions
// function addNumbers(x, y) {
//     return x + y;
// }
// console.log(addNumbers("This is types", " in Function"));
// //use void if not returning anything with union types
// function log(message) {
//     console.log(message);
// }
// log('This is union in function');
// const point2 = {
//     point2: "This is interface with Union types",
//     name: "This is Readonly"
// };
// point2.lastName = "optional because of ?";
// console.log(point2);
// const add = (x, y) => x + y;
// console.log(add("this is a interface", "used in function"));
// // classes
// class Person {
// }
