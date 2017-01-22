#!/usr/bin/env node
"use strict";
require('shelljs/global');

process.env["USER"] = "bob";


// Hubot port
process.env["EXPRESS_PORT"] = process.env["PORT"] || 8082;

process.env["ROCKETCHAT_URL"] = "http://rocketchat-snowcamp.cleverapps.io";
process.env["ROCKETCHAT_ROOM"] = "";
process.env["LISTEN_ON_ALL_PUBLIC"] = true;
process.env["ROCKETCHAT_USER"] = "bob";
process.env["ROCKETCHAT_PASSWORD"] = "bobmorane"; // mail indythebot@gmail.com
process.env["ROCKETCHAT_AUTH"] = "password";

exec(`./bin/hubot -a rocketchat`)
