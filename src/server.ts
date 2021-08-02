import express from "express";
const app = express();
const port = process.env.PORT || "3000";

app.get("/", (request, response) => {
  return response.json({ msg: "hello world" });
});

app.listen(port, () => {
  console.log("running server " + port);
});
