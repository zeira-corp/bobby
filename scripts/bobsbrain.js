// Description:
//   <description of the scripts functionality>
// ...
'use strict';

const fetch = require('node-fetch');

console.log("😛", process.env.FROM_GITHUB_HOOK)

module.exports =  (robot) =>  {

  robot.messageRoom('general', 'Hello :earth_africa:')

  robot.hear(/bob yo/, (res) => {
    res.send(`yo ${res.message.user.name}`);
  });

  // listen CI server
  // CI server post on this route when it wants to send information to Bob
  robot.router.post(process.env.FROM_GITHUB_HOOK, (req, res) => {
    console.log("🤖", req.body)
    robot.messageRoom('general', req.body.message)
    res.status(200).end()
  })

};
