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

  // listen to webhook(s) from GitHub platform
  robot.router.post(process.env.FROM_GITHUB_HOOK, (req, res) => {

    let event = req.headers['x-github-event'];
    let owner = req.body.repository.owner.login;
    let branch = req.body.ref !== undefined ? req.body.ref.split("/").pop() : undefined;
    let repository_url = req.body.repository.clone_url;
    let repository_name = req.body.repository.name;
    let action = req.body.action;
    let merged = req.body.pull_request !== undefined ? req.body.pull_request.merged : undefined;

    let messages = [
      `:zap: Event: ${event}\n`,
      branch !== undefined ? `  - branch: ${branch}\n` : "",
      action !== undefined ? `  - action: ${action}\n` : "",
      owner !== undefined ?  `- owner: ${owner}\n` : "",
      `:panda_face: sender: ${req.body.sender.login} | ${req.body.sender.html_url}\n`,
      req.body.organization !== undefined ? `:house: organization: ${req.body.organization.login} | ${req.body.organization.url}\n` : "",
      `:package: repository: ${req.body.repository.name} | ${req.body.repository.html_url}\n`,
      req.body.head_commit !== undefined && req.body.deleted == false ? `:page_facing_up: head_commit: ${req.body.head_commit.message}\n` : "",
      req.body.head_commit !== undefined && req.body.deleted == false ? `${req.body.head_commit.url}\n` : "",
      merged !== undefined ? `pull request merged: ${merged}\n` : ""
    ]

    if(event=="issues") {
      messages.push(`issue: "${req.body.issue.title}" by ${req.body.issue.user.login} `);
      messages.push(`issue url: ${req.body.issue.html_url}`);
    }

    if(event=="issue_comment") {
      messages.push(`issue comment by ${req.body.comment.user.login} `);
      messages.push(`comment url: ${req.body.comment.html_url}`);
    }
    messages.push("\n\n");

    robot.messageRoom('ops', messages.join(""));

    console.log("🤖", messages.join(""))

    res.status(200).end()


  })

};
