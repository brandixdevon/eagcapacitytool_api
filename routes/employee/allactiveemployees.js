const { pool } = require('../dbconfig')

module.exports = (req, res) => {
    
    var sqlqry = `SELECT emp_id,emp_name,emp_whours FROM master_employee WHERE emp_active ='true' ORDER BY emp_name`;

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