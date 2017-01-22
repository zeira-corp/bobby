// Description:
//   <description of the scripts functionality>
// ...
'use strict';

const fetch = require('node-fetch');


module.exports =  (robot) =>  {

  robot.messageRoom('general', 'Hello :earth_africa:')

  robot.hear(/bob yo/, (res) => {
    res.send(`yo ${res.message.user.name}`);
  });

};
