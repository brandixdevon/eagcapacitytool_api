const { pool } = require("../dbconfig");

module.exports = async (req, res) => {
  //Check Body Is Empty

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(200).json({ Type: "ERROR", Msg: "Oops! Empty Data Set." });
    return;
  }

  //Check Element Count

  if (Object.keys(req.body).length != 4) {
    res
      .status(200)
      .json({ Type: "ERROR", Msg: "Oops! Can't Find Correct Dataset" });
    return;
  }

  const var_proname = req.body.proname;
  const var_prostart = req.body.prostart;
  const var_proend = req.body.proend;
  const var_prostatus = req.body.prostatus;
  let proActive = true;
  if (
    var_prostatus.toLowerCase() === "ongoing" ||
    var_prostatus.toLowerCase() === "onhold"
  ) {
    proActive = true;
  } else if (
    var_prostatus.toLowerCase() === "finished" ||
    var_prostatus.toLowerCase() === "cancelled"
  ) {
    proActive = false;
  } else {
    console.log("enter valid status");
  }

  var sqlqry = `INSERT INTO master_projects(pro_name, pro_start, pro_end,pro_status,pro_active) VALUES('${var_proname}','${var_prostart}','${var_proend}','${var_prostatus}','${proActive}');`;

  pool.query(sqlqry, (error, results) => {
    if (error) {
      res.status(200).json({ Type: error.name, Msg: error.message });
      return;
    } else {
      res
        .status(200)
        .json({ Type: "SUCCESS", Msg: "New Project Added Successfully!" });
      return;
    }
  });
};