/**
 * Function
 */
 const square = (side: number) => side * side;
 console.log(square(3));
 
 let greet: Function;
 greet = () => {
   console.log("Hello");
 };
 greet();
 
 const add = (a: number, b: number, c?: number | string) => {
   // kiểu của c có thể number or sting
   // có thể không cần truyển tham số c khi call add. lúc này c sẽ nhận giá trị là undefine
   console.log(a + b);
   console.log(c);
 };
 
 add(1, 2, "hihi");
 
 const addDefault = (a: number, b: number, c: number | string = 10) => {
   // kiểu của c có thể là number or string
   // nếu không truyển tham số cho c thì mặc định của nó sẽ là 10
   console.log(a + b);
   console.log("default c", c);
 };
 addDefault(1, 32);
 
 const minus = (a: number, b: number): number => {
   // kiểu trả về của hàm  minus là  number, trả về kiểu khác sẽ báo lỗi.
   return a - b;
 };
 