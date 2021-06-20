interface Person {
  name: string;
  age: number;
  speak(lang: string): void;
  spend(amount: number): number;
}

const huy: Person = {
  name: "huy",
  age: 26,
  speak(text: string): void {
    console.log(text);
  },
  spend(amt: number): number {
    return amt;
  },
};

console.log(huy);
const helloPerson = (onePerson: Person): void => {
  console.log(`hello ${onePerson.name}`);
};
helloPerson(huy);
