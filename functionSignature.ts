/**
 * FUNCTION SIGNATURE
 */
 let greet: (a: string, b: string) => void; // chữ ký của function
 greet = (name: string, greeting: string) => {
   console.log(`${name} says ${greeting}`);
 };
 greet("huy", "xin chao");
 
 type Student = { name: string; age: number };
 let printStudent: (student: Student) => void;
 printStudent = ({ name, age }: Student) => {
   console.log(`${name} is ${age} years old`);
 };
 printStudent({ name: "huy", age: 16 });
 