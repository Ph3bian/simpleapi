import db from '../db/db';
var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });
    app.get('/api/v1/todos', (req, res) => {
        res.status(200).send({
          success: 'true',
          message: 'todos retrieved successfully',
          todos: db
        })
      });
  }
  
  module.exports = appRouter;