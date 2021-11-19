const express = require("express");
const ejs = require("ejs");

const router = express.Router();
const app = express();
// const firebase=require("firebase/app");
/*
const admin = require("firebase-admin");
const serviceAccount = require("./uni-market-85001-firebase-adminsdk-vwijm-a74118e7bd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://uni-market-85001-default-rtdb.firebaseio.com",
});

const db = admin.database();
const ref = db.ref("restricted_access/secret_document");
ref.once("value", function (snapshot) {
  console.log(snapshot.val());
});
*/

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;

app.set("view engine", "ejs");
// app.set("views", "./views");
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  //   res.render("index");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.get("/front", (req, res) => {
  res.sendFile(__dirname + "/public/front.html");
});

// localhost:3000/email_post
app.post("/email_post", function (req, res) {
  // res.send("<h1> welcome! </h1>" + req.body.email)
  res.render("email.ejs", { name: req.body.name, email: req.body.email });
});

app.post("/new_post", (req, res) => {
  res.render("new.ejs", {
    title: req.body.title,
    productName: req.body.productName,
    productDescript: req.body.productDescript,
  });
});

router.get("/save", (req, res) => {
  database.ref("customer").set({ name: "youngjin" }, (error) => {
    if (error) console.error(error);
    else console.log("success save !");
  });
  return res.json({ firebase: true });
});

// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.
app.use(express.static("public"));
// app.use("/board1", require("./routes/board1"));
