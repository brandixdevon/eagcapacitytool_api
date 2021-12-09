const { pool } = require('../dbconfig')

module.exports = (req, res) => {

    var emp_id = req.params.url_empid;
    
    var sqlqry = `SELECT * FROM master_employee WHERE emp_id='${emp_id}';`;

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