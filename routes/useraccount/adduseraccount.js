const { pool } = require('../dbconfig')

module.exports = async (req, res) => {

    //Check Body Is Empty

      if(req.body.constructor === Object && Object.keys(req.body).length === 0) {

        res.status(200).json({Type: "ERROR", Msg : "Oops! Empty Data Set."})
        return;

      }

    //Check Element Count

      if(Object.keys(req.body).length != 3) {

        res.status(200).json({Type: "ERROR", Msg : "Oops! Can't Find Correct Dataset"})
        return;

      }

      const var_empid = req.body.empid;
      const var_uname = req.body.uname;
      const var_utype = req.body.utype;
    
    var sqlqry = `INSERT INTO users(emp_id, u_name, u_type, u_active) VALUES('${var_empid}','${var_uname}','${var_utype}','True');`;

    pool.query(sqlqry, (error, results) => {
        if (error) {
          res.status(200).json({Type: error.name, Msg : error.message})
          return;
        }
        else
        {
            res.status(200).json({Type: "SUCCESS", Msg: "New user Added Successfully!"})
            return;
        }
          
      })
    
  };