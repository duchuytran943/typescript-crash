import { Invoice, Payment } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice("Vinamilk", "drink", 50000);
const documentTwo: hasPrint = new Payment("Vietnam airlines", "fly", 100000);

const allDocument: hasPrint[] = [];
allDocument.push(documentOne);
allDocument.push(documentTwo);
console.log(allDocument);
