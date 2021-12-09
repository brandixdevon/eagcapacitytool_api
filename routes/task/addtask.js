const { pool } = require('../dbconfig');
const moment = require('moment');

module.exports = async (req, res) => {

  //Check Body Is Empty

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {

    res.status(200).json({ Type: "ERROR", Msg: "Oops! Empty Data Set." })
    return;

  }

  //Check Element Count

  if (Object.keys(req.body).length != 7) {

    res.status(200).json({ Type: "ERROR", Msg: "Oops! Can't Find Correct Dataset" })
    return;

  }

  const var_proid = req.body.proid;
  const var_empid = req.body.empid;
  const var_tasktitle = req.body.tasktitle;
  const var_taskdesc = req.body.taskdesc;
  const var_taskdate = moment(req.body.taskdate).format("YYYY-MM-DD");
  const var_taskhours = req.body.taskhours;
  const var_taskstatus = "Open";
  const var_cruser = req.body.cruser;
  const var_crdate = moment().format("YYYY-MM-DD HH:mm:ss");

  var sqlqry = `INSERT INTO task (pro_id, emp_id, task_title, task_desc, task_date, task_hours,task_status,task_active,cr_user,cr_date)
     VALUES('${var_proid}','${var_empid}','${var_tasktitle}','${var_taskdesc}','${var_taskdate}','${var_taskhours}','${var_taskstatus}','true','${var_cruser}','${var_crdate}');`;

  pool.query(sqlqry, (error, results) => {
    if (error) {
      res.status(200).json({ Type: error.name, Msg: error.message })
      return;
    }
    else {
      res.status(200).json({ Type: "SUCCESS", Msg: "New Task Added Successfully!" })
      return;
    }

  })

};