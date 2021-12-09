const { pool } = require("../dbconfig");

module.exports = async (req, res) => {
  //Check Body Is Empty

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(200).json({ Type: "ERROR", Msg: "Oops! Empty Data Set." });
    return;
  }

  //Check Element Count

  if (Object.keys(req.body).length != 2) {
    res .status(200) .json({ Type: "ERROR", Msg: "Oops! Can't Find Correct Dataset" });
    return;
  }
  
  const var_caldate = req.body.caldate;
  const var_caldatetype = req.body.caldatetype;
  

  var sqlqry = `DELETE FROM calendar WHERE cal_date= '${var_caldate}'  `;

  pool.query(sqlqry, (error, results) => {
    if (error) {
      res.status(200).json({ Type: error.name, Msg: error.message });
      return;
    } else {
      addNew(req, res, var_caldate, var_caldatetype);
      
    }
  });
};

const addNew = async (req, res, caldate, caldatetype) => {
  const var_caldate = caldate;
  const var_caldatetype = caldatetype;

  var sqlqry = `INSERT INTO calendar (cal_date, cal_datetype) VALUES('${var_caldate}','${var_caldatetype}');`;

  pool.query(sqlqry, (error, results) => {
    if (error) {
      res.status(200).json({ Type: error.name, Msg: error.message });
      return;
    } else {
      res
        .status(200)
        .json({ Type: "SUCCESS", Msg: "New Date Added Successfully!" });
      return;
    }
  });
};