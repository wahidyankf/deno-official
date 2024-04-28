const site = await fetch("https://jsonplaceholder.typicode.com/posts/1");

console.log(await site.text());
