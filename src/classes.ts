
//  CARS
// class Car {
//     make:string
//     model:string
//     year:number
//     mileage:number

//     //constructor for initializing the properties of Car Object
//     constructor(year:number, make:string, model:string){
//         this.year = year
//         this.make = make
//         this.model = model
//         this.mileage = 0
//     }
//     //Method to add mileage to distance
//     drive(distance:number){
//          this.mileage += distance 
//     }
//     //method to get the car info which is the Car object
//     getCarInfo():string{
//         return `${this.year} , ${this.make}, ${this.model}, ${this.mileage} miles`
//     }
// }
//     //create a car instance or value for the passed parameters in constructor
// const myCar = new Car(2020,"Toyota", "Camry")
// console.log(myCar.getCarInfo())

// myCar.drive(6000)
// console.log(myCar.getCarInfo())
// myCar.drive(12000)
// console.log(myCar.getCarInfo())


// exercise 2 VEHICLES
// Inheritance

// class Vehicle {
//     make:string
//     model:string
//     year:number
//     mileage:number
//     fuelLevel:number
    
//     constructor(year:number,make:string,model:string){
//             this.make = make
//             this.model = model
//             this.year = year
//             this.mileage = 0
//             this.fuelLevel = 100

//     }

//     drive(distance:number){
//         const fuelUsed = Math.floor(distance / 10)
//         this.fuelLevel = Math.max(this.fuelLevel - fuelUsed, 0)
//         this.mileage += distance
//     }
//     refuel (amount:number) {
//         this.fuelLevel = Math.min(this.fuelLevel + amount, 100)
//     }

//     getVehicleInfo():string {
//         return `${this.year}, ${this.make}, ${this.model}, ${this.mileage} miles, ${this.fuelLevel}% fuel`
//     }
// }

// const myVehicle = new Vehicle (2020, 'Toyota', 'Camry' )
// console.log(myVehicle.getVehicleInfo())
// myVehicle.drive(20000)
// myVehicle.refuel(20)
// console.log(myVehicle.getVehicleInfo())

// class Car extends Vehicle {
//     private sunRoof:boolean
//     constructor(year:number,make:string,model:string ){
//         super(year,make,model)
//         this.sunRoof = false
//     }

//     toggleSunRoof (){
//         this.sunRoof =!this.sunRoof
//     }
//     getVehicleInfo(): string {
//        const sunRoofStatus = this.sunRoof ? "Sunroof Open" : "Sunroof Closed";
//        return `${super.getVehicleInfo()}, ${sunRoofStatus}`
//     }
// }

// const myCar = new Car(2020, "Toyota", "Camry");
// myCar.toggleSunRoof()
// myCar.refuel(20)
// console.log(myCar.getVehicleInfo())

//exercise 3 PERSONS


// class Person {
//     name:string
//     age:number
//     address:string

//     constructor(name:string, age:number, address:string){
//         this.name = name
//         this.age = age
//         this.address = address
//     }
//     getFullInfo() :string {
//         return ` ${this.name} , ${this.age} years old, Address: , ${this.address}`
//     }
// }

// class Employee extends Person {
//     employeeId: number
//     position:string
//     hourlyRate:number
//     hoursworked:number

//     constructor(name:string, age:number, address:string,employeeId:number, position:string, hourlyRate:number, hoursworked:number){
//         super(name,age,address)
//         this.employeeId = employeeId
//         this.position = position
//         this.hourlyRate = hourlyRate
//         this.hoursworked = hoursworked
//     }
//     calculateSalary() :number{
//         return this.hourlyRate * this.hoursworked
//     }
//     getFullInfo(): string {
//         const salary = this.calculateSalary()
//         return `${super.getFullInfo()} , employee id:${this.employeeId}, Position:${this.position}, Salary: ${this.calculateSalary()}`
//     }
// }


// const myInfo = new Person ('Vince', 12 , 'Mabalacat')
// console.log(myInfo.getFullInfo())

// const myEmployee = new Employee ('David', 24 , "Angeles", 12345, 'Software Engineer', 10 , 160)
// console.log(myEmployee.getFullInfo())


//exercise  GYM MEMBERSHIP

// class Member {
//     name:string
//     age:number
//     membershipType:string 
//     workoutHistory:string[]

