/**
 * CLASS
 */
export class Employee {
  //   public name: string;
  //   private age: number;
  //   readonly male: boolean;

  //   constructor(n: string, a: number, m: boolean) {
  //     this.name = n;
  //     this.age = a;
  //     this.male = m;
  //   }

  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) {}

  print() {
    return `Age: ${this.age}`;
  }
}

const huy = new Employee("huy", 26, true);
console.log(huy);
// huy.male = false; // báo lỗi, nhưng vẫn chạy thay đổi được malE thành false
// console.log(huy);
console.log(huy.print());

const thu = new Employee("thu", 27, false);

let employees: Employee[] = [];
employees.push(huy);
employees.push(thu);
console.log(employees);
