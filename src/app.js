// const Logger = require("./logger");
// const path = require("path");
// const os = require("os");
// const fs = require("fs");
// const http = require("http");
const express = require("express");

// const pathObj = path.parse(__filename);
// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();
//
// const filesAsync = fs.readdir("./", (err, res) => {
//   if (err) return err;
//   else return res;
// });

// console.log(pathObj);
//
// console.log(`Total Mem:${totalMemory}, \nFree Mem: ${freeMemory}`);
//
// console.log(files);

// const logger = new Logger();

//Register listener
// logger.on("messageLogged", args => {
//   console.log(args);
// });

// logger.log("logged");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile(
//       path.join(__dirname, "..", "public", "index.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(content);
//         res.end();
//       }
//     );
//   }
//   if (req.url === "/api/courses") {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });
//
// server.listen(3002);

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 2, name: "course3" }
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found");
  else res.send(course);
});

//PORT
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
