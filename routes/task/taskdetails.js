const { pool } = require('../dbconfig')

module.exports = (req, res) => {

    var task_id = req.params.id;
    
    var sqlqry = `SELECT *,to_char(task_date, 'YYYY-MM-DD') as task_dateset,to_char(task.task_hours, '0.00') AS task_hoursset FROM task WHERE task_id='${task_id}';`;

    pool.query(sqlqry, (error, results) => {
        if (error) {
          res.status(200).json({Type: error.name, Msg : error.message})
          return;
        }
        else
        {
            res.status(200).json({Type: "SUCCESS", Dataset:(results.rows)})
            return;
        }
          
      })
    
  };