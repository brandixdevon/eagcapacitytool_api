const { pool } = require('../dbconfig')

module.exports = async (req, res) => {

    //Check Body Is Empty

    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {

        res.status(200).json({Type: "ERROR", Msg : "Oops! Empty Data Set."})
        return;

      }

    //Check Element Count

      if(Object.keys(req.body).length != 5) {

        res.status(200).json({Type: "ERROR", Msg : "Oops! Can't Find Correct Dataset"})
        return;

      }
      const var_empid = req.body.empid;
      const var_empad = req.body.empad;
      const var_empname = req.body.empname;
      const var_empwhours = req.body.empwhours;
      const var_empactive = req.body.empactive;
    
    var sqlqry = `UPDATE master_employee SET emp_ad = '${var_empad}' ,emp_name = '${var_empname}', emp_whours ='${var_empwhours}', emp_active ='${var_empactive}' WHERE emp_id= ${var_empid}  `
    
    pool.query(sqlqry, (error, results) => {
        if (error) {
          res.status(200).json({Type: error.name, Msg : error.message})
          return;
        }
        else
        {
            res.status(200).json({Type: "SUCCESS", Msg: `(${var_empname}) employee Update Successfully!`})
            return;
        }
          
      })
    
  };