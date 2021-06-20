/**
 * EXPLICIT TYPES
 */
 let myName: string = "huy";
 let students: string[] = ["huy", "thu"];
 
 // union
 let mixed: (string | number | boolean)[];
 mixed = ["huy", 15, true];
 
 let id: string | number;
 id = "123";
 
 let hobby: "book" | "music";
 hobby = "book"; //ok
 // hobby= "cooking"; // error (just only 'book' | 'music')
 
 let person: object;
 person = {
   name: "huy",
 };
 person = [];
 
 let student: {
   name: string;
   age: number;
   isGood: boolean;
 };
 student = {
   name: "Huy",
   age: 25,
   isGood: true,
   //   skills: ['js'] // error, skills not include in declare type
 };
 