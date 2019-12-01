var express = require("express");
var app = express();
var mongo = require("mongodb");
var bodyParser = require("body-parser");


var MongoClient = require("mongodb").MongoClient;

var url = "mongodb+srv://Tolga:6YmrkJ63LzRM58UD@cluster0-zpk3l.gcp.mongodb.net/test?retryWrites=true&w=majority";

var databaseReference = null;
const COLLECTION_STUDENTS = "students";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("leaderboard");
  dbo.createCollection(COLLECTION_STUDENTS, function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

const students = ["Student 1", "Student 2", "Student 3"];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.send("Hello World!");
});





app.get("/leaderboard", function (req, res) {

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("leaderboard");

    /*
    var query = { code: "Lukas" };
    dbo.collection(COLLECTION_STUDENTS).find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      });
      */

    function promise_go_away(a) {
      var Person0 = a[0].Code;
      var Person1 = a[1].Code;
      var Person2 = a[2].Code;
      var Person3 = a[3].Code;
      var Person4 = a[4].Code;
      var Person5 = a[5].Code;
      var Person6 = a[6].Code;
      var Person7 = a[7].Code;
      var Person8 = a[8].Code;
      var Person9 = a[9].Code;

      var Punkte0 = a[0].Punkte;
      var Punkte1 = a[1].Punkte;
      var Punkte2 = a[2].Punkte;
      var Punkte3 = a[3].Punkte;
      var Punkte4 = a[4].Punkte;
      var Punkte5 = a[5].Punkte;
      var Punkte6 = a[6].Punkte;
      var Punkte7 = a[7].Punkte;
      var Punkte8 = a[8].Punkte;
      var Punkte9 = a[9].Punkte;


      res.render("leaderboard", {
        title: "Leaderboard",
        message: "Studenten Leaderboard",
        leaderboard: leaderboard,
        Person0: Person0,
        Person1: Person1,
        Person2: Person2,
        Person3: Person3,
        Person4: Person4,
        Person5: Person5,
        Person6: Person6,
        Person7: Person7,
        Person8: Person8,
        Person9: Person9,
        Punkte0: Punkte0,
        Punkte1: Punkte1,
        Punkte2: Punkte2,
        Punkte3: Punkte3,
        Punkte4: Punkte4,
        Punkte5: Punkte5,
        Punkte6: Punkte6,
        Punkte7: Punkte7,
        Punkte8: Punkte8,
        Punkte9: Punkte9
      });
    }

    var leaderboard = dbo.collection("Punkte").find({ Punkte: { $exists: true } }).sort({ Punkte: -1 }).limit(10).toArray()

    leaderboard.then(promise_go_away)
    db.close();
  });
});



app.get("/goals", function (req, res) {
  res.render("goals", {
    title: "Leaderboard",
    message: "Studenten Leaderboard",
    students: students
  });
  return res.status(1000);
});

app.post("/goals", function (req, res) {
  console.log(req.body.code);

  // console.log(req);
  MongoClient.connect(url, function (err, db) {

    var dbo = db.db("leaderboard");

    dbo.collection(COLLECTION_STUDENTS).insertOne(req.body, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});



app.get("/status", function (req, res) {
  res.render("status", {
    title: "Status",
    message: "Performance",
  });
  return res.status(200);
});

app.post("/status", function (req, res) {
  MongoClient.connect(url, function (err, db) {

    async function helpMe(a, b) {
      resolve_a = await a;
      resolve_b = await b;
      percentage_of_this = (resolve_a.length) * 100 / resolve_b.length;
      return percentage_of_this
    }

    var dbo = db.db("leaderboard");



    function nopromise(a) {
      var Percentage = a;

      res.render("status", {
        title: "Aktueller Status",
        message: "Aktueller Status",
        Percentage: Percentage
      });
    }

    var status = dbo.collection("Punkte").find({ Punkte: { $lt: parseInt(req.body.code, 10) } }).toArray();
    var alles = dbo.collection("Punkte").find({ Punkte: { $gte: 0 } }).toArray();

    helpMe(status, alles).then(nopromise);

    db.close();

  });
});



app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