//     constructor(name:string,age:number,membershipType:string){
//         this.name = name
//         this.age = age
//         this.membershipType = membershipType
//         this.workoutHistory = []
//     }

//     logWorkout(workout:string){
//         return this.workoutHistory.push(workout)
//     }
//     getSummary():string{
//         return `${this.name}, ${this.age}, ${this.membershipType} Workouts: ${this.workoutHistory.join(',')}}`
//     }
// }

// const myWorkout = new Member ('Vince', 24 , 'Standard Member')
// myWorkout.logWorkout('Cardio')
// myWorkout.logWorkout('Yoga')
// console.log(myWorkout.getSummary())



// class Gym {
//     members:Member[]
//     constructor(){
//         this.members = []
//     }

//     addMember(member: Member){
//         return this.members.push(member)
//     }
//     removeMember(name: string) {
//         this.members = this.members.filter(member => member.name !== name);
//       }
//       listMembers(): string[] {
//         return this.members.map(member => member.getSummary());
//       }
// }
// const myGym = new Gym()
// myGym.addMember(myWorkout)
// console.log(myGym.listMembers())

//exercise 5 LIBRARY ITEMS

// class LibraryItem {
//      title:string
//      author:string
     
//      constructor(title:string, author:string){
//         this.title = title
//         this.author = author
//      }

//      getItemInfo() {
//         return `${this.title} by: ${this.author}`
//      }
// }
// const info = new LibraryItem('Harry Potter', 'MabsrenCOde')
// console.log(info.getItemInfo())

// class Book extends LibraryItem {
//     genre:string

//     constructor(title:string, author:string, genre:string){
//         super(title,author)
//         this.genre = genre
//     }

//     getBookInfo(){
//         return `${this.getItemInfo()}, Genre: ${this.genre}`
//     }
// }

// const allInfo = new Book('Harry Potter', 'MabsrenCode', "Drama")
// console.log(allInfo.getBookInfo())


// class BorrowableBook extends Book {
//     isAvailable: boolean;
    
//     constructor(title: string, author: string, genre: string, isAvailable: boolean) {
//       super(title, author, genre);
//       this.isAvailable = isAvailable;
//     }
    
//     borrowBook(): string {
//       if (this.isAvailable) {
//         this.isAvailable = false;
//         return `${this.title} has been borrowed.`;
//       } else {
//         return `${this.title} is already borrowed.`;
//       }
//     }

//     returnBook(): string {
//         if(!this.isAvailable){
//             this.isAvailable = true
//             return `${this.title} has been returned`
//         } else {
//             return `${this.title} was not borrowed`
//         }
//     }
// }

// class Library {
//     collection :LibraryItem[]
//     constructor(){
//         this.collection = []
//     }

//     addItem(item:LibraryItem){
//         return this.collection.push(item)
//     }
//     removeItem(title:string) {
//         this.collection =  this.collection.filter( item => item.title !== title)
//     }

//     findItem(title: string) : string {
//         const foundItem = this.collection.find(item => item.title === title)
//         return foundItem? foundItem.getItemInfo(): `Item not found.`
//     }

//     listAllItem():void {
//         this.collection.map(item => console.log(item.getItemInfo()))
//     }
// }

// const myLibrary = new Library()

// const book1 = new BorrowableBook("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", true);
// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction");
// const book3 = new BorrowableBook("1984", "George Orwell", "Dystopian", true);
// const book4 = new BorrowableBook("1984", "George Orwell", "qwe", true);

// myLibrary.addItem(book1);
// myLibrary.addItem(book2);
// myLibrary.addItem(book3);
// myLibrary.addItem(book4);


// console.log(myLibrary.findItem("1984"))
// myLibrary.listAllItem()


// console.log(book1.borrowBook());  
// console.log(book1.borrowBook()); 
// console.log(book1.returnBook()); 


//PRODUCTS

// class Product {
//     name:string
//     price:number
//     constructor(name:string,price:number){
//         this.name = name
//         this.price = price
//     }

//    ProductInfo(){
//         return `The product is  ${this.name} and the price for it is ${this.price}`
//     }
// }

// class DiscountedProduct extends Product {
//     discount:number
//     constructor(name:string, price:number) {
//         super(name,price)
//         this.discount = 10
//     }

