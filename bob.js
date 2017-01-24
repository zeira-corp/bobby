#!/usr/bin/env node
"use strict";
require('shelljs/global');

// Hubot port
process.env["EXPRESS_PORT"] = 8082;
// BoB will post his response(s) here
// process.env["HUBOT_POST_RESPONSES_URL"] = "http://localhost:8080/hey/iam/bob"
// here, BoB will talk to himself
process.env["HUBOT_POST_RESPONSES_URL"] = "http://localhost:8082/hey/iam/bob"

exec(`./bin/hubot -a http-adapter`)
