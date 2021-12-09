const { pool } = require('../dbconfig')

module.exports = async (req, res) => {

    //Check Body Is Empty

    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {

        res.status(200).json({Type: "ERROR", Msg : "Oops! Empty Data Set."})
        return;

      }

    //Check Element Count

      if(Object.keys(req.body).length != 4) {

        res.status(200).json({Type: "ERROR", Msg : "Oops! Can't Find Correct Dataset"})
        return;

      }
      const var_uid =req.body.uid;
      const var_empid = req.body.empid;
      const var_uname = req.body.uname;
      const var_utype = req.body.utype;
    
    var sqlqry = `UPDATE users SET emp_id = '${var_empid}' ,u_name = '${var_uname}', u_type ='${var_utype}' WHERE u_id= ${var_uid}  `
    
    pool.query(sqlqry, (error, results) => {
        if (error) {
          res.status(200).json({Type: error.name, Msg : error.message})
          return;
        }
        else
        {
            res.status(200).json({Type: "SUCCESS", Msg: " user update Successfully!"})
            return;
        }
          
      })
    
  };