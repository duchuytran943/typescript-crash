/**
 * Type alias
 */
 type StringOrNumber = string | number;
 type Student = { name: string; id: StringOrNumber };
 
 const studentDetail = (id: StringOrNumber, studentName: string): void => {
   // kiểu của hàm sẽ không trả về cái gì nên thêm void vào.
   console.log(`Student ${studentName} has id: ${id}`);
 };
 studentDetail(123, "HUY");
 
 const greet = (user: Student) => {
   console.log(`${user.name} with id ${user.id}`);
 };
 
 greet({ name: "huy", id: "123" });
 