//     getDiscounterPrice(){
//         return this.price * (1 - this.discount / 100)
//     }

//     ProductInfo(): string {
//         return `${super.ProductInfo()}, Discounted Price: ${this.getDiscounterPrice()}`
//     }
// }

// class Store {
//    products:Product[]

//    constructor(){
//     this.products = []
//    }

//    addProduct(product:Product){
//     return this.products.push(product)
//    }
//    removeProduct(productName:string) {
//     this.products =  this.products.filter( product => product.name !== productName)
//    }

//    getInventory():string{
//     return this.products.map(product => product.ProductInfo()).join('\n')
//    }

//    purchaseProduct(productName:string, quantity:number):void{
//         const product = this.products.find(p => p.name === productName)
//         if(!product){
//             console.log('Product Not Found');
//             return;
//         }
//     console.log(`Purchased ${quantity} ${productName}(s) for $${product['price'] * quantity}`);
//    }
// }

// const store = new Store ()

// const product1 = new Product('Shampoo', 5)
// const product2 = new DiscountedProduct('Conditioner',7)

// store.addProduct(product1)
// store.addProduct(product2)

// console.log(store.getInventory())
// store.purchaseProduct('Shampoo', 3);
// store.removeProduct('Shampoo')
// console.log(store.getInventory())


// Bank Account System

// class Account {
//     applyInterest() {
//         throw new Error("Method not implemented.");
//     }
//     balance: number;
//     constructor(initialBalance: number) {
//         this.balance = initialBalance;
//     }

//     deposit(amount: number): void {
//         if (amount > 0) {
//             this.balance += amount;
//         } else {
//             console.log('Deposit amount must be positive');
//         }
//     }

//     withdraw(amount: number): void {
//         if (amount <= this.balance) {
//             this.balance -= amount;
//         } else {
//             console.log('Insufficient funds');
//         }
//     }

//     getBalance(): number {
//         return this.balance;
//     }
// }
// let myAccount = new Account(1000);
// myAccount.deposit(900);
// myAccount.withdraw(1800);
// console.log(myAccount.getBalance()); // 100

// class SavingsAccount extends Account {
//     interestRate: number;
//     constructor(balance: number) {
//         super(balance);
//         this.interestRate = 5;
//     }

//     applyInterest() {
//         const interest = this.balance * (this.interestRate / 100);
//         this.balance += interest;
//         return interest;
//     }
// }

// class CheckingAccount extends Account {
//     transactionFee: number;

//     constructor(balance: number) {
//         super(balance);
//         this.transactionFee = 2;
//     }

//     deposit(amount: number): void {
//         this.balance += amount;
//         this.balance -= this.transactionFee;
//     }

//     withdraw(amount: number): void {
//         if (this.balance - amount - this.transactionFee >= 0) {
//             this.balance -= (amount + this.transactionFee);
//         } else {
//             console.log('Insufficient Funds');
//         }
//     }
// }

// const savings = new SavingsAccount(1000);
// console.log(savings.applyInterest()); // 50 (Interest applied)
// console.log(savings.getBalance()); // 1050

// const checking = new CheckingAccount(1000);
// checking.deposit(500);
// checking.withdraw(200);
// console.log(checking.getBalance()); // 1298 (500 deposit - 2 fee, 200 withdrawal - 2 fee)

// class Bank {
//     accounts: Account[];
//     constructor() {
//         this.accounts = [];
//     }

//     createAccount(type: string, balance: number): void {
//         let newAccount: Account;
//         if (type === "Savings") {
//             newAccount = new SavingsAccount(balance);
//         } else if (type === "Checking") {
//             newAccount = new CheckingAccount(balance);
//         } else {
//             console.log('Invalid Account Type');
//             return;
//         }
//         this.accounts.push(newAccount);
//     }

//     transfer(fromAccount: Account, toAccount: Account, amount: number): void {
//         const from = this.accounts.find(acc => acc === fromAccount);
//         const to = this.accounts.find(acc => acc === toAccount);

//         if (!from || !to) {
//             console.log("Account not found");
//             return;
//         }

//         if (from.balance < amount) {
//             console.log('Insufficient funds');
//             return;
//         }

