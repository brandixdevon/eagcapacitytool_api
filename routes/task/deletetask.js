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
      const var_taskid = req.body.taskid;
      
    
      var sqlqry = `DELETE FROM task WHERE task_id= '${var_taskid}'  `
   

    pool.query(sqlqry, (error, results) => {
        if (error) {
          res.status(500).json({Type: error.name, Msg : error.message})
          return;
        }
        else
        {
            res.status(200).json({Type: "SUCCESS", Msg: " Task delete Successfully!"})
            return;
        }
          
      })
    
  };