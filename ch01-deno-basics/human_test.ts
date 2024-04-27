import { assertEquals } from "$std/assert/mod.ts";
import Person, { sayHello } from "./human.ts";

Deno.test("sayHello function", () => {
  const grace: Person = {
    lastName: "Hopper",
    firstName: "Grace",
  };

  assertEquals("Hello, Grace Hopper", sayHello(grace));
});
