const { pool } = require('../dbconfig');
const moment = require('moment');

module.exports = async (req, res) => {

  //Check Body Is Empty

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {

    res.status(200).json({ Type: "ERROR", Msg: "Oops! Empty Data Set." })
    return;

  }

  //Check Element Count

  if (Object.keys(req.body).length != 8) {

    res.status(200).json({ Type: "ERROR", Msg: "Oops! Can't Find Correct Dataset" })
    return;

  }

  const var_proid = req.body.proid;
  const var_empid = req.body.empid;
  const var_tasktitle = req.body.tasktitle;
  const var_taskdesc = req.body.taskdesc;
  const var_taskdateto = moment(req.body.taskdatefrom).format("YYYY-MM-DD");
  const var_taskdatefrom = moment(req.body.taskdateto).format("YYYY-MM-DD");
  const var_taskhours = req.body.taskhours;
  const var_taskstatus = "Open";
  const var_cruser = req.body.cruser;
  const var_crdate = moment().format("YYYY-MM-DD HH:mm:ss");

  var getDaysArray = function(s,e) {for(var a=[],d=new Date(s);d<=e;d.setDate(d.getDate()+1)){ a.push(new Date(d));}return a;};

  var daylist = getDaysArray(new Date(var_taskdateto),new Date(var_taskdatefrom));
  daylist.map((v)=>{
    

    var sqlqry = `INSERT INTO task (pro_id, emp_id, task_title, task_desc, task_date, task_hours,task_status,task_active,cr_user,cr_date)
     VALUES('${var_proid}','${var_empid}','${var_tasktitle}','${var_taskdesc}','${v.toISOString().slice(0,10)}','${var_taskhours}','${var_taskstatus}','true','${var_cruser}','${var_crdate}');`;

     pool.query(sqlqry);
  })

  res.status(200).json({ Type: "SUCCESS", Msg: "New Tasks Added Successfully!" })
  return;

};