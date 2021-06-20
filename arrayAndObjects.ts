/**
 * ARRAY AND OBJECTS
 */
let names = ["huy", "thu"];
names.push("linh");
// names.push(5); // error, cant push number[] to string[]
// names[0] = 3; // error

let mixed = ["huy", 26, true];
mixed.push("thu");
mixed.push(27);
mixed.push(false);
// mixed.push({ a: 1 }); // error, cant push object to (string, number, boolean)[]

let person = {
  name: "huy",
  age: 25,
  isStudent: false,
};
// person.name = 5; // error
// person.hobbies = ['book']   // error, hobbies không tồn tại trong object person

person = {
  name: "huy1",
  age: 26,
  isStudent: true,
  // skills: ['js'] // error
};
