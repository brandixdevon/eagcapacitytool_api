const { pool } = require("../dbconfig");

module.exports = async (req, res) => {
  //Check Body Is Empty

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(200).json({ Type: "ERROR", Msg: "Oops! Empty Data Set." });
    return;
  }

  //Check Element Count

  if (Object.keys(req.body).length != 5) {
    res
      .status(200)
      .json({ Type: "ERROR", Msg: "Oops! Can't Find Correct Dataset" });
    return;
  }
  const var_proid = req.body.proid;
  const var_proname = req.body.proname;
  const var_prostart = req.body.prostart;
  const var_proend = req.body.proend;
  const var_prostatus = req.body.prostatus;
  var proActive;
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
    console.log("Enter valid status");
  }
  
  var sqlqry = `UPDATE master_projects SET pro_active = '${proActive}', pro_name = '${var_proname}' ,pro_start = '${var_prostart}', pro_end ='${var_proend}',pro_status ='${var_prostatus}' WHERE pro_id= ${var_proid}  `;
  pool.query(sqlqry, (error, results) => {
    if (error) {
      res.status(200).json({ Type: error.name, Msg: error.message });
      return;
    } else {
      res
        .status(200)
        .json({ Type: "SUCCESS", Msg: "Project details Update Successfully!" });
      return;
    }
  });
};