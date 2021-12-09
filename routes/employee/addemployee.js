const { pool } = require('../dbconfig')

module.exports = async (req, res) => {
  
    //Check Body Is Empty

      if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        console.log('empty')
        res.status(200).json({Type: "ERROR", Msg : "Oops! Empty Data Set."})
        return;

      }

    //Check Element Count

      if(Object.keys(req.body).length != 3) {
        console.log('Oops! Cant Find Correct Dataset')
        res.status(200).json({Type: "ERROR", Msg : "Oops! Can't Find Correct Dataset"})
        return;

      }

      const var_empad = req.body.empad;
      const var_empname = req.body.empname;
      const var_empwhours = req.body.empwhours;
   
    var sqlqry = `INSERT INTO master_employee(emp_ad, emp_name, emp_whours, emp_active) VALUES('${var_empad}','${var_empname}','${var_empwhours}','True');`;

    pool.query(sqlqry, (error, results) => {
    
        if (error) {
          
          res.status(200).json({Type: error.name, Msg : error.message})
          return;
        }
        else
        {
         
            res.status(200).json({Type: "SUCCESS", Msg: "New Employee Added Successfully!"})
            return;
        }
          
      })
    
  };