//         from.withdraw(amount);
//         to.deposit(amount);
//         console.log(`Transferred ${amount} from ${fromAccount} to ${toAccount}`);
//     }
// }

// // Example usage:
// const bank = new Bank();
// bank.createAccount("Savings", 5000);
// bank.createAccount("Checking", 2000);

// const newSavingsAccount = bank.accounts[0];
// const newCheckingAccount = bank.accounts[1];

// // Applying interest to savings account
// console.log(`Initial savings balance: ${newSavingsAccount.getBalance()}`);
// console.log(`Interest applied: ${newSavingsAccount.applyInterest()}`);
// console.log(`Savings balance after interest: ${newSavingsAccount.getBalance()}`);

// // Transferring money from savings to checking account
// console.log("Before transfer:");
// console.log(`Savings balance: ${newSavingsAccount.getBalance()}`);
// console.log(`Checking balance: ${newCheckingAccount.getBalance()}`);

// bank.transfer(newSavingsAccount, newCheckingAccount, 1000);

// console.log("After transfer:");
// console.log(`Savings balance: ${newSavingsAccount.getBalance()}`);
// console.log(`Checking balance: ${newCheckingAccount.getBalance()}`);


// 4 PARTS OF OOP

// ENCAPSULATION
//1st exercise

// class Employee {
//     private _name:string
//     private _salary:number
//     private _performanceRating: number

//     constructor(name:string,salary:number,performanceRating:number){
//         this._name = name
//         this._salary = salary

//         if(performanceRating >= 1 && performanceRating <= 5){
//                 this._performanceRating = performanceRating
//         } else {
//             this._performanceRating = 3
//             console.log("Invalid initial performance")
//         }
//     }

//     public getEmployeeInfo():string{
//         return `${this._name}, Salary: ${this._salary}`
//     }

//     public updateSalary(newSalary:number){
//         if(newSalary > this._salary){
//             this._salary = newSalary
//             console.log('salary updated')
//         } else {
//             console.log('Salary not updated')
//         }
//     }

//     public setPerformanceRating(rating:number){
//             if(rating >= 1 && rating <= 5 ){
//                 this._performanceRating = rating
//                 console.log('Rating')
//             } else{
//                     console.log('Error, cannot rate')
//             }
//     }

//     getPerformanceRating():number{
//         return this._performanceRating;
//     }
// }

// const employee = new Employee('Vince',12000,1)
// console.log(employee.getEmployeeInfo())

// employee.updateSalary(52200)
// console.log(employee.getEmployeeInfo())

// employee.setPerformanceRating(6)
// console.log(employee.getEmployeeInfo())

// employee.setPerformanceRating(4)
// console.log(`Final performance rating: ${employee.getPerformanceRating()}`)



// 2nd exercise

// class DigitalWallet {
//     private _balance:number
//     private _transactionHistory:string[]

//     constructor(balance:number   ){
//         this._balance = balance
//         this._transactionHistory = []
//     }

//     public deposit(amount:number) : void{
//         if(amount > 0){
//             this._balance += amount
//             const message = `Deposited:${amount}`
//             this._transactionHistory.push(message)
//             console.log(message)
//         } else{
//             console.log('Deposite must be positive amount')
//         }
//     }
    
//     public withdraw(amount:number) :boolean{
//         if(amount > 0 && amount <= this._balance){
//             this._balance -= amount
//             const msg = `You withdraw: ${amount}`
//             this._transactionHistory.push(msg)
//             console.log(msg)
//             return true
//         }else{
//             console.log('Insufficient balance')
//             return false
//         }
//     }

//     public transferTo(targetWallet:DigitalWallet,amount:number):void{
//         if (this.withdraw(amount)){
//             targetWallet.deposit(amount)
//             const message = `Transferred ${amount} to another wallet`
//             this._transactionHistory.push(message)
//             console.log(message)
//         }
//     }

//     public getBalance():number{
//         return this._balance
//     }

//     public getTransactionHistory():string[]{
//         return this._transactionHistory
//     }
// }

// const amountDeposited = new DigitalWallet(1000,[])
// console.log(amountDeposited.getBalance())
// amountDeposited.deposit(500)
// console.log(amountDeposited.getBalance())
// amountDeposited.withdraw(300)
// console.log(amountDeposited.getBalance())
// amountDeposited.transferTo(amountDeposited,200)
// console.log(amountDeposited.getTransactionHistory())


