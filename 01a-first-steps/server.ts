import express, { Request, Response } from "npm:express@4";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
