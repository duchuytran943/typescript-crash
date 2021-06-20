/**
 * Generics
 */

type strArray = Array<string>;
/**
 * không biết có tương đương với type strArray  =  string[] hay không
 */

type numArray = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];
const l1 = last([1, 2, 3]);
console.log(l1);

/**
 * lastT: tùy thuộc vào T là gì, thì lúc return nó sẽ quy định dạng là T
 * Ex:truyển vào 1 number array-> lastT sẽ trả về dạng là number
 */
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l2 = lastT([1, 2, 3]); // trả về l2 là number.
const l3 = lastT<string>(["huy", "thu"]); // <string> để nói cho nó hiểu là sẽ truyển vào string array

const makeArrT = <T>(x: T) => [x];
const m1 = makeArrT("hihi");
const m2 = makeArrT(444);
console.log(m1, m2);

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m3 = makeArrXY("hihi", "haha");
const m4 = makeArrXY(3, "huy");

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m5 = makeTuple("haha", 5);
const m6 = makeTuple<string, number>("huy", 26); // nói trước cho nó biết sẽ truyền vào tuple
const m7 = makeTuple<string | null, number>(null, 222);
console.log(m5, m6, m7);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m8 = makeTupleWithDefault<string | null>("aaa", 3);
console.log(m8);

/**
 * GENERICS EXTENDS
 */

const makeFullNameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullNameConstraint({ firstName: "huy", lastName: "tran" });
// const n2 = makeFullNameConstraint({ firstName: "huy", lastName: "tran", age: 20 }); // error, vì object truyển vào không có age -> dùng generics
console.log(n1);

const makeFullNameConstraintWithGenerics = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});
const n3 = makeFullNameConstraintWithGenerics({
  firstName: "huy",
  lastName: "tran",
  age: 20,
});
console.log(n3);

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const empOne = addNewEmployeeT({ name: "huy" });
console.log(empOne.name);

const addNewEmployeeTWithConstrain = <T extends { name: string }>(
  employee: T
) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const empTwo = addNewEmployeeTWithConstrain({ age: 30, name: "huy" });
console.log(empTwo);

/**
 * GENERICS in INTERFACE
 */

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

const resourceOne: Resource<string> = {
  uid: 1,
  name: "huy",
  data: "hello",
};

const resourceTwo: Resource<string[]> = {
  uid: 1,
  name: "huy",
  data: ["hello"],
};

type NumberResource = Resource<number[]>;

const resourceThree: NumberResource = {
  uid: 1,
  name: "huy",
  data: [1,2],
};
