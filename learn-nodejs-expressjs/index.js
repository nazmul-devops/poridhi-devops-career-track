const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let myDetails = {
  id: 1,
  full_Name: "Nazmul Islam Swapan",
  Age: 34,
  Profession: "Cloud DevOps Engineer"
}

app.get('/', function (req, res) {
     res.json(myDetails)
   })

app.post('/', function (req, res) {
  const body = (req.body)
  body.id = 101;
res.json(body)
})

app.put('/', function (req, res) {
  const body = req.body;
  const newName = body.full_Name;
  const newAge = body.Age;
  const newProfession = body.Profession;
  myDetails.full_Name = newName
  myDetails.Age = newAge
  myDetails.Profession = newProfession

  res.json(myDetails)
  })

  //  app.get('/html', function (req, res) {
  //    res.sendFile(__dirname + '/main.html')
  //  })


app.listen(3000)