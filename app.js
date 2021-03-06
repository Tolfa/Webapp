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
      var Person10 = a[10].Code;
      var Person11 = a[11].Code;
      var Person12 = a[12].Code;
      var Person13 = a[13].Code;
      var Person14 = a[14].Code;
      var Person15 = a[15].Code;
      var Person16 = a[16].Code;
      var Person17 = a[17].Code;
      var Person18 = a[18].Code;
      var Person19 = a[19].Code;

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
      var Punkte10 = a[10].Punkte;
      var Punkte11 = a[11].Punkte;
      var Punkte12 = a[12].Punkte;
      var Punkte13 = a[13].Punkte;
      var Punkte14 = a[14].Punkte;
      var Punkte15 = a[15].Punkte;
      var Punkte16 = a[16].Punkte;
      var Punkte17 = a[17].Punkte;
      var Punkte18 = a[18].Punkte;
      var Punkte19 = a[19].Punkte;


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
        Person10: Person10,
        Person11: Person11,
        Person12: Person12,
        Person13: Person13,
        Person14: Person14,
        Person15: Person15,
        Person16: Person16,
        Person17: Person17,
        Person18: Person18,
        Person19: Person19,
        Punkte0: Punkte0,
        Punkte1: Punkte1,
        Punkte2: Punkte2,
        Punkte3: Punkte3,
        Punkte4: Punkte4,
        Punkte5: Punkte5,
        Punkte6: Punkte6,
        Punkte7: Punkte7,
        Punkte8: Punkte8,
        Punkte9: Punkte9,
        Punkte10: Punkte0,
        Punkte11: Punkte11,
        Punkte12: Punkte12,
        Punkte13: Punkte13,
        Punkte14: Punkte14,
        Punkte15: Punkte15,
        Punkte16: Punkte16,
        Punkte17: Punkte17,
        Punkte18: Punkte18,
        Punkte19: Punkte19
      });
    }

    var leaderboard = dbo.collection("Punkte").find({ Punkte: { $exists: true } }).sort({ Punkte: -1 }).limit(20).toArray()

    leaderboard.then(promise_go_away)
    db.close();
  });
});


app.get("/thanks", function (req, res) {
  res.render("thanku", {
    title: "Danke",
    message: "Vielen Dank für deine Teilnahme!",
  });
  return res.status(1000);
});


app.get("/goals", function (req, res) {
  res.render("goals", {
    title: "Leaderboard",
    message: "Studenten Leaderboard",
    students: students
  });
  return res.status(1000);
});

app.post("/goals", function(req, response) {
  console.log(req.body.code);

  // console.log(req);
  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("leaderboard");

    dbo.collection(COLLECTION_STUDENTS).insertOne(req.body, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
      response.status(200);
      return response.redirect("/thanks");
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
      percentage_of_this = ((resolve_a.length) * 100 / resolve_b.length).toFixed(2);
      if(percentage_of_this>40){
        outputtext = 'Du übertriffst ' + percentage_of_this + '% der Studenten mit deiner Punktzahl.'
      } else {
        outputtext = 'Du bist unter den unteren 40%.'
      }
      return outputtext
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

    var status = dbo.collection("Punkte").find({ Punkte: { $lt: parseFloat(req.body.code, 10) } }).toArray();
    var alles = dbo.collection("Punkte").find({ Punkte: { $gte: 0 } }).toArray();

    helpMe(status, alles).then(nopromise);

    db.close();

  });
});



app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
