const { pool } = require('../dbconfig')

module.exports = (req, res) => {
    
const date1 = req.body.date1;
const date2 = req.body.date2;

    var sqlqry = `SELECT * FROM calendar WHERE cal_date BETWEEN '${date1}' AND '${date2}'`;

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