// 3rd exercise


// class StudentRecord {
//     private _name:string
//     private _grades:number[]
//     constructor(name:string){
//         this._name = name
//         this._grades = []
//     }

//     public getStudentInfo():string{
//         return `student name is ${this._name} and the student(s) grades are ${this._grades.join(',')}`
//     }

//     public addGrade(grade:number):void{
//         if(grade > 0 && grade <= 100){
//             this._grades.push(grade)
//         } else {
//             console.log('Invalid Grade')
//         }
//     }
//     public calculateAverage(): number {
//         if (this._grades.length === 0) {
//             return 0; 
//         }
//         return this._grades.reduce((total, grade) => total + grade, 0) / this._grades.length;
//     }
//    public getGrades():number[]{
//         return this._grades.slice()
       
//    }
// }

// const grades = new StudentRecord('Vince')
// grades.addGrade(94)
// grades.addGrade(94)
// grades.addGrade(94)
// grades.addGrade(94)
// grades.addGrade(85)
// grades.addGrade(94)
// grades.addGrade(94)
// console.log(`Average grade :${grades.calculateAverage()}`)
// console.log(`Grades: ${grades.getGrades().join(",")}`)
// console.log(grades.getStudentInfo())


//4th exercise 

// class LibrarySystem {
//     private title:string
//     private author:string
//     private isCheckout:boolean
//     constructor(title:string, author:string){
//         this.title =  title
//         this.author = author
//         this.isCheckout = false
//     }

//     public getBookInfo():string{
//         return `The title of the book is  ${this.title} and the author is ${this.author} Checkedout: ${this.isCheckout ? "yes" : "no"}`
//     }

//     public checkOut():void{
//        if(!this.isCheckout){
//         this.isCheckout = true
//         console.log('The book has been checkout')
//        } else {
//         console.log('The book has already checkedout')
//        }
//     }
//     public returnBook():void {
//        if(!this.isCheckout){
//         this.isCheckout = false
//         console.log('The book was returned')
//        } else {
//         console.log('The book is not checked out.')
//        }
//     }
// }

// const libraryHistory = new LibrarySystem('Vince','John Doe')
// libraryHistory.checkOut()
// libraryHistory.returnBook()
// console.log(libraryHistory.getBookInfo())

// exercise 5

// class EmployeePayrollSystem {
//     private name:string
//     private hoursWorked:number
//     private hourlyRate:number

//     constructor(name:string, hourlyRate:number){
//             this.name = name
//             this.hoursWorked = 0
//             this.hourlyRate = hourlyRate
//     }

//     public logHours (hours:number){
//         if(hours > 0){
//             this.hoursWorked += hours
//             console.log(`Added hour: ${hours}`)
//         } else{
//             console.log("No added hours")
//         }
//     }

//     public calculatePay():number{
//             return this.hoursWorked * this.hourlyRate
//     }

//     public getPayrollInfo():string{
//         return `The employee name is ${this.name} and employee's total pay is ${this.calculatePay()}`
//     }

//     public resetHours(){
//         this.hoursWorked = 0
//     }
// }

// const employeeInfo = new EmployeePayrollSystem('Vince', 58)
// employeeInfo.logHours(8)
// employeeInfo.calculatePay()
// console.log(employeeInfo.getPayrollInfo())


// INHERITANCE 

// 1st Exercise

// class Vehicle {
//     brand:string
//     year:number

//     constructor(brand:string, year:number){
//         this.brand = brand
//         this.year = year
//     }
    
//      displayInfo():string{
//         return `Brand ${this.brand}, Year : ${this.year}`
//     }
// }
// class Car extends Vehicle {
//         model:string
//             constructor(brand:string, year:number, model:string){
//                 super(brand,year)
//                 this.model = model
//             }
            
//         displayCarInfo():string{
//             return `${this.displayInfo()} model: ${this.model}`
//         }
// }
// class Truck extends Vehicle {
//          capacity:number
//         constructor(brand:string,year:number,capacity:number){
//             super(brand,year)
//             this.capacity = capacity
//         }

//          displayTruckInfo():string{
//             return `Truck Capacity:${this.capacity} tons`
//         }
// }

