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

    const var_taskid = req.body.taskid; 
    const var_empid = req.body.empid;
    const var_tasktitle = req.body.tasktitle;
    const var_taskdesc = req.body.taskdesc;
    const var_taskdate = moment(req.body.taskdate).format("YYYY-MM-DD");
    const var_taskhours = req.body.taskhours;
    const var_taskstatus = req.body.taskstatus;
    const var_lcuser = req.body.lcuser;
    const var_lcdate = moment().format("YYYY-MM-DD HH:mm:ss");

    var sqlqry = `UPDATE task SET emp_id='${var_empid}',task_title = '${var_tasktitle}' ,task_desc = '${var_taskdesc}', task_date='${var_taskdate}', task_hours ='${var_taskhours}',task_status ='${var_taskstatus}',lc_user ='${var_lcuser}',lc_date ='${var_lcdate}' WHERE task_id= '${var_taskid}';`


    pool.query(sqlqry, (error, results) => {
        if (error) {
            res.status(200).json({ Type: error.name, Msg: error.message })
            return;
        }
        else {
            res.status(200).json({ Type: "SUCCESS", Msg: " task update Successfully!" })
            return;
        }

    })

};