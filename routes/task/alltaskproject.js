const { pool } = require('../dbconfig')

module.exports = (req, res) => {
    
  var task_id = req.params.id;
    
  var sqlqry = `SELECT task.task_id,task.emp_id,task.task_title,task.task_desc,to_char(task.task_date, 'YYYY-MM-DD') as task_date,to_char(task.task_hours, '0.00') AS task_hours,task.task_status,master_employee.emp_name FROM task INNER JOIN master_employee ON master_employee.emp_id = task.emp_id WHERE pro_id='${task_id}' AND task_active='true' ORDER BY task_date DESC;`;

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