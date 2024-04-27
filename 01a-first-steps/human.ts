export default interface Person {
  firstName: string;
  lastName: string;
}

export function sayHello(p: Person) {
  return `Hello, ${p.firstName} ${p.lastName}`;
}
