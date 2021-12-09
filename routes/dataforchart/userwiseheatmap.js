const { pool } = require("../dbconfig");

function HourConvert(value)
      {
        var lastno = value.split('.').reverse()[0];
        var firstno = value.split('.').reverse()[1];
        var joinvalue = value;

        if(lastno === "00")
        {
          joinvalue = firstno + ".00";
        }
        else if(lastno === "25")
        {
          joinvalue = firstno + ".15";
        }
        else if(lastno === "50")
        {
          joinvalue = firstno + ".30";
        }
        else if(lastno === "75")
        {
          joinvalue = firstno + ".45";
        }

        return joinvalue;
      }

module.exports = async (req, res) => {
  //Check Body Is Empty

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(200).json({ Type: "ERROR", Msg: "Oops! Empty Data Set." });
    return;
  }

  //Check Element Count

  if (Object.keys(req.body).length != 2) {
    res
      .status(200)
      .json({ Type: "ERROR", Msg: "Oops! Can't Find Correct Dataset" });
    return;
  }

  const var_userid = req.body.userid;
  const var_year = req.body.year;
  var firstDay = new Date(var_year,0,2);
  var lastDay = new Date(var_year, 12, 1);
  
  var daysOfYear = [];
  for (var d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
      //daysOfYear.push(new Date(d).toISOString().substring(0, 10));
      var date_ = new Date(d).toISOString().substring(0, 10)
      var sqlqry = `SELECT '${d}' AS tsdate, to_char(COALESCE(SUM(task_hours),0.00), '0.00') AS totalhours FROM task WHERE emp_id='${var_userid}' AND task_date='${date_}';`;
      
      response = await pool.query(sqlqry);
      var tthours = await HourConvert(response.rows[0].totalhours);
      daysOfYear.push({date:date_,count:tthours});
      
  }

      res.status(200).json({ Type: "SUCCESS", Dataset: daysOfYear });
      return;
};