// const VehicleInfo = new Vehicle('Toyota',2024)
// console.log(VehicleInfo.displayInfo())

// const truck = new Truck('Land Crusier', 2025, 18)
// console.log(truck.displayTruckInfo())
// const car = new Car('Atoyot', 2012,'vios')
// console.log(car.displayCarInfo())

//2nd Exercise


// class Person {
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }

//     introduce():string{
//         return `Hi, my name is ${this.name} and I am ${this.age} years old`
//     }
// }

// class Teacher extends Person {
//     subject:string
//     constructor(name:string,age:number, subject:string){
//         super(name,age)
//         this.subject = subject
//     }
//     teach():string{
//         return `${this.introduce()}I'm teaching ${this.subject}`
//     }
// }

// class Student extends Person {
//     grade:number
//     constructor(name:string, age:number,grade:number){
//         super(name,age)
//         this.grade = grade
//     }
//     study():string{
//         return `${this.introduce()} I'm studying  and currently in grade ${this.grade}`
//     }
// }

// const person = new Person('Vince',24)
// console.log(person.introduce())

// const student = new Student('Ivan',18, 10)
// console.log(student.study())

// const teacher = new Teacher('Ritch' , 40, 'Programming')
// console.log(teacher.teach())

//3rd Exercise

class Person {
    name:string
    id:number
    salary:number

    constructor(name:string,id:number,salary:number){
        this.name = name
        this.id = id
        this.salary = salary
    }

    getPersonInfo():string{
        return `name is ${this.name} and ID is ${this.id} and salary is ${this.salary}`
    }
}

class Employee extends Person {
    department:string
    constructor(name:string,id:number,salary:number,department:string){
        super(name,id,salary)
        this.department = department
    }

    setDepartment(department:string){
        this.department = department
    }

    getDepartment(){
        return this.department
    }

    getEmployeeInfo():string{
        return `${this.getPersonInfo()} and department is ${this.department}`
    }
}

class Manager extends Employee {
    team:Employee[]
    constructor(
        name:string, 
        id:number,
        salary:number,
        department:string,
        
    ){
        super(name,id,salary,department)
        this.team = []
    }

   addToTeam(employee:Employee){
        this.team.push(employee)
   }

   removeFromTeam(employee:Employee){
        this.team.splice(this.team.indexOf(employee),1)
   }
   getTeam(){
    return this.team
   }
   getManagerInfo():string{
    const teamNames = this.team.map(emp => emp.name).join(',')
    return `${this.getEmployeeInfo()} and managing team: ${teamNames}`
   }
}

class Developer extends Employee {
    skills:string[]
    constructor(name:string,id:number,salary:number,department:string){
        super(name,id,salary,department)
        this.skills = []
    }

    addSkill(skill:string){
        this.skills.push(skill)
    }

    removeSkill(skill:string){
        this.skills.splice(this.skills.indexOf(skill),1)
    }

    getSkills(){
        return this.skills.join(',')
    }

    getDeveloperInfo():string{
        return `${this.getEmployeeInfo()} and skills:${this.skills.join(',')}`
    }
}

class Department {
    departmentName: string
    employees: Employee[]

    constructor(departmentName:string){
        this.departmentName = departmentName
        this.employees = []
    }

    addEmployee(employee:Employee) : Department{
        this.employees.push(employee)
        return this;
    }

    removeEmployee(employee:Employee) : Department{
        this.employees.splice(this.employees.indexOf(employee),1)
        return this;
    }

    getEmployeeCount():number{
        return this.employees.length
    }

    getDepartmentInfo():string{
        const employeeNames = this.employees.map(emp => emp.name).join(',')
        return `Department: ${this.departmentName} , Employees: ${employeeNames}`
    }
}


const dev1 = new Developer('Martin',12312,16000,'Devs')
dev1.addSkill('Manyakol')
dev1.addSkill('Manyakool')

const manager = new Manager("Charlie", 3, 80000, "Engineering");
manager.addToTeam(dev1);

const department = new Department("WEBDEVS")
department.addEmployee(manager);
department.addEmployee(dev1);

console.log(department.getDepartmentInfo())
console.log(dev1.getDeveloperInfo());
console.log(manager.getManagerInfo());
console.log(department.getDepartmentInfo());