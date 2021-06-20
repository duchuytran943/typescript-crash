"use strict";
exports.__esModule = true;
exports.Employee = void 0;
/**
 * CLASS
 */
var Employee = /** @class */ (function () {
    //   public name: string;
    //   private age: number;
    //   readonly male: boolean;
    //   constructor(n: string, a: number, m: boolean) {
    //     this.name = n;
    //     this.age = a;
    //     this.male = m;
    //   }
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Age: " + this.age;
    };
    return Employee;
}());
exports.Employee = Employee;
var huy = new Employee("huy", 26, true);
console.log(huy);
// huy.male = false; // báo lỗi, nhưng vẫn chạy thay đổi được malE thành false
// console.log(huy);
console.log(huy.print());
var thu = new Employee("thu", 27, false);
var employees = [];
employees.push(huy);
employees.push(thu);
console.log(employees);
