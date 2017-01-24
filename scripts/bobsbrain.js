// Description:
//   <description of the scripts functionality>
// ...
'use strict';

//const fetch = require('node-fetch');

module.exports =  (robot) =>  {

  robot.messageRoom('general', 'Hello 🌍 I am BoB')

  robot.hear(/bob yo/, (res) => {
    res.send(`yo ${res.message.user.name}`);
  });

  robot.hear(/tired|too hard|upset|bored/i, (res) => {
    res.send(`😡 ${res.message.user.name}`);
  });

  robot.hear(/bob help me with (.*)/i, (res) => {
    res.send(`help yourself with ${res.match[1]} 😜`);
  });

  // display the response of BoBBy
  robot.router.post(`/hey/iam/bob/:room`, (req, res) => {
    console.log(req.body, req.params);
    res.send({message:"yo"})
    //res.status(201).end();
  });

};
