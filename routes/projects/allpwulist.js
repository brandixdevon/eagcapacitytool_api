const { pool } = require('../dbconfig')

module.exports = (req, res) => {
    
    var emp_id = req.params.id;

    var sqlqry = `SELECT distinct(master_projects.pro_name,master_projects.pro_start,master_projects.pro_end,master_projects.pro_status) FROM task,master_projects
    WHERE task.pro_id=master_projects.pro_id and task.emp_id = '${emp_id}'`;

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