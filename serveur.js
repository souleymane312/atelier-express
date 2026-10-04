const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// Middleware pour servir les fichiers css
app.use(express.static(path.join(__dirname, "pages")));

app.get("/acceuil", (req, res) => {
  res.sendFile("pages/index.html", { root: __dirname });
});

//rediction vers la page acceuil
app.get("/", (req, res) => {
  res.redirect("/acceuil");
});



app.get("/acceuil1", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/acceuil2", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/pages/contact.html");
});




app.listen(port, () => {
  console.log(`le serveur a été écouté au http://127.0.0.1:${port}`);
});

