const { pool } = require('../dbconfig')

module.exports = (req, res) => {

    var cal_date = req.params.date;
    
    var sqlqry = `SELECT * FROM calendar WHERE cal_date='${cal_date}';`;

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