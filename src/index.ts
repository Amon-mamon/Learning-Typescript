// let id:string = 'This type is a string'
// console.log(id)

// // tuple
// //designated types 
// let person: [number,string,boolean] = [1,"This a basic tuple with designated types",true]
// console.log(person)

// //tuple array
// let students: [number, string][]
// students = [
//     [1, 'This is for tuple'],
//     [1, 'Number and String'],
// ]
// console.log(students)
// // Union
// //either or OR
// let interns: string | number
// interns = "This is basic union in typescript"
// console.log(interns)
// //enums
// //define set of constants either numeric or string
// enum Direction1  {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// enum Direction2  {
//     Up = 'This is enums / Define set of constants either numeric or a string',
//     Down = 'Down',
//     Left = 'Left',
//     Right = 'Right'
// }
// console.log(Direction2.Up)

// //Objects
// //types
// type Users = {
//     id:number,
//     name:string
// }
// const user:Users = {
//     id: 1,
//     name: 'This is Object with types'
// }
// console.log(user)

// //type assertion
// let cid:any = "This is type assertion"
// let customerId = <string>cid
// // let customerId = cid as number
// console.log(customerId)

// //Types in Functions
// function addNumbers (x:string,y:string):string{
//     return x + y
// }
// console.log(addNumbers("This is types", " in Function"))

// //use void if not returning anything with union types
// function log(message: string | number):void {
//     console.log(message)
// }
// log('This is union in function')

// interface Points {
//     point2:string | number
//     lastName?: string //optional
//     readonly name: string
// }

// const point2:Points = {
//     point2: "This is interface with Union types",
//     name:"This is Readonly"
// }
// point2.lastName = "optional because of ?"
// console.log(point2)  

// // interface function

// interface MathFunc{
//     (x:string, y:string):string
// }
// const add:MathFunc = (x:string, y:string) :string => x + y
// console.log(add("this is a interface","used in function"))

// // classes

// class Person {
//     id:number;
//     name:string;
//     age?: string
    
//     constructor (id:number, name:string,) {
//         this.id = id
//         this.name = name
// }
// }

// const thisName = new Person(1,"This is class")
// const thisName2= new Person(2, "with Constructor")

// console.log(thisName)
// console.log(thisName2)
