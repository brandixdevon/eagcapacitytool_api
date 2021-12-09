const { pool } = require('../dbconfig')

module.exports = (req, res) => {
    
    var pro_id = req.params.id;

    var sqlqry = `SELECT distinct(master_employee.emp_name,master_employee.emp_ad,master_employee.emp_whours) FROM task,master_employee
    WHERE task.emp_id=master_employee.emp_id and task.pro_id = '${pro_id}'`;

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