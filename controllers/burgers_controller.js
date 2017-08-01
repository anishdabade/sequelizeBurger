


// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  
  app.get("/", function(req, res) {
    
    db.Burgers.findAll({}).then(function(result) {
      
      //res.json(result);
       res.render('index', {burgers: result});
    });
  });


  app.post("/burgers", function(req, res) {
    
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(result) {
      
      
      res.redirect("/");
    });
  });


  app.put('/burgers/:id', function(req, res) {
  
    db.Burgers.update({
      burger_name: req.body.burger_name,
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
     res.redirect("/");
      //res.json(result);
    });
  });

};













// router.get('/', function(req, res) {
//   burger.selectAll(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     // console.log(hbsObject);
//     res.render('index', hbsObject);
//   });
// });

// router.post('/burgers', function(req, res) {
//   burger.insertOne([
//     'burger_name'
//   ], [
//     req.body.burger_name
//   ], function(data) {
//     res.redirect('/');
//   });
// });

// router.put('/burgers/:id', function(req, res) {
//   var condition = 'id = ' + req.params.id;

//   burger.updateOne({
//     devoured: true
//   }, condition, function(data) {
//     res.redirect('/');
//   });
// });

// Export routes for server.js to use.