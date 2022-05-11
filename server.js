const PORT = process.env.PORT || 3001;
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const savedNotes = require("./db/db.json");
const req = require("express/lib/request");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/api/notes", (req, res) => {
  res.json(savedNotes.slice(1));

  console.info(`${req.method} request received to get reviews`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post("/api/notes", (req, res) => {
  console.info(`${req.method} request received to add a review`);
  console.log(req.body);
  const { title, text } = req.body;
  if(title && text){
      const newNote = {
          title,
          text
      }
      fs.readFile('')
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
