const ActiveDirectory = require('activedirectory');
const { pool } = require('../dbconfig');

module.exports = (req, res) => {
  
  //Check Body Is Empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(200).json({Type: "ERROR", Msg : "Oops! Empty Data Set."})
       return;
  }
//Check Element Count
  if(Object.keys(req.body).length != 2) {
    res.status(200).json({Type: "ERROR", Msg : "Oops! Can't Find Correct Dataset"})
       return;
  }

  
  var config = { url: 'ldap://col-dc-05.BRANDIXLK.ORG', baseDN: 'dc=domain,dc=com' };

    var ad = new ActiveDirectory(config);
    var get_username = req.body.username;
    var username = get_username.toLowerCase();
    var password = req.body.password;
    // Authenticate
    ad.authenticate(username, password, function(err, auth) {
        if (err) {
            //console.log('ERROR: '+JSON.stringify(err));
            res.status(200).json({ Type: "ERROR", Msg : "Oops! Login Details are not valid. Please Try again!"});
            return;
        }
        else
        {
          if (auth) {
            //console.log('Authenticated!');
            
            var selectsql = `SELECT * FROM usermaster where lower(username)='${username}' AND isavailable='true' AND ugid IN (SELECT ugid FROM usergroups WHERE ugactive='true' AND isadmin='true');`;
            
            pool.query(selectsql, (error, results) => {
              if (error) {
                res.status(200).json({Type: 'ERROR', Msg : error.message, Stack : error.stack})
                return;
              }
              else
              {
                if(results.rows.length == 1){

                  res.status(200).json({Type: 'SUCCESS', Userid : results.rows[0].id, Username : username})
                  return;
                }
                else
                {
                  res.status(200).json({Type: 'ERROR', Msg : 'User not found. Please Check your Username and Password Again', Stack : 'Admin Not Found.'})
                  return;
                }
              }
       
            });
          }
          else {
            //console.log('Authentication failed!');
              
            res.status(200).json({ Type: "ERROR", Msg : "Admin Not Found. Please Check your Username and Password Again"});
            return;
          }
        }
        
    });
  
  
};