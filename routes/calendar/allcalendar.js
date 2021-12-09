const { pool } = require('../dbconfig')

module.exports = (req, res) => {

    var sqlqry = `SELECT TO_CHAR(cal_date::date :: DATE, 'yyyy-mm-dd') as cal_date,cal_datetype FROM calendar ORDER BY cal_date DESC ;`;

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