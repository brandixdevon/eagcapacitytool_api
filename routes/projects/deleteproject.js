const { pool } = require('../dbconfig')

module.exports = async (req, res) => {

    //Check Body Is Empty

    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {

        res.status(200).json({Type: "ERROR", Msg : "Oops! Empty Data Set."})
        return;

      }

    //Check Element Count

      if(Object.keys(req.body).length != 1) {

        res.status(200).json({Type: "ERROR", Msg : "Oops! Can't Find Correct Dataset"})
        return;

      }
      const var_proid = req.body.proid;
      
    
    var sqlqry = `UPDATE master_projects SET pro_active = 'false'  WHERE pro_id= ${var_proid} `
   

    pool.query(sqlqry, (error, results) => {
        if (error) {
          res.status(500).json({Type: error.name, Msg : error.message})
          return;
        }
        else
        {
            res.status(200).json({Type: "SUCCESS", Msg: " Project delete Successfully!"})
            return;
        }
          
      })
    
  };