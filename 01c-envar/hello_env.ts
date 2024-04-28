Deno.env.set("FIREBASE_API_KEY", "1234567890");
Deno.env.set("FIREBASE_AUTH_DOMAIN", "firebasedomain.com");

console.log(Deno.env.get("FIREBASE_API_KEY")); // 1234567890
console.log(Deno.env.get("FIREBASE_AUTH_DOMAIN")); // firebasedomain.com
console.log(Deno.env.has("FIREBASE_AUTH_DOMAIN")); // true
