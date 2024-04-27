import Person, { sayHello } from "./human.ts";

const ada: Person = {
  firstName: "Ada",
  lastName: "Lovelace",
};

console.log(sayHello(ada)); // Hello, Ada Lovelace
