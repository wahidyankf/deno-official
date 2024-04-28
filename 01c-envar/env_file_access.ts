import { load } from "https://deno.land/std@0.223.0/dotenv/mod.ts";

const env = await load();
const password = env["PASSWORD"];

console.log(password); // superPassword
