/**
 * Generics
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
console.log(l1);
/**
 * lastT: tùy thuộc vào T là gì, thì lúc return nó sẽ quy định dạng là T
 * Ex:truyển vào 1 number array-> lastT sẽ trả về dạng là number
 */
var lastT = function (arr) { return arr[arr.length - 1]; };
var l2 = lastT([1, 2, 3]); // trả về l2 là number.
var l3 = lastT(["huy", "thu"]); // <string> để nói cho nó hiểu là sẽ truyển vào string array
var makeArrT = function (x) { return [x]; };
var m1 = makeArrT("hihi");
var m2 = makeArrT(444);
console.log(m1, m2);
var makeArrXY = function (x, y) { return [x, y]; };
var m3 = makeArrXY("hihi", "haha");
var m4 = makeArrXY(3, "huy");
var makeTuple = function (x, y) { return [x, y]; };
var m5 = makeTuple("haha", 5);
var m6 = makeTuple("huy", 26); // nói trước cho nó biết sẽ truyền vào tuple
var m7 = makeTuple(null, 222);
console.log(m5, m6, m7);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m8 = makeTupleWithDefault("aaa", 3);
console.log(m8);
/**
 * GENERICS EXTENDS
 */
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n1 = makeFullNameConstraint({ firstName: "huy", lastName: "tran" });
// const n2 = makeFullNameConstraint({ firstName: "huy", lastName: "tran", age: 20 }); // error, vì object truyển vào không có age -> dùng generics
console.log(n1);
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n3 = makeFullNameConstraintWithGenerics({
    firstName: "huy",
    lastName: "tran",
    age: 20
});
console.log(n3);
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empOne = addNewEmployeeT({ name: "huy" });
console.log(empOne.name);
var addNewEmployeeTWithConstrain = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empTwo = addNewEmployeeTWithConstrain({ age: 30, name: "huy" });
console.log(empTwo);
var resourceOne = {
    uid: 1,
    name: "huy",
    data: "hello"
};
var resourceTwo = {
    uid: 1,
    name: "huy",
    data: ["hello"]
};
var resourceThree = {
    uid: 1,
    name: "huy",
    data: [1, 2]
};
