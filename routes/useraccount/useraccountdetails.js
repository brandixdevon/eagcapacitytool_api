const { pool } = require('../dbconfig')

module.exports = (req, res) => {

    var u_id = req.params.id;
    
    var sqlqry = `SELECT * FROM users WHERE u_id='${u_id}';`;

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